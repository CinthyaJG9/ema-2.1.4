import { useState, useEffect, FC } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { EstudianteService, UsuarioService } from '@/services'
import { useSemestre, useEspecialidad } from '@/hooks'
import { useContextRegister } from '../hooks'

import { IDUser, IMEstudianteRes, IRegisterStudent } from '@/interfaces'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SchemaRegisterAcademic } from '@/utils/schemas'

import { toast, toastConfig } from '@/libs'
import { Input, Select } from '@/components/Forms'
import Loader from '@/components/Loader'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FaArrowLeft } from 'react-icons/fa'

const customId = 'custom-id-AcademicDataForm'

const AcademicDataForm: FC = () => {
  const [showPass, setShowPass] = useState(true)
  const [showConfirmPass, setShowConfirmPass] = useState(true)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { data: session } = useSession()

  const { dataSemestre, dataEspecialidad, setIndexActive, setAcademicData } =
    useContextRegister()

  const { optionsSemestre, selectedSemestre, setSelectedSemestre } =
    useSemestre(dataSemestre)

  const {
    optionsEspecialidad,
    selectedEspecialidad,
    defaultEspecialidad,
    setSelectedEspecialidad
  } = useEspecialidad(dataEspecialidad)

  const filterEspecialidad = !selectedSemestre?.value
    ? [{ name: 'Primero debes escoger tu semestre', value: null }]
    : selectedSemestre?.value! <= 2
    ? optionsEspecialidad?.filter(({ value }) => value! = 1) || []
    : optionsEspecialidad?.filter(({ value }) => value! > 1) || []

  useEffect(() => {
    setSelectedEspecialidad(defaultEspecialidad)
  }, [selectedSemestre])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm<IRegisterStudent>({
    resolver: yupResolver(SchemaRegisterAcademic)
  })

  const watchBoleta = watch('boleta_est')
  const watchEmail = watch('correo_user')
  const watchPassword = watch('password_user')
  const watchConfirmPassword = watch('confirmPassword')

  useEffect(() => {
    if (session && session.user && session.user.email) {
      const passwordDefault = '12345As#'
      const email = session.user.email
      setValue('correo_user', email)
      setValue('password_user', passwordDefault)
      setValue('confirmPassword', passwordDefault)
    }
  }, [session])

  const onSubmit = async (data: IRegisterStudent) => {
    const { boleta_est, correo_user } = data

    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig
    })

    setLoading(true)

    const { data: students } = await EstudianteService.searchByBoleta(
      boleta_est
    )
    const { data: users } = await UsuarioService.searchByEmail(correo_user)

    setLoading(false)

    console.log({ students, users })

    const [studentData] = students ?? []
    const [existingUserData] = users ?? []

    if (studentData) {
      toast.update(customId, {
        render: 'Ya existe un estudiante con esa boleta',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
        ...toastConfig
      })
    }

    if (
      existingUserData &&
      Array.isArray(existingUserData) &&
      existingUserData.length > 0 &&
      existingUserData[0]?.persona.id_per !== 1
    ) {
      toast.update(customId, {
        render: 'Ya existe un usuario con ese correo',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
        ...toastConfig
      })
    }

    if (
      (!studentData && !existingUserData) ||
      (Array.isArray(existingUserData) &&
        existingUserData.length > 0 &&
        existingUserData[0]?.persona.id_per === 1)
    ) {
      toast.update(customId, {
        render: 'Datos validados correctamente',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
        ...toastConfig
      })
      setAcademicData(data)
    }
  }

  return (
    <form
      className='flex w-full flex-col items-center gap-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid w-5/6 grid-cols-1 items-center justify-items-center gap-x-10 gap-y-5 md:w-4/6 md:grid-cols-2 '>
        <Input
          type='text'
          value={watchBoleta}
          placeholder='Boleta'
          register={{ ...register('boleta_est') }}
          errors={errors.boleta_est}
        />
        <Controller
          control={control}
          name='id_sem'
          render={({ field: { onChange } }) => {
            // console.log(`selectedSemestre${selectedSemestre}`);
            return(
              <Select
              name='id_sem'
              placeholder='Escoge un semestre'
              options={optionsSemestre}
              selected={selectedSemestre}
              setSelected={setSelectedSemestre}
              onChange={onChange}
              errors={errors?.id_sem}
            />
            );
          }}
        />

<Controller
  control={control}
  name='id_es'
  render={({ field: { onChange } }) => {
    // console.log(`filtroEspecialidad${filterEspecialidad}`);
    // console.log(`selectedSemestre${selectedSemestre}`);
    return (
      <Select
          name='id_es'
          placeholder='Escoge una especialidad'
          options={filterEspecialidad}
          selected={selectedEspecialidad}
          setSelected={setSelectedEspecialidad}
          onChange={onChange}
          errors={errors?.id_es}
        />
      ); 
}}
/>

        <Input
          type='text'
          value={watchEmail}
          placeholder='Correo electrónico'
          register={{ ...register('correo_user') }}
          errors={errors.correo_user}
          disabled={disabled}
        />
        {!session && (
          <>
            <Input
              type={showPass ? 'password' : 'text'}
              value={watchPassword}
              placeholder='Contraseña'
              register={{ ...register('password_user') }}
              errors={errors.password_user}
              icon={
                showPass ? (
                  <AiOutlineEyeInvisible
                    size={20}
                    className='absolute top-3 right-4 cursor-pointer text-gray-400'
                    onClick={() => setShowPass(!showPass)}
                  />
                ) : (
                  <AiOutlineEye
                    size={20}
                    className='absolute top-3 right-4 cursor-pointer text-gray-400'
                    onClick={() => setShowPass(!showPass)}
                  />
                )
              }
            />
            <Input
              type={showConfirmPass ? 'password' : 'text'}
              value={watchConfirmPassword}
              placeholder='Confirmar Contraseña'
              register={{ ...register('confirmPassword') }}
              errors={errors.confirmPassword}
              icon={
                showConfirmPass ? (
                  <AiOutlineEyeInvisible
                    size={20}
                    className='absolute top-3 right-4 cursor-pointer text-gray-400'
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  />
                ) : (
                  <AiOutlineEye
                    size={20}
                    className='absolute top-3 right-4 cursor-pointer text-gray-400'
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  />
                )
              }
            />
          </>
        )}
      </div>
      <div className='col-span-2 flex flex-col items-center justify-center '>
        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' {...register('check')} />
          <label htmlFor='remember'>
            Aceptar{' '}
            <Link
              href='/PrivacyNotice'
              className='font-bold hover:underline hover:decoration-secondary hover:decoration-wavy dark:text-gray-100'
            >
              Términos y condiciones
            </Link>
          </label>
        </div>
        <p className='m-1 h-5 text-sm italic text-red-500 first-letter:uppercase'>
          {errors.check?.message}
        </p>
      </div>
      <div className='gap grid grid-cols-1 items-center justify-items-center gap-x-10 gap-y-5 md:grid-cols-2 '>
        <div className='relative'>
          <button
            type='button'
            className='mr-3 flex w-full items-center justify-between rounded-lg bg-secondary py-2 px-11 font-bold text-white shadow-lg transition-colors hover:bg-secondary/70 hover:shadow-secondary/50 focus:outline-none focus:ring-2
            focus:ring-secondary/50 focus:ring-opacity-50'
            onClick={() => setIndexActive(1)}
          >
            <FaArrowLeft size={16} className='text-white' />
            VOLVER
          </button>
        </div>
        <div className='relative'>
          <button
            type='submit'
            className='rounded-lg bg-secondary py-2 px-8 font-bold text-white shadow-lg transition-colors hover:bg-secondary/70 hover:shadow-secondary/50
            focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-opacity-50'
          >
            {!loading ? 'CREAR CUENTA' : <Loader />}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AcademicDataForm

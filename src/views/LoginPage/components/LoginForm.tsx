import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { signIn, useSession } from 'next-auth/react'

import { UsuarioService, AuthService } from '@/services'
import type { ILogin } from '@/interfaces'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SchemaLogin } from '@/utils'

import { toast, toastConfig } from '@/libs'
import ReCAPTCHA from 'react-google-recaptcha'
import { Input } from '@/components'

import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible
} from 'react-icons/ai'

const customId = 'custom-id-PersonalDataForm'

const LoginForm: FC = () => {
  const [showPass, setShowPass] = useState(true)
  const [captchaValid, setCaptchaValid] = useState(false)

  const router = useRouter()

  const navigateTo = (url: string) => {
    router.replace(url).finally(console.log)
  }

  //const { data: session, status } = useSession();

  // useEffect(() => {
  //console.log({ session });
  //}, [session]);

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>({
    resolver: yupResolver(SchemaLogin)
  })

  const onSubmit = async (dataForm: ILogin) => {
    const { correo_user, password_user } = dataForm

    const { data } = await UsuarioService.searchByEmail(correo_user)

    if (data) {
      const noseqes = await signIn('credentials', {
        email: correo_user,
        password: password_user,
        redirect: true,
        callbackUrl: '/student'
      })
      console.log({ noseqes })

      if (noseqes) toast.error('Usuario o contraseña incorrectos')
    }
  }

  const onChange = (): void => {
    setCaptchaValid(!captchaValid)
    setValue('captcha', captchaValid)
  }

  const watchEmail = watch('correo_user')
  const watchPassword = watch('password_user')

  return (
    <form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type='text'
        value={watchEmail}
        placeholder='Correo electrónico'
        register={{ ...register('correo_user') }}
        errors={errors.correo_user}
        icon={
          <AiOutlineMail
            size={20}
            className='absolute top-3 right-4 text-gray-400'
          />
        }
      />
      <Input
        type={showPass ? 'password' : 'text'}
        value={watchPassword}
        placeholder='Password'
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
      <ReCAPTCHA
        sitekey='6Le70TMmAAAAAGDmU4-UJUHsNlCkMNnAolJAH44S'
        onChange={onChange}
        className='pb-1'
      />
      <p className='m-1 h-5 text-xs italic text-red-500 first-letter:uppercase'>
        {errors.captcha?.message}
      </p>
      <div className='mx-auto mb-8 flex w-full max-w-md items-center justify-between text-gray-500'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' {...register('remember')} />
          <label htmlFor='remember' className='dark:text-gray-300'>
            Recordarme
          </label>
        </div>
        <div>
          <a
            href='#'
            className=' hover:text-gray-900 hover:underline hover:decoration-secondary hover:decoration-wavy dark:text-gray-300 dark:hover:text-gray-100'
          >
            ¿Olvidaste tu password?
          </a>
        </div>
      </div>
      <div className='mx-auto w-full max-w-md '>
        <button
          type='submit'
          className='w-full cursor-pointer rounded-lg bg-secondary py-2 px-4 text-white transition-colors hover:bg-secondary-light'
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  )
}
export default LoginForm

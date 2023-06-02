import { FC, useContext } from 'react'
import { RegisterContext } from '../../context'

import LoadBarItem from './LoadBarItem'

import { FaUserAlt, FaUserTie, FaArrowRight } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'

interface Props {}

const LoadBarPC: FC<Props> = () => {
  const { personalData, academicData, indexActive } =
    useContext(RegisterContext)
  return (
    <section className='flex w-full items-center justify-center gap-3'>
      <LoadBarItem
        title='Información Personal'
        description='Sólo son algunos datos personales'
        active={indexActive === 1}
        complete={!!personalData}
        icon={<FaUserAlt size={40} />}
      />
      <FaArrowRight size={40} />
      <LoadBarItem
        title='Información Académica'
        description='Necesitamos esto para poder ayudarte'
        active={indexActive === 2}
        complete={!!academicData}
        icon={<FaUserTie size={40} />}
      />
      <FaArrowRight size={40} />
      <LoadBarItem
        title='Completado'
        description='¡Felicidades, te has registrado!'
        active={indexActive === 3}
        icon={<BsCheckLg size={40} />}
      />
    </section>
  )
}

export default LoadBarPC

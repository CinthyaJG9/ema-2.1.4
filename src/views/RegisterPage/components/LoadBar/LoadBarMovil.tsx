import { FC, useContext } from 'react'
import { RegisterContext } from '../../context'
import { LoadBarItemMovil } from './'

interface Props {}

const LoadBarMovil: FC<Props> = () => {
  const { personalData, academicData, indexActive } =
    useContext(RegisterContext)
  return (
    <ol className='flex justify-between gap-3 border-b-2 border-b-secondary-light'>
      <LoadBarItemMovil
        title='Información Personal'
        active={indexActive === 1}
        complete={!!personalData}
      />
      <LoadBarItemMovil
        title='Información Académica'
        active={indexActive === 2}
        complete={!!academicData}
      />
      <LoadBarItemMovil title='Completado' active={indexActive === 3} />
    </ol>
  )
}

export default LoadBarMovil

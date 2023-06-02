import { FC } from 'react'

interface Props {
  text: string
}

const Title: FC<Props> = ({ text }) => {
  return (
    <h2 className='h-[10vh] text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl xl:leading-[4.5rem]'>
      {text}
    </h2>
  )
}

export default Title

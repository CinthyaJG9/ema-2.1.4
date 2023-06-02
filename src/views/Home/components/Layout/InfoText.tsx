import { FC } from 'react'

interface Props {
  title: string
  text: string
}

const InfoText: FC<Props> = ({ title, text }) => {
  return (
    <div className='grid h-full w-full place-items-center'>
      <div className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
        <div className='text-dark-500 flex flex-col gap-8 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
          <h3 className='mb-2 font-bold'>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoText

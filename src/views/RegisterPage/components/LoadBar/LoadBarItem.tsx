import { FC } from 'react'

interface Props {
  title: string
  description: string
  active?: boolean
  complete?: boolean
  icon: JSX.Element
}

const LoadBarItem: FC<Props> = ({
  title,
  description,
  active,
  complete,
  icon
}) => {
  return (
    <div
      className={`flex h-[8rem] items-center rounded-r-xl xl:h-[8.5rem] ${
        active && 'shadow-lg shadow-secondary/50'
      }`}
    >
      <div
        className={`flex items-center justify-center py-5 ${
          active || complete ? 'bg-secondary/20' : 'bg-gray-300'
        } ${
          active
            ? 'h-full w-[6rem] xl:w-[6.5rem]'
            : 'h-[90%] w-[5rem] xl:w-[5.5rem]'
        }`}
      >
        {icon}
      </div>
      <div
        className={`flex flex-wrap items-center rounded-r-xl p-4 py-5 text-white ${
          active || complete ? 'bg-secondary/70' : 'bg-gray-400'
        } ${
          active
            ? 'h-full w-[13.5rem] xl:w-[14rem]'
            : 'h-[90%] w-[12.5rem] xl:w-[13rem]'
        }`}
      >
        <h4 className='font-bold'>{title}</h4>
        <p className='text-sm xl:text-base'>{description}</p>
      </div>
    </div>
  )
}

export default LoadBarItem

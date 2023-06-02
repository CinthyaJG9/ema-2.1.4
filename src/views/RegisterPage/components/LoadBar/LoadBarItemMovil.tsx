import { FC } from 'react'

interface Props {
  title: string
  active?: boolean
  complete?: boolean
}

const LoadBarItemMovil: FC<Props> = ({ title, active, complete }) => {
  return (
    <li className='relative flex flex-grow leading-normal text-secondary before:absolute before:bottom-[-5px] before:left-[calc(50%-6px)] before:block before:h-2 before:w-2 before:rounded-[50%] before:bg-secondary first:before:left-0 last:before:left-auto last:before:right-0'>
      <span className='text-center'>{title}</span>
    </li>
  )
}

export default LoadBarItemMovil

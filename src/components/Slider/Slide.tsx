import { FC } from 'react'

interface Props {
  children: React.ReactNode
}
const Slide: FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-full min-w-full items-center justify-center duration-150 ease-out '>
      {children}
    </div>
  )
}

export default Slide

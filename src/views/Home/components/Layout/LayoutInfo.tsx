import { FC, useRef } from 'react'
import { useNearScreen } from '@/hooks'
import Title from './Title'
import { useViewNearScreen } from '../../hooks'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  name: 'Inicio' | 'Philosophy' | 'Mission' | 'Objectives'
  title: string
  children: React.ReactNode
}

const LayoutInfo: FC<Props> = ({ id, name, title, children, ...props }) => {
  const refView = useRef(null)

  const { isNearScreen } = useNearScreen({
    externalRef: refView,
    once: false
  })

  useViewNearScreen({ refreshView: name, isNearScreen })

  return (
    <section
      id={id}
      ref={refView}
      className='grid h-screen w-full place-items-center pt-[10vh]'
      {...props}
    >
      <Title text={title} />

      <div className='grid h-[80vh] grid-cols-1 md:px-8 lg:grid-cols-2'>
        {children}
      </div>
    </section>
  )
}

export default LayoutInfo

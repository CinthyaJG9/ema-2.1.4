import { FC } from 'react'
import { useScreenSize } from '@/hooks'
import { LoadBarPC, LoadBarMovil } from './'

interface Props {}

const LoadBar: FC<Props> = () => {
  const { width } = useScreenSize()

  return width && width >= 1024 ? <LoadBarPC /> : <LoadBarMovil />
}

export default LoadBar

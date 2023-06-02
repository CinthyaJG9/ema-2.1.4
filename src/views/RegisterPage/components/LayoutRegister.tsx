import { Header } from '@/components'
import Head from 'next/head'
import { FC } from 'react'

interface Props {
  title: string
  description: string
  children: React.ReactNode
}
const LayoutHome: FC<Props> = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default LayoutHome

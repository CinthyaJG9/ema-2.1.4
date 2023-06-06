import Head from 'next/head'
import { Header } from '@/components'
import { NavStudent } from '@/libs'
import { FC } from 'react'

interface Props {
  title: string
  description: string
  bgDefault?: string
  children: React.ReactNode
}
export const LayoutStudent: FC<Props> = ({
  title,
  description,
  bgDefault,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header navs={NavStudent} />
      <main>{children}</main>
    </>
  )
}

//export default LayoutStudent
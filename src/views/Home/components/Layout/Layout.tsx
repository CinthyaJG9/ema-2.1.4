import { useEffect, useState, FC } from 'react'
import { Navbar } from '@/components'
import Head from 'next/head'
import { useHomeContext } from '@/views/Home/hooks'

interface Props {
  title: string
  description: string
  children: React.ReactNode
}

export const NavHome = [
  {
    name: 'Inicio',
    href: '#home',
    active: true
  },
  {
    name: 'Filosofía y propósito',
    href: '#filosofia',
    active: false
  },
  {
    name: 'Misión y visión',
    href: '#mision',
    active: false
  },
  {
    name: 'Objetivos y valores',
    href: '#objetivos',
    active: false
  }
]

const LayoutHome: FC<Props> = ({ title, description, children }) => {
  const {
    isInicioNearScreen,
    isMissionNearScreen,
    isObjectivesNearScreen,
    isPhilosophyNearScreen
  } = useHomeContext()

  const [navs, SetNavs] = useState<any[]>([])

  useEffect(() => {
    SetNavs(
      NavHome.map((nav) => {
        if (nav.href === '#home') return { ...nav, active: isInicioNearScreen }

        if (nav.href === '#filosofia')
          return { ...nav, active: isPhilosophyNearScreen }
        if (nav.href === '#mision')
          return { ...nav, active: isMissionNearScreen }

        if (nav.href === '#objetivos')
          return { ...nav, active: isObjectivesNearScreen }

        return nav
      })
    )
  }, [
    isInicioNearScreen,
    isPhilosophyNearScreen,
    isMissionNearScreen,
    isObjectivesNearScreen
  ])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar navs={navs} fixed />
      {children}
    </>
  )
}

export default LayoutHome

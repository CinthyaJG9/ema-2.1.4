import { FC } from 'react'
import Link from 'next/link'

import { useAuth, useScrolled } from '@/hooks'
import { Logo } from '@/components/Logo'
import { HamburguerMenu, Profile, ListOfNavs } from '../Header'
import type { NavItem } from '@/typings'

interface Props {
  navs: NavItem[]
  bgDefault?: string
  bgisntScrolled?: string
  fixed?: boolean
}
const Navbar: FC<Props> = ({
  navs,
  bgDefault = 'bg-primary-light dark:bg-tertiary',
  bgisntScrolled = 'bg-primary-light dark:bg-tertiary',
  fixed = false
}) => {
  const { isScrolled } = useScrolled()
  const { isLogued } = useAuth()

  return (
    <header
      className={`  items-center justify-between ${
        fixed ? 'fixed' : ''
      } ${bgisntScrolled} ${
        isScrolled
          ? 'fixed bg-primary-dark backdrop-blur-sm dark:bg-tertiary-dark'
          : 'flex'
      }`}
    >
      <Logo />
      <nav className='hidden w-6/12 items-center justify-center gap-8 font-medium text-gray-500 dark:text-gray-300 lg:flex'>
        <ListOfNavs navs={navs} />
      </nav>
      <>
        <div className='hidden items-center justify-center gap-8 lg:flex'>
          {isLogued ? (
            <Profile />
          ) : (
            <>
              <Link
                href={'/register'}
                className='rounded-lg border border-gray-300 px-4 py-2 hover:border-secondary hover:text-secondary '
              >
                Regístrate
              </Link>
              <Link
                href={'/login'}
                className='rounded-lg border border-gray-300 px-4 py-2 hover:border-secondary hover:text-secondary'
              >
                Iniciar Sesión
              </Link>
            </>
          )}
        </div>
        <div className='flex w-6/12 justify-end text-white lg:hidden'>
          <HamburguerMenu />
        </div>
      </>
    </header>
  )
}

export default Navbar

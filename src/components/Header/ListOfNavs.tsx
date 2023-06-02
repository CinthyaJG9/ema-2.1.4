import { FC } from 'react'
import Link from 'next/link'
import { NavItem } from '@/typings'

interface Props {
  navs: NavItem[]
}

const ListOfNavs: FC<Props> = ({ navs }) => {
  return (
    <>
      {navs?.map(({ name, href, active }) => (
        <Link
          href={href}
          key={name}
          className={`
        hover:text-gray-900
        dark:hover:text-white
        xl:text-base
        2xl:text-lg
    ${
      active &&
      'text-gray-900 underline decoration-secondary decoration-wavy dark:text-white'
    } transition-colors duration-300`}
        >
          {name}
        </Link>
      ))}
    </>
  )
}

export default ListOfNavs

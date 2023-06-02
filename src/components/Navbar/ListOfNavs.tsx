import { FC } from 'react'
import { NavItem } from '@/typings'
import Nav from './Nav'

interface Props {
  navs: NavItem[]
}

const ListOfNavs: FC<Props> = ({ navs }) => {
  return (
    <>
      {navs?.map(({ name, href, active }) => (
        <Nav key={name} active={active} href={href} name={name} />
      ))}
    </>
  )
}

export default ListOfNavs

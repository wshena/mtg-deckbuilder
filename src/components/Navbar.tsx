import React from 'react'
import MainContainer from './container/MainContainer'
import Logo from './Logo'
import { NavbarLinks } from '@/const'
import Link from 'next/link'
import { TriangleDownIcon } from '@/icons/Icons'
import styles from '@/styles/Navbar.module.css'
import SearchButton from './buttons/SearchButton'
import MenuButton from './buttons/MenuButton'

const Navbar = () => {
  return (
    <MainContainer>
      <div className='w-full text-white flex items-center justify-between px-5 py-3 md:px-10 md:py-3'>
        <nav className='flex items-center gap-5'>
          <Logo />
          <ul className="hidden lg:flex items-center gap-5">
            {NavbarLinks?.map((item:NavbarLink) => (
              <li key={item.label}>
                {item.isDropdown ? (
                  <div className="flex items-center gap-3 cursor-pointer">
                    <span className='capitalize'>{item.label}</span>
                    <TriangleDownIcon size={20} style='text-white' /> 
                  </div>
                ) : (
                  <Link href={item.url} className={`capitalize ${styles.navLink}`}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Link href={'/login'} className={`hidden lg:inline capitalize ${styles.navLink}`}>login</Link>
          <Link href={'/signin'} className={`hidden lg:inline capitalize ${styles.navLink}`}>sign in</Link>
          <SearchButton />
          <MenuButton />
        </div>
      </div>
    </MainContainer>
  )
}

export default Navbar
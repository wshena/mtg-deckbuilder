import { MenuIcon } from '@/icons/Icons'
import React from 'react'
import styles from '@/styles/Navbar.module.css'

const MenuButton = () => {
  return (
    <button className={`flex lg:hidden items-center gap-3 ${styles.navLink}`}>
      <MenuIcon size={25} style='text-white' />
      <span className='hidden md:inline'>Menu</span>
    </button>
  )
}

export default MenuButton
'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import { NavbarLinks } from '@/const'
import Link from 'next/link'
import { TriangleDownIcon, TriangleRightIcon, TriangleUpIcon } from '@/icons/Icons'
import SearchButton from './buttons/SearchButton'
import MenuButton from './buttons/MenuButton'
import ContentContainer from './container/ContentContainer'

const DesktopDropdownLink = ({content}:{content:NavbarDropdown}) => {
  return (
    <Link href={content.url} className="flex items-center justify-between min-w-[100px] p-1 rounded-md hover:bg-purple-400 text-white hover:text-black group">
      <div className="flex items-center gap-3">
        {content.icon}
        <div className="flex flex-col gap-1">
          <span className='capitalize text-md font-bold'>{content.label}</span>
          <span className='text-[.8rem]'>{content.desc}</span>
        </div>
      </div>

      <TriangleRightIcon size={25} style='text-purple-400 group-hover:text-purple-700' />
    </Link>
  )
}

const DesktopDropdown = ({content}:{content:NavbarDropdown[] | undefined}) => {
  return (
    <div className="hidden lg:block absolute w-[550px] left-0 top-6 bg-black text-white text-sm py-2 px-5 rounded-md">
      <div className="grid grid-cols-2 gap-2">
        {content?.map((item:NavbarDropdown) => (
          <DesktopDropdownLink key={item.label} content={item} />
        ))}
      </div>
    </div>
  )
}

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ContentContainer>
      <div className='text-sm lg:text-md w-full text-white flex items-center justify-between px-5 py-3 md:px-10 md:py-3'>
        <nav className='flex items-center gap-5'>
          <Logo />
          <ul className="hidden lg:flex items-center gap-5">
            {NavbarLinks?.map((item:NavbarLink) => (
              <li key={item.label} className='relative'>
                {item.isDropdown ? (
                  <button onClick={handleClick} className="flex items-center gap-3 cursor-pointer">
                    <span className='capitalize'>{item.label}</span>
                    {click ? (<TriangleUpIcon size={20} style='text-white' /> ) : (<TriangleDownIcon size={20} style='text-white' /> )}
                  </button>
                ) : (
                  <Link href={item.url} className={`capitalize`}>{item.label}</Link>
                )}

                {/* desktop dropdown */}
                {click && item.isDropdown && <DesktopDropdown content={item.dropdown} />}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Link href={'/login'} className={`hidden lg:inline capitalize`}>login</Link>
          <Link href={'/signin'} className={`hidden lg:inline capitalize`}>sign in</Link>
          <SearchButton />
          <MenuButton />
        </div>
      </div>
    </ContentContainer>
  )
}

export default Navbar
'use client'
import { MobileNavbarLinks } from '@/const';
import { useUtilityStore } from '@/lib/zustand/utility'
import Link from 'next/link';
import React from 'react'

const MobileNavbar = () => {
  const { isClick } = useUtilityStore();
  
  const isMobileNavOpen = isClick.label === 'mobile-nav' && isClick.value;

  return (
    <section className={`fixed navbar-height-padding p-5 w-full h-screen top-0 left-0 transform bg-black/85 text-white transition-all duration-300 ease-in-out ${
      isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <ul className="bg-[#8f23af] rounded-[10px] mt-5 px-5 p-5 md:px-10 flex flex-col items-start gap-3">
        {MobileNavbarLinks?.map((item:NavbarLink) => (
          <Link href={item.url} className='capitalize text-md' key={item.label}>{item.label}</Link>
        ))}
      </ul>
    </section>
  )
}

export default MobileNavbar
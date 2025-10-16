'use client'
import React from 'react'
import { useUtilityStore } from '@/lib/zustand/utility';
import MobileNavbar from '../MobileNavbar';

const MainContainer = ({children}:{children:React.ReactNode}) => {
  const {isClick} = useUtilityStore();

  return (
    <div className="relative">
      {/* mobile navbar */}
      <MobileNavbar />
      
      {children}
    </div>
  )
}

export default MainContainer
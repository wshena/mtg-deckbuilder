import React from 'react'
import { CancelIcon, MenuIcon } from '@/icons/Icons'
import { useUtilityStore } from '@/lib/zustand/utility'

const MenuButton = () => {
  const { isClick, setIsClick, resetIsClick } = useUtilityStore();

  const handleToggle = () => {
    if (isClick.value && isClick.label === 'mobile-nav') {
      resetIsClick();
    } else {
      setIsClick({
        label: 'mobile-nav',
        value: true,
      });
    }
  };

  const isMenuOpen = isClick.value && isClick.label === 'mobile-nav';
  
  return (
    <button 
      onClick={handleToggle}
      className={`flex lg:hidden items-center gap-3`}
    >
      {isMenuOpen ? (
        <>
          <CancelIcon size={25} style='text-white' />
          <span className='hidden md:inline'>Close</span>
        </>
      ) : (
        <>
          <MenuIcon size={25} style='text-white' />
          <span className='hidden md:inline'>Menu</span>
        </>
      )}
    </button>
  );
}

export default MenuButton;
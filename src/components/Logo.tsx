import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} aria-label='ManaForge'>
      <Image src={'/image/logo.png'} alt='ManaForge' width={50} height={50} />
    </Link>
  )
}

export default Logo
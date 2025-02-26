import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-blue-500 p-5'>
        <Image src='https://www.umbradigitalcompany.com/images/general/logo-white.svg' height={100} width={100} alt='1'/>
    </div>
  )
}

export default Nav
import React from 'react'
import CartProducts from './components/CartProducts'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='cart-img h-[420px] flex flex-col items-center justify-center'>
            <h3 className='text-[72px] text-white font-semibold'>My Cart</h3>
            <p className='text-[14px] font-semibold text-white'><Link className='text-white/50 hover:text-secondary-dark' href={'/'}>Home / </Link> Cart</p>
        </div>
    <div className='container'>
        <CartProducts/>
    </div>
    </div>
  )
}

export default page
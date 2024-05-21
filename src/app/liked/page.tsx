import React from 'react'
import LikedProduct from './components/LikedProduct'

const Like = () => {
  return (
    <div className='container'>
        <p className='my-7 text-[14px] text-secondary-dark'>Home / <span className='text-black'> Wishlist</span></p>
        <h3 className='md:text-[30px] text-[20px] hidden md:block my-5 font-semibold'>Wishlist</h3>
        <p className='md:text-[37px] text-[25px] font-semibold my-3'>My wishlist on Amera</p>
        <div>
            <LikedProduct/>
        </div>
    </div>
  )
}

export default Like
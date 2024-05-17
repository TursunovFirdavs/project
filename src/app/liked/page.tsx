import React from 'react'
import LikedProduct from './components/LikedProduct'

const Like = () => {
  return (
    <div className='container'>
        <p className='my-7 text-[14px] text-secondary-dark'>Home / <span className='text-black'> Wishlist</span></p>
        <h3 className='text-[30px] my-5 font-semibold'>Wishlist</h3>
        <p className='text-[37px] font-semibold my-3'>My wishlist on Amera</p>
        <div>
            <LikedProduct/>
        </div>
    </div>
  )
}

export default Like
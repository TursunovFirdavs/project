import React from 'react'
import SingleProduct from '../components/Single-product'

const Product = ({params} :any) => {
  return (
    <div className='bg-secondary-light'>
        <div className='container'>
            <SingleProduct id={params?.id}/>
        </div>
    </div>
  )
}

export default Product
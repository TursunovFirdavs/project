import React from 'react'
import SubProducts from '../components/sub-products'
import Categories from '@/components/catecory/Categories';

const Sub = ({ params }: any) => {
  console.log(params);

  return (
    <div className='bg-secondary-light'>
      <div className='container py-8 flex gap-10'>
        <div className='xl:block hidden'>
          <Categories />
        </div>
        <SubProducts id={params?.id} />
      </div>
    </div>
  )
}

export default Sub
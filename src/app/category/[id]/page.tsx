import Categories from '@/components/catecory/Categories';
import React from 'react'
import SubCategories from '../components/Sub-categories';

export default function Category(props : any) {
  const id = props.params
  return (
    <div className='container bg-secondary-light'>
      <div className='py-8 flex gap-10'>
        <div className='xl:block hidden'>
        <Categories/>
        </div>
        <div>
          <SubCategories id={props?.params}/>
        </div>
      </div>
    </div>
  )
}

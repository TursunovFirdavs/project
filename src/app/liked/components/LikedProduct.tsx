'use client'
import Card from '@/components/card/Card'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LikedProduct = () => {
    const dispatch = useDispatch()
    const { like } = useSelector((state:any) => state.like)
    console.log(like);
    
  return (
    <div className='flex gap-[45px] flex-wrap'>
        {like?.map((item:any) => (
            <Card {...item} />
        ))}
    </div>
  )
}

export default LikedProduct
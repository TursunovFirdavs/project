'use client'
import React from 'react'
import { useGetCategories } from '@/service/query/useGetCategories'
import { Skeleton } from "@/components/ui/skeleton"

const TopCategory = () => {
    const { data, isLoading } = useGetCategories()
    console.log(data);

    const topFlash = data?.results?.filter((item: any) => item.title == 'Household Technique')
    console.log(topFlash);
    
    
  return (
    <div className='container'>
        <div className='flex items-center gap-5 mt-[50px] pb-8'>
            <h2 className='text-[24px] font-[500]'>Top Categories <span className='font-[200]'>Of The Month</span></h2>
            <div className='h-[1px] bg-gray-300 flex-1'></div>
        </div>
        <div className='flex flex-wrap'>
            {isLoading ? <Skeleton className="w-[100px] h-[20px] rounded-full" />
            :
            data?.results?.slice(0, 10).map((item:any) => (
                <div key={item.id} className='max-w-[290px] w-full bg-white flex justify-between items-center py-3 pr-3 pl-5 border-[1px]'>
                    <div>
                        <p className='text-[14px]'>{item.title}</p>
                        <p className='text-secondary-dark mt-1 text-[12px]'>{`(${item.children.length} items)`}</p>
                    </div>
                    <img className='w-[104px]' src={item.image} alt="" />
                </div>
            ))}
        </div>
        <div className='flex items-center gap-5 max-w-[720px] w-full mt-[50px] pb-8'>
            <h2 className='text-[24px] font-[500]'>Top Flash <span className='font-[200]'>Deals</span></h2>
            <div className='h-[1px] bg-gray-300 flex-1'></div>
        </div>
    </div>
  )
}

export default TopCategory
import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Category() {
    return (
        <div className='max-w-[275px] w-full bg-white px-6 py-4 rounded-sm overflow-hidden'>
            <div className='flex items-center gap-4 pb-4'>
                <TfiMenuAlt className='text-xl' />
                <p className='text-[14px] font-semibold'>SHOP BY CATEGORY</p>
            </div>
            {data?.map((item: number) => (
                <div key={item} className='border-t py-2 flex items-center gap-3'>
                    <img className='w-7' src="https://shop.theclub.com.hk/media/catalog/product/cache/328772890ce7c3d4dd74ab840a380f82/r/e/redminote12probl_1.png" alt="" />
                    <p>Category {item}</p>
                </div>
            ))}
        </div>
    )
}

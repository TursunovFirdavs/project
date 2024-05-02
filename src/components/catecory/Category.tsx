import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Category() {
    return (
        <div className='max-w-[275px] w-full bg-white px-6 py-4'>
            <div className='flex items-center gap-4'>
                <TfiMenuAlt className='text-xl' />
                <p className='text-[14px] font-semibold'>SHOP BY CATEGORY</p>
            </div>
            {data?.map((item: number) => (
                <div key={item}>
                    <img src="https://olcha.uz/image/128x128/category/eaKvQGBmhu…b2lBZcrwSyR34priEGLwTTzTZi5AphNAeDTRRGAJ92euM.png" alt="" />
                    <p>Category {item}</p>
                </div>
            ))}
        </div>
    )
}

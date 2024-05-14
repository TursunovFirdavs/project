'use client'
import { useGetSingleVariant } from '@/service/query/useGetSingleVariant';
import { product_images } from '@/types';
import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi';
import { FaRegStar } from "react-icons/fa";


const SingleProduct = ({ id }: any) => {
    const [select, setSelect] = useState(0)
    console.log(id);
    const { data } = useGetSingleVariant(id)
    console.log(data);



    return (
        <div>
            <h2 className='text-[14px] text-secondary-dark font-medium py-8'>{`Home  /  Product  /  ${data?.title}`}</h2>
            <div className='flex gap-10'>
                <div>
                    <img className='w-[714px]' src={data?.images[select].image} alt="" />
                    <div className='flex gap-5 mt-4'>
                        {data?.images?.map((item: product_images, i: number) => (
                            <img onClick={() => setSelect(i)} className='w-[163px]' src={item.image} alt="" />
                        ))}
                    </div>
                </div>
                <div>
                    <p className='text-[40px] font-semibold'>{data?.title}</p>
                    <div className='flex items-center gap-3 my-2'>
                        <div className='flex text-secondary-yellow gap-[1px] text-[18px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                        <p>{`Product count: ${data?.quantity}`}</p>
                    </div>
                    <p className='text-[28px] font-bold'>{data?.price}</p>
                    <p className='max-w-[700px] my-4'>{data?.other_detail?.replace(/<[^>]+>/g, "")} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto beatae labore error est officiis cumque incidunt pariatur dolor animi voluptates odit, quisquam ab ullam praesentium possimus alias obcaecati doloribus aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem expedita amet, aut id soluta laudantium similique facilis temporibus ex.</p>
                    <button className='bg-secondary-yellow py-1.5 px-10 rounded-3xl text-[14px] font-semibold'>+ Add To Cart</button>
                    <div className='flex items-center wishlist gap-2 mt-5'>
                        <FaRegStar className='text-secondary-dark text-xl icon'/>
                        <p className='text-[14px] w-text'>Add To Wishlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
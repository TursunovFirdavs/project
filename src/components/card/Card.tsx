'use client'
import { addToCart, removeFromCart } from '@/redux/reducer/cart';
import { liked, dislike } from '@/redux/reducer/like';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";



const Card = (item: any) => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const { cart } = useSelector((state: any) => state.cart)
    const { like } = useSelector((state: any) => state.like)
    console.log(like);


    const addCart = (item: any) => {
        dispatch(addToCart(item))
    }

    const removeCart = (item: any) => {
        dispatch(removeFromCart(item))
    }

    return (
        <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className={`sm:max-w-[255px] w-full ${visible ? 'shadow-md' : 'shadow-sm'} bg-white pb-3 rounded-md relative`}>
            <Link href={`/product/${item?.id}`}>
                <img className='w-[200px] py-6 h-[200px] object-contain m-auto' src={visible && item?.images[1] ? item?.images[1]?.image : item?.images[0]?.image} alt="" />
            </Link>
            <p className='text-center text-[18px] text-secondary-blue'>{`${item?.title?.length > 20 ? item?.title?.slice(0, 20) : item?.title + '...'}`}</p>
            <p className='text-center px-2.5 text-[14px] pt-1.5 pb-2.5 text-secondary-dark'>{item?.other_detail?.slice(3, 42)}</p>
            {visible ?
                <div>
                    {cart?.findIndex((cart: any) => cart.id == item.id) == -1 ?
                        <button onClick={() => addCart(item)} className='block w-[230px] m-auto rounded-3xl text-[14px] font-medium mt-2 transition-all duration-[0.5s] py-2 text-center bg-secondary-yellow'>Add To Cart</button>
                        :
                        <button onClick={() => removeCart(item)} className='block w-[230px] m-auto rounded-3xl text-[14px] font-medium mt-2 transition-all duration-[0.5s] py-2 text-center bg-secondary-yellow'>Remove From Cart</button>
                    }
                </div> :
                <div className='transition-all duration-1000'>
                    <div className='flex justify-center'>
                        <div className='flex text-secondary-yellow gap-[1px] text-[14px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                    </div>
                    <p className='text-center mt-2.5 text-[18px] font-semibold'>{item?.price}</p>

                </div>
            }
            <div className={`absolute top-4 right-0 ${visible ? 'right-3 block' : 'right-0 hidden'} flex flex-col gap-1.5`}>
                {like.findIndex((like: any) => like.id === item.id) == -1 ?
                    <p onClick={() => dispatch(liked(item))} className='bg-secondary-light w-8 h-8 rounded-full border text-secondary-dark flex items-center justify-center'>
                        <FaRegStar />
                    </p> :
                    <p onClick={() => dispatch(dislike(item))} className='bg-secondary-light w-8 h-8 rounded-full border text-secondary-yellow flex items-center justify-center'>
                        <FaRegStar />
                    </p>
                }
                <Link href={`/product/${item?.id}`} className='bg-secondary-light w-8 h-8 rounded-full border text-secondary-dark flex items-center justify-center'>
                    <IoEyeOutline />
                </Link>
            </div>
        </div>
    )
}

export default Card
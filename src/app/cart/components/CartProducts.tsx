'use client'
import React from 'react'
import { useGetAllProduct } from '@/service/query/useGetAllProduct'
import { CgClose } from "react-icons/cg";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, toggleAmount } from '@/redux/reducer/cart';


const CartProducts = () => {
    const { data } = useGetAllProduct()
    const { cart } = useSelector((state: any) => state.cart)
    console.log(cart);
    const dispatch = useDispatch()

    const handleMinus = (item: any) => {
        if (item.productCount > 1) {
            dispatch(toggleAmount({ ...item, type: 'remove' }))
        }
    }

    return (
        cart.length ? <div className='mt-10 mb-[80px] flex justify-between'>
        <div className='max-w-[1000px] w-full'>
            <div className='flex border'>
                <p className='max-w-[60px] w-full border px-3 py-[9px] text-[14px] font-semibold'></p>
                <p className='max-w-[143px] w-full border px-3 py-[9px] text-[14px] font-semibold'>Image</p>
                <p className='max-w-[407px] w-full border px-3 py-[9px] text-[14px] font-semibold'>Product</p>
                <p className='max-w-[100px] w-full border px-3 py-[9px] text-[14px] font-semibold'>Price</p>
                <p className='max-w-[196px] w-full border px-3 py-[9px] text-[14px] font-semibold'>Quantity</p>
                <p className='max-w-[108px] w-full border px-3 py-[9px] text-[14px] font-semibold'>Total</p>
            </div>
            {cart?.map((item: any) => (
                <div key={item.id} className='max-w-[1000px] w-full flex border border-t-0'>
                    <p onClick={() => dispatch(removeFromCart(item))} className='max-w-[60px] h-[113px] flex items-center w-full border px-3 py-[9px] text-[14px] font-semibold'><p className='hover:bg-secondary-yellow w-5 h-5 flex items-center justify-center hover:text-white rounded-full transition-all duration-200'><CgClose /></p></p>
                    <div className='max-w-[143px] w-full border p-4'>
                        <img className='w-[80px] h-[80px] object-center' src={item.images[0]?.image} alt="" />
                    </div>
                    <Link href={'/'} className='max-w-[407px] align-middle h-[113px] flex items-center w-full border p-3 box-border'>{item.title}</Link>
                    <div className='max-w-[100px] p-3.5 w-full border h-[113px] flex items-center'>${item.price}</div>
                    <div className='flex items-center justify-center gap-5 h-[113px] max-w-[196px] w-full border'>
                        <button onClick={() => dispatch(toggleAmount({ ...item, type: 'add' }))} className='border border-secondary-yellow w-8 text-[20px] rounded-md pb-[3px]'>+</button>
                        <p>{item.productCount}</p>
                        <button onClick={() => handleMinus(item)} className='border border-secondary-yellow w-8 text-[20px] rounded-md pb-[3px]'>-</button>
                    </div>
                    <p className='max-w-[108px] w-full border h-[113px] flex justify-center items-center'>${item.price * item.productCount}</p>
                </div>
            ))}
        </div>
        <div className='p-5 bg-[#F5F5F5] w-[400px]'>
            <h3 className='text-[20px] font-semibold mb-6'>Cart Totals</h3>
            <div className='flex py-2 items-center'>
                <p className='text-[18px] px-3 rexr-[18px]'>Subtotal</p>
                <p className='text-[21px] px-4 font-semibold'>${cart?.reduce((a:any,b:any) => a + (b.price * b.productCount) , 0)}</p>
            </div>
            <div className='flex items-center py-4'>
                <p className='text-[18px] px-3'>Shipping</p>
                <div className='flex flex-col px-4 gap-2'>
                    <p className='text-[14px] font-semibold' >Flat rate</p>
                    <p className='text-secondary-dark'>Shipping to <span className='font-semibold text-black'>Uzbekistan.</span></p>
                    <p className='text-[14px]'>Change address</p>
                </div>
            </div>
            <div className='flex py-2'>
                <p className='px-3 text-[18px] w-[114px]'>Total</p>
                <p className='font-bold text-[21px]'>${cart?.reduce((a:any,b:any) => a + (b.price * b.productCount), 0)}</p>
            </div>
            <button className='bg-secondary-yellow text-white max-w-[300px] w-full rounded-3xl py-3 mt-5'>Proceed to checkout</button>
        </div>
    </div> :
    <div className='flex flex-col items-center mt-[70px]'>
    <img src={'https://www.krosfitsports.com/public/empty-cart.gif'} alt="" />
    <h3 className='text-4xl mb-4 text-gray-700 mt-5 font-bold'>Ваша корзина пуста</h3>
    <Link href={'/'} className=' bg-[#FEEE00] rounded-lg px-3 py-1' >Покупки сейчас</Link>
</div>
    )
}

export default CartProducts
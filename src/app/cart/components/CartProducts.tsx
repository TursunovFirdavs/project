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
        cart.length ? <div className='mt-10 mb-[80px] xl:flex gap-5 items-start justify-between'>
        <div className='max-w-[1000px] w-full'>
            <div className='flex border-b-2'>
                <p className='md:max-w-[60px] max-w-[20px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'></p>
                <p className='md:max-w-[143px] max-w-[120px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'>Image</p>
                <p className='md:max-w-[407px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'>Product</p>
                <p className='md:max-w-[110px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'>Price</p>
                <p className='md:max-w-[196px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'>Quantity</p>
                <p className='md:max-w-[108px] w-full px-3 py-[9px] md:text-[14px] text-[12px] font-semibold'>Total</p>
            </div>
            {cart?.map((item: any) => (
                <div key={item.id} className='max-w-[1000px] w-full flex items-center md:items-start border-b'>
                    <p onClick={() => dispatch(removeFromCart(item))} className='md:max-w-[60px] max-w-[20px] md:h-[113px] flex items-center w-full md:px-3 md:py-[9px] md:text-[14px] text-[10px] font-semibold'><p className='hover:bg-secondary-yellow w-5 h-5 flex items-center justify-center hover:text-white rounded-full transition-all duration-200'><CgClose /></p></p>
                    <div className='max-w-[143px] w-full md:px-3 md:p-4'>
                        <img className='md:max-w-[80px] md:max-h-[80px] max-w-[50px] w-full max-h-[50px] object-cover' src={item.images[0]?.image} alt="" />
                    </div>
                    <Link href={`/product/${item.id}`} className='max-w-[407px] text-[12px] md:text-[16px] align-middle h-[113px] flex items-center w-full p-3 box-border'>{item.title}</Link>
                    <div className='max-w-[110px] p-3 w-full text-[12px] md:text-[16px] h-[113px] flex items-center'>${parseFloat(item.price)}</div>
                    <div className='flex items-center justify-center md:gap-5 gap-2 h-[113px] max-w-[196px] w-full '>
                        <button onClick={() => dispatch(toggleAmount({ ...item, type: 'add' }))} className='border border-secondary-yellow md:w-8 w-5 md:text-[20px] text-[15px] rounded-md md:pb-[3px]'>+</button>
                        <p className='text-[12px] md:text-[16px]'>{item.productCount}</p>
                        <button onClick={() => handleMinus(item)} className='border border-secondary-yellow md:w-8 w-5 md:text-[20px] text-[15px] rounded-md md:pb-[3px]'>-</button>
                    </div>
                    <p className='max-w-[108px] w-full h-[113px] text-[12px] md:text-[16px] px-3 flex justify-center items-center'>${item.price * item.productCount}</p>
                </div>
            ))}
        </div>
        <div className='p-5 bg-[#F5F5F5] xl:w-[400px] w-full m-auto'>
            <h3 className='md:text-[20px] text-[15px] font-semibold mb-6'>Cart Totals</h3>
            <div className='flex py-2 justify-between xl:justify-start items-center'>
                <p className='md:text-[18px] text-[14px] xl:px-3 rexr-[18px]'>Subtotal</p>
                <p className='md:text-[21px] text-[16px] xl:px-4 font-semibold'>${cart?.reduce((a:any,b:any) => a + (b.price * b.productCount) , 0)}</p>
            </div>
            <div className='flex items-center justify-between xl:justify-start py-4'>
                <p className='md:text-[18px] text-[14px] xl:px-3'>Shipping</p>
                <div className='flex flex-col items-end xl:items-start xl:px-4 gap-2'>
                    <p className='text-[14px] font-semibold' >Flat rate</p>
                    <p className='text-secondary-dark md:text-[18px] text-[14px]'>Shipping to <span className='font-semibold text-black'>Uzbekistan.</span></p>
                    <p className='text-[14px]'>Change address</p>
                </div>
            </div>
            <div className='flex py-2 justify-between xl:justify-start'>
                <p className='xl:px-3 md:text-[18px] text-[14px] w-[114px]'>Total</p>
                <p className='font-bold md:text-[21px] text-[16px]'>${cart?.reduce((a:any,b:any) => a + (b.price * b.productCount), 0)}</p>
            </div>
            <button className='bg-secondary-yellow text-white xl:max-w-[300px] w-full rounded-3xl py-3 mt-5'>Proceed to checkout</button>
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
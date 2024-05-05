import Link from 'next/link'
import React from 'react'
import { SlLayers } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
    return (
        <div>
            <div className='container flex h-[48px] items-center justify-between text-secondary-dark border-b'>
                <p className='text-sm'>Welcome to Worldwide Electronics Store</p>
                <ul className='flex items-center'>
                    <li className='pl-5 ml-4 hover:underline decoration-1'><Link href={'/'}>My account</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/'}>Checkout</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/'}>Shop</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/login'}>Login</Link></li>
                </ul>
            </div>
            <div className='flex justify-between items-center container py-7 border-b'>
                <img className='mr-[50px]' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/logo.png" alt="" />
                <div className='flex items-center gap-3'>
                    <img src="https://demo.lion-themes.net/amera/wp-content/themes/amera/images/icon-phone.png" alt="" />
                    <div>
                        <p className='text-secondary-dark'>Hotline Free:</p>
                        <p>06-900-6789-00</p>
                    </div>
                </div>
                <form className='border-2 border-secondary-yellow overflow-hidden max-w-[640px] w-full rounded-[30px] flex justify-between items-center'>
                    <select className='max-w-[140px] w-full pl-5 pr-2.5 outline-none' name="" id="">
                        <option value="">All category</option>
                        <option value="">salom</option>
                        <option value="">salom</option>
                        <option value="">salom</option>
                        <option value="">salom</option>
                        <option value="">salom</option>
                    </select>
                    <input className='flex-1 pl-3 border-l-2 ml-2.5 outline-none' type="text" placeholder='Search Products...' />
                    <button className='py-3 w-[120px] px-2.5 bg-secondary-yellow'>Search</button>
                </form>
                <div className='flex text-secondary-dark max-w-[264px] w-full justify-between'>
                    <div className='flex flex-col items-center'>
                        <SlLayers className='text-3xl' />
                        <p>Compare</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaRegStar className='text-3xl' />
                        <p>Favorites</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SlHandbag className='text-3xl' />
                        <p>my Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
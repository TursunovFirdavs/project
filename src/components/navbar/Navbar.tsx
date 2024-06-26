'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { SlLayers } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { useGetCategories } from '@/service/query/useGetCategories';
import { FiMenu } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Categories from '../catecory/Categories';
import { useSelector } from 'react-redux';
import { useGetAllProduct } from '@/service/query/useGetAllProduct';

const Navbar = () => {
    const [search, setSearch] = useState('')
    const { data } = useGetCategories()
    const { data: products } = useGetAllProduct()
    const { like } = useSelector((state:any) => state.like)
    const { cart } = useSelector((state:any) => state.cart)

    const filteredData = products?.results?.filter((item:any) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredData);
    
    
    return (
        <div>
            <div className='container hidden md:flex h-[48px] items-center justify-between text-secondary-dark border-b'>
                <p className='text-sm'>Welcome to Worldwide Electronics Store</p>
                <ul className='flex items-center'>
                    <li className='pl-5 ml-4 hover:underline decoration-1'><Link href={'/'}>My account</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/'}>Checkout</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/'}>Shop</Link></li>
                    <li className='pl-5 ml-4 hover:underline decoration-1 border-l-2'><Link href={'/login'}>Login</Link></li>
                </ul>
            </div>
            <div className='flex gap-[50px] items-center justify-between container py-7 border-b'>
                <img className='mr-[50px]' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/logo.png" alt="" />
                <div className='2xl:flex hidden items-center justify-between flex-1'>
                    <div className='flex items-center gap-3'>
                        <img src="https://demo.lion-themes.net/amera/wp-content/themes/amera/images/icon-phone.png" alt="" />
                        <div>
                            <p className='text-secondary-dark'>Hotline Free:</p>
                            <p>06-900-6789-00</p>
                        </div>
                    </div>
                    <div className='relative'>
                    <form className='border-2 border-secondary-yellow overflow-hidden w-[640px] rounded-[30px] flex justify-between items-center'>
                        <select className='max-w-[140px] w-full pl-5 pr-2.5 outline-none' name="" id="">
                            <option value="">All category</option>
                            {data?.results.map((item: any) => (
                                <option key={item.id} value="">{item.title}</option>
                            ))}
                        </select>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 pl-3 border-l-2 ml-2.5 outline-none' type="text" placeholder='Search Products...' />
                        <button className='py-3 w-[120px] px-2.5 bg-secondary-yellow'>Search</button>
                    </form>
                        {search.length > 1 && 
                            <div className='absolute top-[60px] w-[50%] ring-[50%] translate-x-[50%] z-10'>
                                {filteredData?.map((item:any) => (
                                    <Link onClick={() => setSearch('')} href={`/product/${item.id}`} className='flex gap-3 py-2 px-3 border-b bg-white'>
                                        <img className='w-5 h-5' src={item.images[0].image} alt="" />
                                        <p className='text-[14px]'>{item.title}</p>
                                    </Link>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='flex text-secondary-dark max-w-[264px] w-full justify-between'>
                        <div className='flex flex-col items-center'>
                            <SlLayers className='text-3xl' />
                            <p>Compare</p>
                        </div>
                        <Link href={'/liked'} className='flex flex-col items-center'>
                            <FaRegStar className='text-3xl' />
                            <p>Favorites</p>
                        </Link>
                        <Link href={'/cart'} className='flex flex-col items-center'>
                            <SlHandbag className='text-3xl' />
                            <p>my Cart</p>
                        </Link>
                    </div>
                </div>
                <div className='2xl:hidden'>
                    <Dialog>
                        <DialogTrigger>
                            <FiMenu className='text-2xl' />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                </DialogTitle>
                                <DialogDescription>
                                    <div className='relative'>
                                    <form className='mx-5 mt-3 mb-5 flex justify-between border-secondary-yellow border'>
                                        <input value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none text-black border-none py-2 pl-2' type="text" placeholder='Search products...' />
                                        <button className='bg-secondary-yellow py-2 px-1.5 text-sm text-black'>Search</button>
                                    </form>
                                    {search.length > 1 &&
                                        <div className='absolute left-5'>
                                            {filteredData?.map((item:any) => (
                                                <Link href={`/product/${item.id}`} className='flex items-center bg-white border-b py-1.5 px-2 pr-10 w-full gap-3 z-[100]'>
                                                    <img className='w-4 h-4' src={item.images[0].image} alt="" />
                                                    <p >{item.title}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    }
                                    </div>
                                    {search.length < 1 && <Categories />}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

            </div>
            <div className='bg-white 2xl:hidden fixed max-w-[100%] w-full bottom-0 z-[10] flex items-center justify-around py-3'>
                <Link href={'/'}><SlUser className='text-xl' /></Link>
                <Link  className='relative' href={'/liked'}>
                    <FaRegStar className='text-xl' />
                    <div className='absolute top-[-6px] right-[-10px] bg-secondary-yellow text-[12px] w-4 h-4 rounded-full flex items-center justify-center'>{like?.length}</div>
                </Link>
                <Link href={'/'}><SlLayers className='text-xl' /></Link>
                <Link className='relative'  href={'/cart'}>
                    <SlHandbag className='text-xl' />
                    <div className='absolute top-[-6px] right-[-10px] bg-secondary-yellow text-[12px] w-4 h-4 rounded-full flex items-center justify-center'>{cart?.length}</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
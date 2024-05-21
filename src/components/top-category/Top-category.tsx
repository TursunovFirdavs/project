'use client'
import React from 'react'
import { useGetCategories } from '@/service/query/useGetCategories'
import { Skeleton } from "@/components/ui/skeleton"
import { useGetSingleSub } from '@/service/query/useGetSingleSub'
import { FiStar } from "react-icons/fi";
import Item from './Item'
import Banner from '../banner/Banner'
import { useGetProductVariant } from '@/service/query/useGetProductVariant'
import { useGetAllProduct } from '@/service/query/useGetAllProduct'
import Link from 'next/link'


const TopCategory = () => {
    const { data, isLoading } = useGetCategories()

    const { data: product } = useGetAllProduct()
    console.log(product);
    
    

    const imgs = [
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/35.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/34.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/33.jpg'
    ]

    const banner = [
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner16.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner17.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner18.jpg'
    ]

    return (
        <div className='container'>
            <div className='flex items-center gap-5 md:mt-[50px] mt-[30px] pb-8'>
                <h2 className='text-[18px] md:text-[24px] font-[500]'>Top Categories <span className='font-[200]'>Of The Month</span></h2>
                <div className='h-[1px] bg-gray-300 flex-1'></div>
            </div>
            <div className='flex flex-wrap bg-red-200 justify-center'>
                {isLoading ? <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    :
                    data?.results?.slice(0, 10).map((item: any) => (
                        <div key={item.id} className='md:max-w-[290px] w-full bg-white flex justify-between items-center py-3 pr-3 pl-5 border-[1px]'>
                            <div>
                                <Link href={`/category/${item.id}`} className='text-[14px]'>{item.title}</Link>
                                <p className='text-secondary-dark mt-1 text-[12px]'>{`(${item.children.length} items)`}</p>
                            </div>
                            <img className='w-[104px]' src={item.image} alt="" />
                        </div>
                    ))}
            </div>
            <div className='2xl:flex justify-between'>
                <div className='2xl:max-w-[720px] w-full'>
                    <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                        <h2 className='text-[18px] md:text-[24px] font-[500]'>Top Flash <span className='font-[200]'>Deals</span></h2>
                        <div className='h-[1px] bg-gray-300 flex-1'></div>
                    </div>
                    <div className='md:flex items-center justify-between bg-white rounded-sm p-3'>
                        <img className='md:w-[305px] w-full' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/19.jpg" alt="" />
                        <div>
                            <p className='text-[12px] text-secondary-dark'>Game & Toys, Smart Phones</p>
                            <p className='font-medium text-secondary-blue mt-1 mb-2'>Chair Living Room Fiberglass</p>
                            <div className='flex text-secondary-yellow gap-[1px] text-[14px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                            <div className='flex gap-2 mb-3 mt-4 items-end'>
                                <p className='text-[18px] font-medium'>$30.00</p>
                                <p className='text-[14px] text-secondary-dark pb-[2px] line-through'>$45.00</p>
                            </div>
                            <p className='text-[14px]'>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere quod ii legunt saepius. </p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[720px] w-full'>
                    <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                        <h2 className='text-[18px] md:text-[24px] font-[500]'>Recent <span className='font-[200]'>Products</span></h2>
                        <div className='h-[1px] bg-gray-300 flex-1'></div>
                    </div>
                    <div className='md:flex justify-between'>
                        {imgs?.map((item: string, i:number) => (
                            <div key={i} className='rounded-sm overflow-hidden bg-white text-center px-1 mt-2 md:mt-0'>
                                <img className='md:w-[217px] w-full' src={item} alt="" />
                                <p className='text-[12px] text-secondary-dark text-center'>Digital, Game & Toys</p>
                                <p className='text-[14px] text-secondary-blue mt-1  mb-2'>Recliner syntheti deck chair</p>
                                <div className='flex items-center justify-center text-secondary-yellow gap-[1px] text-[14px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                <p className='text-[18px] font-medium mt-2 mb-3'>$66.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-between mt-[50px] lg:pb-10'>
                <div className="lg:w-[720px] max-h-[213px] h-full relative banner mb-5">
                    <img className="max-w-[720px] w-full" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner14.jpg" alt="" />
                    <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
                    <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
                </div>
                <div className="lg:w-[720px] max-h-[213px] h-full relative banner">
                    <img className="max-w-[720px] w-full" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner15.jpg" alt="" />
                    <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
                    <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
                </div>
            </div>

            <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                <h2 className='text-[18px] md:text-[24px] font-[500]'>Computer & Desktop  <span className='font-[200]'>Products</span></h2>
                <div className='h-[1px] bg-gray-300 flex-1'></div>
                <div className='lg:flex hidden gap-4 text-[14px]'>
                    <p>Digital</p>
                    <p>Game & Toy</p>
                    <p>Smart Phones</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <img className='max-w-[280px] hidden 2xl:block' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/img-tab1.jpg" alt="" />
                <Item data={product?.results.slice(1,7)} />
            </div>
            <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                <h2 className='text-[18px] md:text-[24px] font-[500]'>Computer & Desktop  <span className='font-[200]'>Products</span></h2>
                <div className='h-[1px] bg-gray-300 flex-1'></div>
                <div className='lg:flex hidden gap-4 text-[14px]'>
                    <p>Digital</p>
                    <p>Game & Toy</p>
                    <p>Smart Phones</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <Item data={product?.results.slice(8,15)} />
                <img className='max-w-[280px] hidden 2xl:block' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/cate12.jpg" alt="" />
            </div>
            <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                <h2 className='text-[18px] md:text-[24px] font-[500]'>Computer & Desktop  <span className='font-[200]'>Products</span></h2>
                <div className='h-[1px] bg-gray-300 flex-1'></div>
                <div className='lg:flex hidden gap-4 text-[14px]'>
                    <p>Digital</p>
                    <p>Game & Toy</p>
                    <p>Smart Phones</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <img className='max-w-[280px] hidden 2xl:block' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/cate11.jpg" alt="" />
                <Item data={product?.results.slice(14, product?.results.length)} />
            </div>
            <div className='md:flex justify-between py-[50px]'>
                <Banner data={banner} />
            </div>
        </div>
    )
}

export default TopCategory
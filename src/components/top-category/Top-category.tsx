'use client'
import React from 'react'
import { useGetCategories } from '@/service/query/useGetCategories'
import { Skeleton } from "@/components/ui/skeleton"
import { useGetSingleSub } from '@/service/query/useGetSingleSub'
import { FiStar } from "react-icons/fi";


const TopCategory = () => {
    const { data, isLoading } = useGetCategories()

    // const topFlash = data?.results?.filter((item: any) => item.title == 'Household Technique')
    // const recentProduct = topFlash?.map((item: any) => item.children[3])
    // const { id } = recentProduct?.find((item: any) => item)
    // console.log(id);

    // const { data: product } = useGetSingleSub(id)
    // console.log(product);

    const imgs = [
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/35.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/34.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/33.jpg'
    ]

    return (
        <div className='container'>
            <div className='flex items-center gap-5 mt-[50px] pb-8'>
                <h2 className='text-[24px] font-[500]'>Top Categories <span className='font-[200]'>Of The Month</span></h2>
                <div className='h-[1px] bg-gray-300 flex-1'></div>
            </div>
            <div className='flex flex-wrap'>
                {isLoading ? <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    :
                    data?.results?.slice(0, 10).map((item: any) => (
                        <div key={item.id} className='max-w-[290px] w-full bg-white flex justify-between items-center py-3 pr-3 pl-5 border-[1px]'>
                            <div>
                                <p className='text-[14px]'>{item.title}</p>
                                <p className='text-secondary-dark mt-1 text-[12px]'>{`(${item.children.length} items)`}</p>
                            </div>
                            <img className='w-[104px]' src={item.image} alt="" />
                        </div>
                    ))}
            </div>
            <div className='flex justify-between'>
                <div className='max-w-[720px] w-full'>
                    <div className='flex items-center gap-5 w-full mt-[50px] pb-8'>
                        <h2 className='text-[24px] font-[500]'>Top Flash <span className='font-[200]'>Deals</span></h2>
                        <div className='h-[1px] bg-gray-300 flex-1'></div>
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-sm p-3'>
                        <img className='w-[305px]' src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/19.jpg" alt="" />
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
                        <h2 className='text-[24px] font-[500]'>Recent <span className='font-[200]'>Products</span></h2>
                        <div className='h-[1px] bg-gray-300 flex-1'></div>
                    </div>
                    <div className='flex justify-between'>
                        {imgs?.map((item: string) => (
                            <div className='rounded-sm overflow-hidden bg-white text-center px-1'>
                                <img className='w-[217px]' src={item} alt="" />
                                <p className='text-[12px] text-secondary-dark text-center'>Digital, Game & Toys</p>
                                <p className='text-[14px] text-secondary-blue mt-1  mb-2'>Recliner syntheti deck chair</p>
                                <div className='flex text-secondary-yellow gap-[1px] ml-[70px] text-[14px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                <p className='text-[18px] font-medium mt-2 mb-3'>$66.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-[50px] pb-10'>
                <div className="w-[720px] h-[213px] relative banner">
                    <img className="w-[720px]" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner14.jpg" alt="" />
                    <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
                    <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
                </div>
                <div className="w-[720px] h-[213px] relative banner">
                    <img className="w-[720px]" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner15.jpg" alt="" />
                    <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
                    <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
                </div>
            </div>
        </div>
    )
}

export default TopCategory
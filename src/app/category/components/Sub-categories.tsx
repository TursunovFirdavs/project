'use client'
import Card from '@/components/card/Card'
import { useGetAllProduct } from '@/service/query/useGetAllProduct'
import { useGetSingleCategory } from '@/service/query/useGetSingleCategory'
import { subCategory } from '@/types'
import React from 'react'

const SubCategories = ({ id }: any) => {
    const categoryId = id?.id
    const { data } = useGetSingleCategory(categoryId)
    const { data: allProducts } = useGetAllProduct()
    console.log(data);
    console.log(allProducts);




    return (
        <div>
            <h2 className='text-[14px] text-secondary-dark font-medium'>{`Home  /  Category  /  ${data?.title}`}</h2>
            {data?.children?.length &&
                <div className='flex gap-[30px] flex-wrap mt-5'>
                    {data?.children?.map((item: subCategory) => (
                        <div className='w-[200px] bg-white rounded-md shadow-sm flex flex-col items-center justify-center py-[20px]' key={item.id}>
                            <div className='w-[150px] h-[150px] flex items-center justify-center'>
                                <img className='w-[90%] h-[90%] hover:w-[100%] hover:h-[100%] object-contain transition-all duration-[1s]' src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            }
            <div>
                <h3>Top Products</h3>
                {allProducts?.results?.map((item:any) => (
                    <Card {...item}/>
                ))}
            </div>
        </div>
    )
}

export default SubCategories
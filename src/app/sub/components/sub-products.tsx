'use client'
import Card from '@/components/card/Card';
import Spin from '@/components/spin/Spin';
import { useGetProductVariant } from '@/service/query/useGetProductVariant';
import { useGetSingleSub } from '@/service/query/useGetSingleSub';
import React from 'react'

const SubProducts = ({ id }: any) => {
    const { data, isLoading } = useGetSingleSub(id)
    const { data: product } = useGetProductVariant(data?.id)



    return isLoading ? <Spin /> : (
        <div>
            <h2 className='text-[14px] text-secondary-dark font-medium'>{`Home  /  ${data?.parent?.title}  /  ${data?.title}`}</h2>
            <div>
                {!product?.results?.length && !isLoading ?
                    <div className='flex flex-col h-[65vh] w-[70vw] items-center justify-center'>
                        <img src="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" alt="" />
                        <h3 className='mb-6 font-semibold text-3xl mt-5'>{`There is no product in the ${data?.title}`}</h3>
                    </div>
                    :
                    <div className='flex flex-wrap gap-[35px] mt-5'>
                        {product?.results?.map((item: any) => (
                            <Card key={item.id} {...item} />
                        ))}
                    </div>

                }
            </div>
        </div>
    )
}

export default SubProducts
'use client'
import Card from '@/components/card/Card';
import Spin from '@/components/spin/Spin';
import { useGetProductVariant } from '@/service/query/useGetProductVariant';
import { useGetSingleSub } from '@/service/query/useGetSingleSub';
import React from 'react'

const SubProducts = ({ id }: any) => {
    console.log(id);
    const { data, isLoading } = useGetSingleSub(id)
    console.log(data);
    const { data: product } = useGetProductVariant(data?.id)
    console.log(product);



    return isLoading ? <Spin/> : (
        <div>
            <h2 className='text-[14px] text-secondary-dark font-medium'>{`Home  /  ${data?.parent?.title}  /  ${data?.title}`}</h2>
            <div>
                {product?.results?.length ?
                    <div className='flex flex-wrap gap-[35px] mt-5'>
                        {product?.results?.map((item: any) => (
                            <Card {...item} />
                        ))}
                    </div> :
                    <div className='flex flex-col h-[65vh] w-[70vw] items-center justify-center'>
                    <img src="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" alt="" />
                    <h3 className='mb-6 font-semibold text-3xl mt-5'>{`There is no product in the ${data?.title}`}</h3>
                  </div>
                }
            </div>
        </div>
    )
}

export default SubProducts
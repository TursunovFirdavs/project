'use client'

import { useGetCategories } from '@/service/query/useGetCategories';
import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { subCategory } from '@/types';

export default function Category() {

    const { data, isLoading } = useGetCategories()
    console.log(data);


    return isLoading ? <div className='w-[275px] h-[525px] flex items-center justify-center'><div className="lds-ripple"><div></div><div></div></div></div> : (
        <div className='max-w-[275px] w-full bg-white px-6 py-4 rounded-sm'>
            <div className='flex items-center gap-4 pb-4'>
                <TfiMenuAlt className='text-xl' />
                <p className='text-[14px] font-semibold'>SHOP BY CATEGORY</p>
            </div>
            {data?.results.map((item: any) => (
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <div key={item.id} className='border-t py-2 flex items-center w-[210px] gap-3'>
                                    <img className='w-7' src={item.image} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <div>
                                        {item.children?.map((sub: subCategory) => (
                                            <p>{sub.title}</p>
                                        ))}
                                    </div>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            ))}

        </div>
    )
}


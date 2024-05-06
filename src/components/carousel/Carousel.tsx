'use client'
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetBanner } from "@/service/query/useGetBanner";
import { banner } from "@/types";

export default function () {
  const { data, isLoading } = useGetBanner()
  console.log(data);
  
    return isLoading ? <div className='w-[1155px] h-[525px] flex items-center justify-center'><div className="lds-ripple"><div></div><div></div></div></div> : (
      <div className="max-w-[1155px] rounded-sm overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            {data?.results?.map((item: banner) => (
              <img className="w-full h-[525px]" src={item.image} alt="" />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
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
  
    return isLoading ? <div className='w-[1155px] xl:h-[525px] md:h-[500px] h-[400px] flex items-center justify-center'><div className="lds-ripple"><div></div><div></div></div></div> : (
      <div className="max-w-[1155px] rounded-sm overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            {data?.results?.map((item: banner) => (
              <img key={item.id} className="w-full xl:h-[525px] md:h-[500px] h-[400px] object-center" src={item.image} alt="" />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
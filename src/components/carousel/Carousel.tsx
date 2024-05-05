import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function () {
    return (
      <div className="max-w-[1155px] rounded-sm overflow-hidden w-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img className="w-full h-[525px]" src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder3-web_d4407b587e4bc9786e4e8b67530c854c.webp" alt="" /></CarouselItem>
            <CarouselItem><img className="w-full h-[525px]" src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder3-web_d4407b587e4bc9786e4e8b67530c854c.webp" alt="" /></CarouselItem>
            <CarouselItem><img className="w-full h-[525px]" src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder3-web_d4407b587e4bc9786e4e8b67530c854c.webp" alt="" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
import Carousel from "@/components/carousel/Carousel";
import Category from "@/components/catecory/Category";
import TopCategory from "@/components/top-category/Top-category";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-secondary-light">
      <div className="flex justify-between container py-8">
        <Category />
        <Carousel />
      </div>
      <div className="container flex justify-between">
        <div className="w-[473px] relative banner">
          <img className="w-full" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner11.jpg" alt="img" />
          <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
          <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
        </div>
        <div className="w-[473px] relative banner">
          <img className="w-[473px]" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner12.jpg" alt="img" />
          <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
          <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
        </div>
        <div className="w-[473px] relative banner">
          <img className="w-[473px]" src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner13.jpg" alt="" />
          <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
          <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
        </div>
      </div>
      <TopCategory/>
    </div>
  );
}

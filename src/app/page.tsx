import Banner from "@/components/banner/Banner";
import Carousel from "@/components/carousel/Carousel";
import Category from "@/components/catecory/Category";
import TopCategory from "@/components/top-category/Top-category";
import Image from "next/image";

export default function Home() {
  const banner = [
    'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner11.jpg',
    'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner12.jpg',
    'https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner13.jpg'
  ]
  return (
    <div className="bg-secondary-light">
      <div className="flex justify-between container py-8">
        <Category />
        <Carousel />
      </div>
      <div className="container flex justify-between">
        <Banner data={banner}/>
      </div>
      <TopCategory/>
    </div>
  );
}

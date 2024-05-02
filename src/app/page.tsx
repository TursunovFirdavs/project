import Carousel from "@/components/carousel/Carousel";
import Category from "@/components/catecory/Category";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="bg-secondary-light">
      <div className="flex justify-between container pt-8">
        <Category/>
        <Carousel/>
      </div>
      </div>
    </div>
  );
}

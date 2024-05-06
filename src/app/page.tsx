import Carousel from "@/components/carousel/Carousel";
import Category from "@/components/catecory/Category";
import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-secondary-light">
      <div className="flex justify-between container py-8">
        <Category/>
        <Carousel/>
      </div>
      </div>
  );
}

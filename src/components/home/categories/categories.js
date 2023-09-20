import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { faker } from "@faker-js/faker";




const categories = [
  {
    image:faker.image.url(),
    title:"Election Report",
  },
  {
    image:faker.image.url(),
    title:"Election Report",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  },
  {
    image:faker.image.url(),
    title:"Pregnancy Ttest REport",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  }, {
    image:faker.image.url(),
    title:"Election Report",
  },


]

const Categories = () => {
  return (
 
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={5}
        className="mySwiper w-full overflow-hidden"
      >
        {
          categories.map(({image, title})=>(

            <SwiperSlide className="flex flex-col justify-between gap-4 cursor-pointer border border-black-600 rounded-xl bg-gray-300  text-center">
             

            <img className=" rounded-t-xl h-4/5" src={image} alt={title} />
            <div className="  h-1/5 text-center flex items-center justify-center ">{title}</div>
            
            
          </SwiperSlide>

         

            

          ))
        }

      </Swiper> 
  
  );
};

export default Categories;

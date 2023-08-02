import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MealSwiperItem from "./MealItem/MealSwiperItem";

const MealSwiper = (props) => {
  const { title, meals } = props;
  const swiperSlides = meals.map((item) => (
    <SwiperSlide key={item.id}>
      <MealSwiperItem
        name={item.name}
        price={item.price}
        id={item.id}
        description={item.description}
      />
    </SwiperSlide>
  ));
  return (
    <div className="mt-14 first:mt-8 md:mt-20 md:first:mt-12">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">
        {title}
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {swiperSlides}
      </Swiper>
    </div>
  );
};

export default MealSwiper;

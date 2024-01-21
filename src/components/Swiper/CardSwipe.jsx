import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards} from "swiper/modules";
const CardSwipe = ({}) => {

  return (
    <>
        <Swiper
effect={"cards"}
grabCursor={true}
modules={[EffectCards]}
className="mySwiper"
>
  
<SwiperSlide>
  <img
    className="img-fluid  mx-3"
    src={'img'}
    alt=""
  />
</SwiperSlide>

</Swiper>
    </>
  )
}

export default CardSwipe
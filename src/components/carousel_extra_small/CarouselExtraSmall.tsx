import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Avatar, Box } from "@mui/material";
import carouselStyles from "./CarouselExtraSmall.Styles";

// Interface for Swiper navigation Size Customization By "Santosh"
interface MyStyle {
  width: string;
  height: string;
  "--swiper-navigation-size": string;
  display: string,
  border: string,
  margin: string
}

const CarouselExtraSmall = () => {
  return (
    <>
      <Box sx={carouselStyles.carouselContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          style={
            {
              width: "95%",
              "--swiper-navigation-size": "18px",
              // border: "2px solid green",
              margin: "auto",
            } as MyStyle
          }
        >
          <SwiperSlide
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Biryani"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Biryani"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Rolls"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Tea"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Burger"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Chinese"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Cake"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Dessert"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={carouselStyles.foodImage}
              alt="Dessert"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CarouselExtraSmall;

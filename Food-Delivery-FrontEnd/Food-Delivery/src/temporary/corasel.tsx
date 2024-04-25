// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/swiper.min.css";
// import "swiper/swiper.scss"; // core Swiper
// import "swiper/css/autoplay";
// // Import Swiper styles
// import { Autoplay } from "swiper";

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={6}
//       modules={[Autoplay]}
//       autoplay={true}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {Array.from({ length: 20 }).map((res, index) => (
//         <SwiperSlide>
//           <img
//             alt=""
//             key={index}
//             src={`https://picsum.photos/seed/picsum${index}/300`}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

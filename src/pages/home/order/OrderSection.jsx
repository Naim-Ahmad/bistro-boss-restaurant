import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../../components/SectionHeader";

import { Pagination } from "swiper/modules";
import menu1 from "../../../assets/menu/dessert-bg.jpeg";
import menu2 from "../../../assets/menu/pizza-bg.jpg";
import menu3 from "../../../assets/menu/salad-bg.jpg";
import menu4 from "../../../assets/menu/soup-bg.jpg";

import "swiper/css";
import "swiper/css/pagination";
import Container from "../../../components/Container";

export default function OrderSection() {
  const menus = [
    { image: menu1 },
    { image: menu2 },
    { image: menu3 },
    { image: menu4 },
    { image: menu4 },
    { image: menu4 },
    { image: menu4 },
  ];

  return (
    <div>
      <SectionHeader
        title="ORDER ONLINE"
        subTitle="---From 11:00am to 10:00pm---"
      />
      <Container>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={4}
          spaceBetween={30}
        >
          {menus.map((menu, indx) => (
            <SwiperSlide key={indx}>
              <img className="h-72 object-fill" src={menu.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

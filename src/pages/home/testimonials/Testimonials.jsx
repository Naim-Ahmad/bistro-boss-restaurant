import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../../components/SectionHeader";
import useReviews from "../../../hooks/useReviews";

import 'swiper/css';
import 'swiper/css/navigation';
import Container from "../../../components/Container";

export default function Testimonials() {
  const { data = [] } = useReviews();

  return (
    <Container>
      <SectionHeader
        subTitle="---What Our Clients Say---"
        title="TESTIMONIALS"
      />
      <Swiper modules={[Navigation]} navigation={true}>
        {
            data.map(review=> {
                const {_id,name,details,rating} = review;

                return (
                    <SwiperSlide key={_id}>
                      <div className="flex justify-center">
                        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                      </div>
                      <div className="text-center w-3/4 mx-auto">
                        <FaQuoteLeft size={50} className="mx-auto my-8"/>
                        <p>{details}</p>
                        <h1 className="text-xl font-medium text-yellow-700">{name}</h1>
                      </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </Container>
  );
}

import WebTitle from "../../components/WebTitle";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Menus from "./menus/Menus";
import OrderSection from "./order/OrderSection";
import Testimonials from "./testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <WebTitle>Home</WebTitle>
      <Hero />
      <OrderSection />
      <Menus />
      <Featured />
      <Testimonials/>
    </>
  );
}

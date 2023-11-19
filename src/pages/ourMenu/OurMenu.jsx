import WebTitle from "../../components/WebTitle";
import useMenus from "../../hooks/useMenus";
import Offered from "./Offered/Offered";
import Banner from "./banner/Banner";
import Desserts from "./desserts/Desserts";
import Pizza from "./pizza/Pizza";
import Salads from "./salads/Salads";
import Soups from "./soups/Soup";

export default function OurMenu() {
    const {data= []} = useMenus()
    const offered = data.filter(menu=> menu.category === 'offered')
    const dessert = data.filter(menu=> menu.category === 'dessert')
    const pizza = data.filter(menu=> menu.category === 'pizza')
    const salad = data.filter(menu=> menu.category === 'salad')
    const soup = data.filter(menu=> menu.category === 'soup')

  return (
    <>
    <WebTitle>Our Menu</WebTitle>
      <Banner />
      <Offered data={offered}/>
      <Desserts data={dessert}/>
      <Pizza data={pizza}/>
      <Salads data={salad}/>
      <Soups data={soup}/>
    </>
  );
}

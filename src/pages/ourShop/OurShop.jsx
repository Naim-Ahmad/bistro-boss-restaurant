import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import bannerImage from "../../assets/shop/banner2.jpg";
import Banner from "../shared/banner/Banner";

import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import WebTitle from "../../components/WebTitle";
import useMenus from "../../hooks/useMenus";
import MenuCard from "./MenuCard";

export default function OurShop() {
  const { data = [] } = useMenus();
  const params = useParams()

  const dessert = data.filter((da) => da.category === "dessert");
  const pizza = data.filter((da) => da.category === "pizza");
  const soup = data.filter((da) => da.category === "soup");
  const drinks = data.filter((da) => da.category === "drinks");
  const salad = data.filter((da) => da.category === "salad");

  const tabItems = [
    { name: "salad", value: salad },
    { name: "dessert", value: dessert },
    { name: "pizza", value: pizza },
    { name: "soup", value: soup },
    { name: "drinks", value: drinks },
  ];

  const items = tabItems.map(menu=> menu.name)

  const index = items.indexOf(params.category) 

  const tabIndex = index !== -1 ? index : 0

  return (
    <Container>
        <WebTitle>Our Shop</WebTitle>
      <Banner
        bannerImage={bannerImage}
        title="OUR SHOP"
        description="Would you like to try a dish?"
      />
      <div className="py-10">
        <Tabs defaultIndex={tabIndex}>
          <TabList>
            {tabItems.map((tab, ind) => (
              <Tab key={ind}>
                <span className="uppercase">{tab.name}</span>
              </Tab>
            ))}
          </TabList>

          {tabItems.map((tab) => (
            <TabPanel className="mt-10" key={tab.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tab.value.map((menu) => (
                  <MenuCard data={menu} key={menu._id} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </Container>
  );
}

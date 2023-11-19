import Button from "../../../components/Button";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
import MenuItem from "../../shared/MenuItem";

export default function Offer({data}) {

  return (
    <Container>
      <SectionHeader subTitle="---Don't miss---" title="TODAY'S OFFER" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.slice(0, 4).map((menu) => (
          <MenuItem menu={menu} key={menu._id} />
        ))}
      </div>
      <div className="py-4 text-center">
        <Button>Order Your Favorite food</Button>
      </div>
    </Container>
  );
}

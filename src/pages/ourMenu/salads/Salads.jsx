import Button from "../../../components/Button";
import Container from "../../../components/Container";
import MenuItem from "../../shared/MenuItem";
import SectionBanner from "../../shared/SectionBanner";

export default function Salads({data = []}) {

  return (
    <Container>
        <SectionBanner 
        title="Salads" 
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 pt-16">
        {data.map((menu) => (
          <MenuItem menu={menu} key={menu._id} />
        ))}
      </div>
      <div className="py-4 text-center">
        <Button>Order Your Favorite food</Button>
      </div>
    </Container>
  );
}

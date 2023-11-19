import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
import useMenus from "../../../hooks/useMenus";
import MenuItem from "../../shared/MenuItem";

export default function Menus() {
  const { data = [] } = useMenus();
  return (
    <div>
      <Container>
        <SectionHeader subTitle="---Check it out---" title="FROM OUR MENU" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.slice(0, 6).map((menu) => (
            <MenuItem menu={menu} key={menu._id} />
          ))}
        </div>
        <div className="text-center py-8">
          <Link to="/ourMenu">
            <button className="btn btn-ghost border-b-4 border-b-black">
              View Full Menu
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

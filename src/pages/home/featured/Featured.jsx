import { Parallax } from "react-parallax";
import featuredImage from "../../../assets/home/featured.jpg";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function Featured() {
  return (
    <Parallax bgImage={featuredImage} strength={200}>
      <div className="bg-slate-700 bg-opacity-50 py-10">
      <SectionHeader subTitle="---Check it out---" title="FROM OUR MENU" />
      <Container>
        <div className="flex gap-8 items-center">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="text-white">
            <h3>March 20, 2023</h3>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              repellat hic error iure aliquid nam provident sequi, id dicta amet
              asperiores suscipit doloremque tempore quod! Consequuntur, ducimus
              consectetur! Reiciendis dolore ipsam ullam autem impedit quis
              eligendi hic minus obcaecati ab!
            </p>
            <button className="btn btn-ghost border-b-4 border-b-black">
              ORDER NOW
            </button>
          </div>
        </div>
      </Container>
      </div>
    </Parallax>
  );
}

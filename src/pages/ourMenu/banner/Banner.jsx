import { Parallax } from "react-parallax";
import bannerImage from "../../../assets/menu/banner3.jpg";

export default function Banner() {

    return (
        <header>
        <Parallax
          bgImage={bannerImage}
          strength={200}
          contentClassName="flex justify-center"
        >
          <div className="hero-content w-full min-h-[70svh] text-center text-neutral-content">
            <div className="max-w-4xl p-10 py-16 hero-overlay bg-black h-fit bg-opacity-60">
              <h1 className="mb-5 text-8xl font-extrabold uppercase">Our Menu</h1>
              <p className="mb-5">Would you like to try a dish?</p>
            </div>
          </div>
        </Parallax>
      </header>
    )
}
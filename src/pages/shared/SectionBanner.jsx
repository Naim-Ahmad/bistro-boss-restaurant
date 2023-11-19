import { Parallax } from "react-parallax";
import sectionHeaderImage from '../../assets/menu/dessert-bg.jpeg';

export default function SectionBanner({title, description}) {

    return (
        <header>
        <Parallax
          bgImage={sectionHeaderImage}
          contentClassName="flex justify-center"
        >
          <div className="hero-content w-full min-h-[70svh] text-center text-neutral-content">
            <div className="max-w-4xl p-10 py-16 hero-overlay header-overlay h-fit bg-opacity-60">
              <h1 className="mb-5 text-4xl font-extrabold uppercase">{title}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </Parallax>
      </header>
    )
}
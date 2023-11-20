import { Parallax } from "react-parallax";

export default function Banner({bannerImage, title, description}) {

    return (
        <header>
        <Parallax
          bgImage={bannerImage}
          strength={200}
          contentClassName="flex justify-center"
        >
          <div className="hero-content w-full min-h-[70svh] text-center text-neutral-content">
            <div className="max-w-4xl p-10 py-16 hero-overlay bg-black h-fit bg-opacity-60">
              <h1 className="mb-5 text-6xl font-extrabold uppercase">{title}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </Parallax>
      </header>
    )
}
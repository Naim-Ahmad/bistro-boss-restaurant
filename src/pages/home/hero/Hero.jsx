import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from '../../../assets/home/01.jpg';
import banner2 from '../../../assets/home/02.jpg';
import banner3 from '../../../assets/home/03.png';
import banner4 from '../../../assets/home/04.jpg';
import banner5 from '../../../assets/home/05.png';
import banner6 from '../../../assets/home/06.png';

const sliderData = [
    {image: banner1},
    {image: banner2},
    {image: banner3},
    {image: banner4},
    {image: banner5},
    {image: banner6},
]

export default function Hero() {

    return (
        <div>
             <Carousel>
                {sliderData.map(slider=> <div key={slider?.image}>
                    <img src={slider.image} />
                </div>)}
            </Carousel>
        </div>
    )
}
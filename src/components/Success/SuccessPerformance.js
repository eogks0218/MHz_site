import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from "./imagesC/review.png"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    cssEase: 'ease-in-out',
    pauseOnHover: false
}

export default function SuccessPerformance(){

    return(
        <>
        <Slider {...settings}>
            <div className="Performance-card">
                <img src={review1} alt="slider1" />
            </div>
            
            <div className="Performance-card">
                <img src={review1} alt="slider2" />
            </div>
            
            <div className="Performance-card">
                <img src={review1} alt="slider3" />
            </div>
            
            <div className="Performance-card">
                <img src={review1} alt="slider4" />
            </div>
            
            <div className="Performance-card">
                <img src={review1} alt="slider5" />
            </div>
        </Slider>
        </>
    )
}
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Vision() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false
    };

    return (
        <>
            <div className="ServiceNCH-vision-title">
                <h1>정직한 서비스</h1>
                <h5>비양심적인 업체가 많은 시장에서, 저희는 정직하게 일하겠습니다.</h5>
            </div>
            <div className="ServiceNCH-vision-slider-container">
                <Slider {...settings}>
                    <div className="ServiceNCH-vision-slider-items" id="slider-items-one"/>
                    <div className="ServiceNCH-vision-slider-items" id="slider-items-two"/>
                    <div className="ServiceNCH-vision-slider-items" id="slider-items-three"/>
                    <div className="ServiceNCH-vision-slider-items" id="slider-items-four"/>
                    <div className="ServiceNCH-vision-slider-items" id="slider-items-five"/>
                </Slider>
            </div>
        </>
    );
}
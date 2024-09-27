import "../../scss/ServiceViral/Process.scss";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import process_one from "./imagesV/process-one.jpg"
import process_two from "./imagesV/process-two.jpg"
import process_three from "./imagesV/process-three.jpg"
import process_four from "./imagesV/process-four.jpg"
import process_five from "./imagesV/process-five.jpg"
import process_six from "./imagesV/process-six.jpg"
import process_seven from "./imagesV/process-seven.jpg"

const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    cssEase: 'ease-in-out'
}

export default function Process(){

    const process_data = [
        {
            img: process_one,
            title: "제품 URL 전달 및 행사 일정 요청 시 가이드 양식 전달",
            num: "1"
        },
        {
            img: process_two,
            title: "적절한 카페 / 커뮤니티 진입 여부 상담 후 선정",
            num: "2"
        },
        {
            img: process_three,
            title: "원고 작성",
            num: "3"
        },
        {
            img: process_four,
            title: "원고 컨펌 요청 후 최종 발행",
            num: "4"
        },
        {
            img: process_five,
            title: "발행 전 해당 행사 구성 및 할인가 재검토",
            num: "5"
        },
        {
            img: process_six,
            title: "발행 후 링크 전달 및 실시간 피드백(반응 대응)",
            num: "6"
        },
        {
            img: process_seven,
            title: "행사 이후 상품에 대한 개선점 피드백",
            num: "7"
        }
    ]

    return(
        <>
        <Slider {...settings}>
            {process_data.map((item) => (
                <div className="process-card">
                    <div className="process-card-img">
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div className="process-card-description">
                        <h3>
                            <span className="process-num">{item.num}</span>
                            <span>{item.title}</span>
                        </h3>
                    </div>
                </div>
            ))}
        </Slider>
        </>
    )
}
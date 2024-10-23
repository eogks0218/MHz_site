import "../../scss/ServiceViral/Process.scss";
import process_one from "./imagesV/process-one.jpg"
import process_two from "./imagesV/process-two.jpg"
import process_three from "./imagesV/process-three.jpg"
import process_four from "./imagesV/process-four.jpg"
import process_five from "./imagesV/process-five.jpg"
import process_six from "./imagesV/process-six.jpg"
import process_seven from "./imagesV/process-seven.jpg"

export default function Process(){

    const process_data = [
        {
            img: process_one,
            title: "제품 URL 전달 및 행사 일정 요청 시 가이드 양식 전달",
            num: "ONE"
        },
        {
            img: process_two,
            title: "적절한 카페 / 커뮤니티 진입 여부 상담 후 선정",
            num: "TWO"
        },
        {
            img: process_three,
            title: "원고 작성",
            num: "THREE"
        },
        {
            img: process_four,
            title: "원고 컨펌 요청 후 최종 발행",
            num: "FOUR"
        },
        {
            img: process_five,
            title: "발행 전 해당 행사 구성 및 할인가 재검토",
            num: "FIVE"
        },
        {
            img: process_six,
            title: "발행 후 링크 전달 및 실시간 피드백(반응 대응)",
            num: "SIX"
        },
        {
            img: process_seven,
            title: "행사 이후 상품에 대한 개선점 피드백",
            num: "SEVEN"
        }
    ]

    return(
        <>
            {process_data.map((item, index) => (
                <div className="process_card" key={index}>
                    <div className="process_card_img" style={{backgroundImage: `url(${item.img})`}}>
                        <div className="process_card_num">{item.num}</div>
                        <div className="process_card_img_bg" />
                    </div>
                    <div className="process_card_info">
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}
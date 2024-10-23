import { Link } from "react-router-dom"
import "../../scss/common/CTA.scss"

export default function CTA(){

    return(
        <div className="CTA-container">
            <div className="CTA-container-bg" />
            <div className="CTA-container-Transparency" />
            <div className="CTABox">
                <h3>
                    고객사의 매출 성장을 위한 최우선 솔루션<br /><br />
                    지속적인 성장과 매출 상승을 위해, 각 분야의 전문가들이 최고의 솔루션을 제안드립니다.<br /><br />
                    메가헤르츠는 고객님의 비즈니스 목표를 달성하기 위해 최선을 다하고 있습니다.<br />
                    고객님이 궁극적으로 만족할 수 있는 결과를 만들어내기 위해 지속적으로 노력합니다.
                </h3>
                <div className="CTA-btn">
                    <Link to="/MHz/Contact#ContactUs">지금 상담받기</Link>
                </div>
            </div>
        </div>
    )
}
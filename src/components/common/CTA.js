import { Link } from "react-router-dom"
import "../../scss/common/CTA.scss"

export default function CTA(){

    return(
        <div className="CTABox">
            <h1>메가헤르츠와 함께 하면 다릅니다 !</h1>
            <div className="CTA-btn">
                <Link to="/MHz/Contact">지금 상담받기</Link>
            </div>
        </div>
    )
}
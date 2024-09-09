import "../../scss/common/Footer.scss";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { SiNaver } from "react-icons/si";


export default function Footer(){

    return(
        <div className="Footer-container">
            <div className="Footer-logo" />
            <div className="Footer-description">
                <div className="Footer-title">
                    <h6>MHz - ㈜메가헤르츠</h6>
                </div>
                <div className="Footer-content">
                    <p>경기도 안산시 상록구 해양3로 17 디지털전환허브 1001호</p>
                    <p>대표 : 맹은경 | 통신판매업 | 신고번호 : | 사업자등록번호 : XXX</p>
                    <p>메일 : contact@mhz@xxxxx</p>
                </div>
            </div>
            <div className="Footer-menu">
                <h6>Quick Links</h6>
                <ul>
                    <li><Link to="/MHz">회사소개</Link></li>
                    <li><Link to="/MHz/ServiceCV">서비스</Link></li>
                    <li><Link to="/MHz/Success/C">성공사례</Link></li>
                    <li><Link to="/MHz/Contact">문의하기</Link></li>
                </ul>
            </div>
            <div className="Footer-social">
                <p className="copyright">Copyright © 2024 MHz. All Rights Reserved.</p>
                <div className="social-links">
                    <FiPhone />
                    <FiMail />
                    <RiKakaoTalkFill />
                    <GrInstagram />
                    <SiNaver />
                </div>
            </div>
        </div>
    )
}
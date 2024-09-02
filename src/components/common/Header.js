import { Link } from "react-router-dom";
import "../../scss/common/Header.scss";

export default function Header(){

    return(
        <div className="Header-container">
            <Link to="/">
                <div className="Header-logo" />
            </Link>
            <nav className="Header-menu">
                <ul className="mainMenu-ul">
                    <li className="mainMenu-li">
                        <Link to="/MHz">회사소개</Link>
                    </li>
                    <li className="mainMenu-li">
                        <Link to="/MHz/ServiceCV">서비스</Link>
                        <ul className="subMenu-ul">
                            <li className="subMenu-li"><Link to="/MHz/ServiceCV">카페, 커뮤니티 바이럴</Link></li>
                            <li className="subMenu-li"><Link to="/MHz/ServiceNCH">네이버, 쿠팡, 오늘의집</Link></li>
                        </ul>
                    </li>
                    <li className="mainMenu-li">
                        <Link to="#">성공사례</Link>
                        <ul className="subMenu-ul">
                            <li className="subMenu-li"><Link to="">카페, 커뮤니티 바이럴</Link></li>
                            <li className="subMenu-li"><Link to="">네이버, 쿠팡, 오늘의집</Link></li>
                        </ul>
                    </li>
                    <li className="mainMenu-li">
                        <Link to="/MHz/Contact">문의하기</Link>
                    </li>
                </ul>
            </nav>
            <div className="Header-transition">
                <ul>
                    <li>KR</li>
                    <li>EN</li>
                    <li>CH </li>
                </ul>
            </div>
        </div>
    )
}
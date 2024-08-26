import { Link } from "react-router-dom";
import "../../scss/common/Header.scss";

export default function Header(){

    return(
        <div className="Header-container">
            <Link to="/">
                <div className="Header-logo" />
            </Link>
            <nav className="Header-menu">
                <ul>
                    <li>
                        <Link to="/MHz">회사소개</Link>
                    </li>
                    <li>
                        <Link to="#">서비스</Link>
                    </li>
                    <li>
                        <Link to="#">성공사례</Link>
                    </li>
                    <li>
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
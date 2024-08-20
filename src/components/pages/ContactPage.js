import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/ContactPage.scss";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Contact from "../Contact";

export default function ContactPage() {
    const [index, setIndex] = useState(0);
    const titleRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const ScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const speed = 1;
        const target = 1000;

        if (index < target) {
            const timer = setTimeout(() => {
                setIndex(prevIndex => prevIndex + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [index]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 } // 요소가 10% 이상 보이면 콜백 실행
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <>
            <Header />
            <div className="ContactPage-Container">
                <div
                    ref={titleRef}
                    className={`ContactPage-Title ${isInView ? "in-view" : ""}`}
                >
                    <div className="ContactUs">
                        <h1>Contact Us</h1>
                        <h3>
                            최적의 마케팅 솔루션을 위해서는
                            <br />
                            고객사에 대한 정확한 진단이 필요합니다.
                        </h3>
                        <h5>
                            메가헤르츠는 누적 +{index.toLocaleString()}곳 이상의<br/>
                            고객사와 함께한 업계 1등 바이럴 마케팅 전문가 집단입니다.
                        </h5>
                    </div>
                    <div className="ContactMap">
                        <h1>Where We Works</h1>
                        <div>
                            지도
                        </div>
                    </div>
                    <div className="down-btn" onClick={ScrollDown}>
                        <FaChevronDown />
                    </div>
                </div>
                <Contact />
            </div>
            <Footer />
        </>
    );
}
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/MHzHome.scss";
import { useEffect } from "react";
import FooterBox from "../common/FooterBox";
import Corevalue from "../Home/Corevalue";
import Howwework from "../Home/Howwework";

export default function MHzHome() {

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])


    useEffect(() => {
        const text = '마케팅 "디테일의 차이가 결과의 차이"';
        let index = 0;
        const speed = 120;
    
        function type() {
            const holderElement = document.getElementById("holder");
            if (holderElement) {
                // 이미 타이핑이 끝났다면 중단
                if (holderElement.textContent === text) return;
    
                // 초기화 (애니메이션이 다시 시작할 때를 대비)
                if (index === 0) {
                    holderElement.textContent = '';
                }
    
                if (index < text.length) {
                    holderElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            } else {
                setTimeout(type, 100);
            }
        }
    
        type();
    }, []);

    useEffect(() => {
        const elementsToObserve = [
            ".HomeHeader-container",
            ".MHzHome-Content-One h1",
            ".MHzHome-Content-One h5",
            ".upper-hr",
            ".HWW-container h1",
            ".HWW-description",
            ".MHzHome-Content-One ul li",
            ".Three-description h1",
            ".Three-description h2"
        ];
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 }); // 0.1 = 10% of the element is visible
    
        elementsToObserve.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                elements.forEach(element => observer.observe(element));
            } else {
                console.warn(`Selector ${selector} did not match any elements.`);
            }
        });
    
        return () => {
            elementsToObserve.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => observer.unobserve(element));
            });
        };
    }, []);

    return (
        <>
            <Header />
            <div className="MHzHome-container">
                <div className="MHzHome-Header">
                    <div className="HomeHeader-container">
                        <div className="QCMBox">
                            <h1 className="QCMQ">
                                <p>Quality</p>
                            </h1>
                            <h1>
                                <p>+</p>
                                <p>Creativity</p>
                            </h1>
                            <h1>
                                <p>=</p>
                                <p>MHz</p>
                            </h1>
                            <div className="underlineBox"></div>
                        </div>
                        <p className="blinkingP">
                            <span id="holder" />
                            <span id="blinking-cursor" />
                        </p>
                    </div>
                </div>
                <div className="MHzHome-Content-One">
                    <Corevalue />
                </div>
                <div className="MHzHome-Content-Two">
                    <Howwework />
                </div>
                <div className="MHzHome-Content-Three">
                    <div className="Three-BG" ></div>
                    <div className="Three-description">
                        <h1>메가헤르츠의 고객 80% 이상이<br/>4년 이상 저희와 함께 마케팅을 진행했습니다.</h1>
                        <h2>마케팅에 대한 이해도가 깊고 실질적인 실력이 있는 곳으로<br/>선택하셔야 합니다.</h2>
                        <h2>모든 일정에 맞춰 최고의 ROAS를 끌어 올려드리겠습니다.</h2>
                    </div>
                </div>
            </div>
            <FooterBox />
            <Footer />
        </>
    );
}
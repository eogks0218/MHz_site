import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/MHzHome.scss";
import { useEffect, useState } from "react";
import { GrOptimize, GrGrow } from "react-icons/gr";
import { MdOutlinePublishedWithChanges, MdOutlineHighQuality } from "react-icons/md";
import FooterBox from "../common/FooterBox";
import DownBtn from "../common/DownBtn";

export default function MHzHome() {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScroll(window.scrollY > 0);
        });
    }, [])


    useEffect(() => {
        const text = '마케팅 "디테일의 차이가 결과의 차이"';
        let index = 0;
        const speed = 150;

        function type() {
            const holderElement = document.getElementById("holder");
            if (holderElement) {
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
            "#One-Title", 
            "#One-Content", 
            ".MHzHome-Content-One h5", 
            ".MHzHome-Content-One li", 
            ".two-one h1", 
            ".two-one-content", 
            ".comunication-box", 
            ".two-two h1", 
            ".two-two-content", 
            ".two-three-content"
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
            <Header isScroll={isScroll}/>
            <div className="MHzHome-container">
                <div className="MHzHome-Header">
                    <p>
                        <span id="holder" />
                        <span id="blinking-cursor" />
                    </p>
                    <DownBtn position={1} />
                </div>
                <div className="MHzHome-Content-One">
                    <h1 id="One-Title">Core Value</h1>
                    <h5>메가헤르츠만의 체계화된 마케팅 계획으로 확실한 결과를 보장해드립니다.</h5>
                    <ul id="One-Content">
                        <li>
                            <GrGrow />
                            <div>
                                <h4>Synergy</h4>
                                <p>클라이언트의 성공은 곧 메가헤르츠의 성장을 위한 자양분입니다.</p>
                            </div>
                        </li>
                        <li>
                            <GrOptimize />
                            <div>
                                <h4>Optimize</h4>
                                <p>보다 효과적인 솔루션을 이끌어내기 위해 끊임없이 연구합니다.</p>
                            </div>
                        </li>
                        <li>
                            <MdOutlinePublishedWithChanges />
                            <div>
                                <h4>Innovate</h4>
                                <p>변화무쌍한 시대에 맞춰 트렌드를 주도하는 마케팅을 실현합니다.</p>
                            </div>
                        </li>
                        <li>
                            <MdOutlineHighQuality />
                            <div>
                                <h4>Exemplary</h4>
                                <p>클라이언트와 소비자 모두가 만족하는 HIGH-QUALITY의 마케팅 서비스를 제공합니다.</p>
                            </div>
                        </li>
                    </ul>
                    <DownBtn position={2} />
                </div>
                <div className="MHzHome-Content-Two">
                    <div className="two-one">
                        <h1>How We Work</h1>
                        <div className="two-one-content">
                            <h3>마케팅 회사들의 가장 큰 문제는 ?<br /><span>소통의 부재</span>입니다.</h3>
                            <h5>연락이 잘 되다가 어느 순간 점점 소통이 없어지는 업체<br />많은 업체들이 처음과 끝이 다른 곳들이 많습니다.</h5>
                            <div className="comunication-image" />
                        </div>
                        <div className="comunication-box">
                            <h4>메가헤르츠는 좋은 결과물과 매출상승,<br />고객사의 영업 이익을 위해 끊임없이 <span>소통</span>합니다.</h4>
                        </div>
                        <DownBtn position={3} />
                    </div>
                    <div className="two-two">
                        <h1>How We Work</h1>
                        <div className="two-two-content">
                            <h3>마케팅의 본질은 <span>"소통"</span>이 기본입니다.</h3>
                            <h5>시장에서 기업의 이익과 소비자 가치의 교환이 일어나기 위해서는<br />기업과 소비자가 서로 소통할 수 있어야 합니다.<br /><br />즉, 고객에게 기업의 제품과 서비스를 이해하도록 마케팅이 진행되어야 하는데<br />마케팅 회사가 소통이 안된다면 좋은 결과물은 물론이며, 매출 상승도 절대적으로 불가합니다.</h5>
                            <div className="comunication-image-two" />
                        </div>
                        <DownBtn position={4} />
                    </div>
                    <div className="two-three">
                        <div className="two-three-content">
                            <h4>메가헤르츠의 고객 <span>80% 이상</span>이 <span>4년 이상</span> 저희와 함께 마케팅을 진행했습니다.<br />마케팅에 대한 이해도가 깊고 실질적인 실력이 있는 곳으로 선택하셔야 합니다.<br />모든 일정에 맞춰 최고의 ROAS를 끌어 올려드리겠습니다.</h4>
                            <div className="customer-image" />
                        </div>
                        <FooterBox />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
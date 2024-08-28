import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/ContactPage.scss";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import ContactForm from "../ContactForm";

export default function ContactPage() {
    const [index, setIndex] = useState(0);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScroll(window.scrollY > 0);
        });
    }, [])

    const scrollToPosition = (multiplier) => {
        window.scrollTo({
            top: window.innerHeight * multiplier,
            behavior: "smooth",
        });
    };

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
        const elementsToObserve = [
            ".ContactHeader", 
            ".WhereWeWorks > h1", 
            ".WhereWeWorks > h5", 
            ".ContactMap", 
            ".ContactUs > h1", 
            ".ContactUs > h5", 
            ".ContactForm"
        ];

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 });

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
            <div className="ContactPage-Container">
                <div className="ContactPage-Title" >
                    <div className="ContactHeader">
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
                    <div className="down-btn" onClick={()=> scrollToPosition(1)}>
                        <FaChevronDown />
                    </div>
                </div>
                <div className="WhereWeWorks">
                    <h1 id="ContactWhere">Where We Works</h1>
                    <h5>경기도 안산시 상록구 해양3로 17 디지털전환허브 1001호</h5>
                    <div className="ContactMap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.372458803153!2d126.85307410000001!3d37.3100042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f84d2952ac7%3A0x716b425bf7af7850!2z7ZWc64yA7JWe7Jet!5e0!3m2!1sko!2skr!4v1724830215901!5m2!1sko!2skr"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Contact Location Map"
                        />
                    </div>
                    <div className="down-btn" onClick={()=> scrollToPosition(2)}>
                        <FaChevronDown />
                    </div>
                </div>
                <div className="ContactUs">
                    <h1 id="ContactUs">Contact Us</h1>
                    <h5>아래 항목을 작성해 주시면 빠른 시일 내에 답변 드리겠습니다.</h5>
                    <div className="ContactForm">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
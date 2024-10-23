import Header from "../common/Header.js"
import Footer from "../common/Footer.js"
import { useEffect } from "react"
import "../../scss/pages/ServiceViralPage.scss"
import Special from "../ServiceViral/Special.js"
import Process from "../ServiceViral/Process.js"
import CTA from "../common/CTA.js"
import ViralWhy from "../ServiceViral/ViralWhy.js"
import Community from "../ServiceViral/Community.js"
import FooterBox from "../common/FooterBox.js"
import { Link } from "react-router-dom"

export default function ServiceViralPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const CVs = document.querySelectorAll(".CV-title-one, .underlineBox, .CV-description-one, .CV-title-two, .CV-description-two, .CV-title-three, .process_card, .CV-why-title h1, .Why-description, .CV-header-btn, .CV-content-four h3, .CommunityName" )

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            })
        });

        CVs.forEach(entry => observer.observe(entry));
        return() => {
            CVs.forEach(entry => observer.unobserve(entry));
        }
    }, [])

    return(

        <>
            <Header />
            <div className="ServiceCV-container">
                <div className="CV-content-one">
                    <div className="CV-content-BG" />
                    <div className="CV-title-one">
                        <h1>바이럴 마케팅</h1>
                        <div className="underlineBox" />
                        <h5>메가헤르츠는 온라인 광고에 최적화된 통합 마케팅을 제공합니다.</h5>
                    </div>
                    <div className="CV-header-btn">
                        <Link to="/MHz/Success/C">성공사례</Link>
                        <Link to="/MHz/Contact">문의하기</Link>
                    </div>
                </div>
                <div className="CV-content-why">
                    <ViralWhy />
                </div>
                <div className="CV-content-two">
                    <div className="CV-title-two">
                        <h1>메가헤르츠만의 특별함</h1>
                    </div>
                    <div className="CV-description-two">
                        <Special />
                    </div>
                </div>
                <div className="CV-content-three">
                    <div className="CV-title-three">
                        <h1>PROCESS</h1>
                    </div>
                    <div className="CV-description-three">
                        <Process />
                    </div>
                </div>
                <div className="CV-content-four">
                    <Community />
                </div>
            </div>
            <CTA />
            <FooterBox />
            <Footer />
        </>
    )
}
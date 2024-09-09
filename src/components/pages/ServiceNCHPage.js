import Header from "../common/Header"
import Footer from "../common/Footer"
import FooterBox from "../common/FooterBox"
import DownBtn from "../common/DownBtn"
import Vision from "../ServiceNCH/Vision"
import Solution from "../common/Solution"
import { useEffect } from "react"
import "../../scss/pages/ServiceNCHPage.scss"
import CTA from "../common/CTA"

export default function ServiceNCHPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const NCHs = document.querySelectorAll(".ServiceNCH-title h1, .ServiceNCH-title h5, .ServiceNCH-Challenges-title, .Challenge-item, .ServiceNCH-Service-title, .Service-item")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            })
        });

        NCHs.forEach(entry => observer.observe(entry));
        return() => {
            NCHs.forEach(entry => observer.unobserve(entry));
        }
    }, [])

    return(

        <>
            <Header />
            <div className="ServiceNCH-container">
                <div className="ServiceNCH-title">
                    <h1>함께 고민하고, 함께 해결하겠습니다.</h1>
                    <h5>메가헤르츠에서 상위 노출을 달성하세요.</h5>
                    <DownBtn position={1} />
                </div>
                <div className="ServiceNCH-Challenges">
                    <div className="ServiceNCH-Challenges-title">
                        <h1>입점하신 모든 분들의 고민, 상위 노출!</h1>
                    </div>
                    <div className="ServiceNCH-Challenges-list">
                        <div className="Challenge-item">
                            <h3>트래픽과 기회</h3>
                        </div>
                        <div className="Challenge-item">
                            <h3>상위 노출의 중요성</h3>
                        </div>
                        <div className="Challenge-item">
                            <h3>효과적인 광고 전략</h3>
                        </div>
                    </div>
                    <DownBtn position={2} />
                </div>
                <div className="ServiceNCH-Service">
                    <div className="ServiceNCH-Service-title">
                        <h1>메가헤르츠가 제공하는 서비스</h1>
                    </div>
                    <div className="ServiceNCH-Service-list">
                        <div className="Service-item">
                            <div className="Service-item-image" />
                            <h3>SEO 최적화</h3>
                        </div>
                        <div className="Service-item">
                            <div className="Service-item-image" />
                            <h3>지속적인 관리</h3>
                        </div>
                        <div className="Service-item">
                            <div className="Service-item-image" />
                            <h3>전략적 분석</h3>
                        </div>
                    </div>
                    <DownBtn position={3} />
                </div>
                <div className="ServiceNCH-vision">
                    <Vision />
                </div>
            </div>
            <CTA />
            <Solution />
            <FooterBox />
            <Footer />
        </>
    )
}
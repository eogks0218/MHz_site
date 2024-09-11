import Header from "../common/Header.js"
import Footer from "../common/Footer.js"
import FooterBox from "../common/FooterBox.js"
import DownBtn from "../common/DownBtn.js"
import { useEffect } from "react"
import "../../scss/pages/ServiceViralPage.scss"
import Special from "../ServiceViral/Special.js"
import Process from "../ServiceViral/Process.js"
import Solution from "../common/Solution.js"
import CTA from "../common/CTA.js"

export default function ServiceViralPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const CVs = document.querySelectorAll(".CV-title-one, .CV-description-one, .CV-title-two, .CV-description-two, .CV-title-three, .CV-description-three, .CV-why-title h1, .CV-why-item" )

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
                    <div className="CV-title-one">
                        <h1>효과적인 바이럴 마케팅, 메가헤르츠가 해결해 드립니다.</h1>
                        <h5>바이럴 마케팅에 대한 모든 고민, 메가헤르츠에 맡겨주세요.</h5>
                    </div>
                    <DownBtn position={1}/>
                </div>
                <div className="CV-content-why">
                    <div className="CV-why-title">
                        <h1>왜 바이럴 마케팅이 필요할까요?</h1>
                    </div>
                    <div className="CV-why-list">
                        <div className="CV-why-item">
                            <div className="why-item-img"></div>
                            <div className="why-item-description">
                                <h3>입소문의 힘, 바이럴 마케팅</h3>
                                <p>사람들은 자신이 신뢰하는 사람이나 커뮤니티의 추천을 더욱 신뢰합니다. 바이럴 마케팅은 이러한 입소문 효과를 통해 브랜드에 대한 긍정적인 인식을 확산시키고, 자연스러운 구매로 이어지도록 합니다.</p>
                            </div>
                        </div>
                        <div className="CV-why-item">
                            <div className="why-item-img"></div>
                            <div className="why-item-description">
                                <h3>잠재 고객과의 소통 창구</h3>
                                <p>바이럴 마케팅은 단순히 정보를 전달하는 것을 넘어, 잠재 고객과 직접 소통하고 교감할 수 있는 기회를 제공합니다. 고객의 피드백을 통해 제품 또는 서비스를 개선하고, 더욱 강력한 브랜드 충성도를 구축할 수 있습니다.</p>
                            </div>
                        </div>
                        <div className="CV-why-item">
                            <div className="why-item-img"></div>
                            <div className="why-item-description">
                                <h3>경쟁 우위 확보</h3>
                                <p>치열한 경쟁 속에서 차별화된 브랜드 이미지를 구축하고, 타겟 고객에게 강력한 인상을 심어주기 위해서는 바이럴 마케팅이 필수적입니다.</p>
                            </div>
                        </div>
                        <div className="CV-why-item">
                            <div className="why-item-img"></div>
                            <div className="why-item-description">
                                <h3>비용 효율적인 마케팅</h3>
                                <p>기존의 광고 방식에 비해 상대적으로 적은 비용으로 많은 사람들에게 노출될 수 있습니다. 특히, 소셜 미디어를 활용한 바이럴 마케팅은 더욱 효과적이고 비용 효율적입니다.</p>
                            </div>
                        </div>
                    </div>
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
            </div>
            <CTA />
            <Solution />
            <FooterBox />
            <Footer />
        </>
    )
}
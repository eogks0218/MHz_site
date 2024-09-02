import Header from "../common/Header.js"
import Footer from "../common/Footer.js"
import FooterBox from "../common/FooterBox.js"
import DownBtn from "../common/DownBtn.js"
import { useState, useEffect } from "react"
import "../../scss/pages/ServiceViralPage.scss"
import Special from "../ServiceViral/Special.js"
import Process from "../ServiceViral/Process.js"

export default function ServiceViralPage(){

    const [isScroll, setIsScroll] = useState(false)

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScroll(window.scrollY > 0);
        });
    }, [])

    return(

        <>
            <Header isScroll={isScroll}/>
            <div className="ServiceCV-container">
                <div className="CV-content-one">
                    <div className="CV-title-one">
                        <h1>바이럴 마케팅</h1>
                        <h5>메가헤르츠는 온라인 광고에 최적화된 통합 마케팅을 제공합니다.</h5>
                    </div>
                    <div className="CV-description-one">
                        <div className="CV-description-one-image" />
                        <div className="CV-description-one-content">
                            <h4>바이럴 마케팅이 필요한 이유</h4>
                            <p>
                                사람이 모이는 곳에 기회가 있습니다.<br />
                                이런 곳에 노출이 되어야 긍정적인 여론 형성을 통해<br />
                                브랜드의 긍정적인 인지도 효과 및 매출 증대를 가져옵니다.<br /><br />
                                기업의 브랜드 및 제품의 입소문이 가장 대규모로 전파 할 수 있는 공간은<br />
                                가장 활성화된 대형 카페, 커뮤니티 공간에서의 활동입니다.
                            </p>
                        </div>
                    </div>
                    <DownBtn position={1}/>
                </div>
                <div className="CV-content-two">
                    <div className="CV-title-two">
                        <h1>메가헤르츠만의 특별함</h1>
                    </div>
                    <div className="CV-description-two">
                        <Special />
                    </div>
                    <DownBtn position={2}/>
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
            <FooterBox />
            <Footer />
        </>
    )
}
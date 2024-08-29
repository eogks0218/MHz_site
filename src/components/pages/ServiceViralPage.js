import Header from "../common/Header.js"
import Footer from "../common/Footer.js"
import FooterBox from "../common/FooterBox.js"
import DownBtn from "../common/DownBtn.js"
import { useState, useEffect } from "react"
import "../../scss/pages/ServiceViralPage.scss"
import { GoThumbsup } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { FcOvertime } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";

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
                        <div className="specialBox">
                            <div className="specialTitle">
                                <GoThumbsup />
                                <p>품질 높은 발행 계정</p>
                            </div>
                            <div className="specialContent">
                                <p>공장처럼 찍어내는 계정으로 작업하게 되시면 효율이 나올 수가 없습니다.</p>
                            </div>
                        </div>
                        <div className="specialBox">
                            <div className="specialTitle">
                                <TfiWrite />
                                <p>원고 작성 능력</p>
                            </div>
                            <div className="specialContent">
                                <p>제목, 본문, 말투부터 마침표 하나까지 신경 쓰는 디테일로 카페, 커뮤니티 특성에 맞춰 정확히 맞춤된 원고로 진입해야 합니다.</p>
                            </div>
                        </div>
                        <div className="specialBox">
                            <div className="specialTitle">
                                <FcOvertime />
                                <p>당일 게시,<br />자정, 주말 작업 가능</p>
                            </div>
                            <div className="specialContent">
                                <p>A부터 Z까지 직접 진행하며 신속성과 정확성 그리고 정확한 타켓팅을 목표로 합니다.</p>
                            </div>
                        </div>
                        <div className="specialBox">
                            <div className="specialTitle">
                                <VscFeedback />
                                <p>즉각적인 1:1 피드백</p>
                            </div>
                            <div className="specialContent">
                                <p>다양한 돌발 상황들 또한 완벽 대응 가능하며 게시 전, 게시 후 밀착 피드백이 가능합니다.<br/>즉각 반응이 나오는 곳임으로 피드백 속도는 생명입니다.</p>
                            </div>
                        </div>
                    </div>
                    <DownBtn position={2}/>
                </div>
            </div>
            <FooterBox />
            <Footer />
        </>
    )
}
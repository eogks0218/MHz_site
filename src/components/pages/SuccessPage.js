import { useEffect } from "react"
import Header from "../common/Header";
import Footer from "../common/Footer";
import FooterBox from "../common/FooterBox";
import Solution from "../common/Solution";
import DownBtn from "../common/DownBtn";
import CTA from "../common/CTA";
import "../../scss/pages/SuccessPage.scss";
import { Link, useParams } from "react-router-dom";
import SuccessList from "../Success/SuccessList";

export function SuccessPage(){

    const SuccessTab = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [SuccessTab])

    useEffect(() => {
        const titles = document.querySelectorAll(".SuccessViral-title h1, .SuccessViral-title h3, .SuccessViral-title h5, .Success-Performance h3, .Success-FAQ h1, .FAQ-card");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            })
        })

        titles.forEach(entry => observer.observe(entry));

        return() => {
            titles.forEach(entry => observer.unobserve(entry));
        }
    }, [])

    return(
        <>
            <Header />
            <div className="SuccessViral-container">
                <div className="SuccessViral-title">
                    <h1>1,000개가 넘는 성공 스토리, 메가헤르츠와 함께 만들어가세요 !</h1>
                    <h3>다년간의 노하우와 실무 센스로 고객의 성공을 돕습니다.</h3>
                    <h5>다양한 성공 사례를 통해 메가헤르츠와 함께 하는 파트너십이 어떤 결과를 가져올 수 있는지 확인해 보세요.</h5>
                    <DownBtn position={1} />
                </div>
                <div className="SuccessViral-content-one">
                    <div className="SuccessTab">
                        <Link to="/MHz/Success/C" className={SuccessTab.tab === "C" && "selectTab"}>카페, 커뮤니티</Link>
                        <Link to="/MHz/Success/N" className={SuccessTab.tab === "N" && "selectTab"}>네이버, 쿠팡, 오늘의집</Link>
                    </div>
                    <SuccessList tab={SuccessTab.tab} />
                </div>
                <div className="Success-content-two">
                    <div className="Success-Performance">
                        <h3>4년간 1,000개 이상의 성공적인 캠페인 진행</h3>
                        <h3>한 달의 스쳐가는 연이 아닌, 오랜기간 함께 성장하는 파트너가 되어드립니다.</h3>
                        <h3>고객의 니즈에 맞춘 맞춤형 솔루션을 제공합니다.</h3>
                    </div>
                </div>
                <div className="Success-content-three">
                    <div className="Success-FAQ">
                        <h1>자주 묻는 질문</h1>
                        <div className="FAQ-card">
                            <h3>Q. 어떤 종류의 광고를 진행해주시나요?</h3>
                            <p>A. 메가헤르츠는 다양한 온라인 광고 채널 (검색광고, 소셜 미디어 광고, 디스플레이 광고 등)을 통해 최적화된 광고 캠페인을 진행해 드립니다. 고객님의 목표와 예산에 맞춰 맞춤형 광고 전략을 수립해 드립니다.</p>
                        </div>
                        <div className="FAQ-card">
                            <h3>Q. 광고 효과를 어떻게 측정하나요?</h3>
                            <p>A. 메가헤르츠는 클릭률(CTR), 전환율, ROI 등 다양한 지표를 통해 광고 효과를 측정하고, 정기적으로 보고서를 제공해 드립니다.</p>
                        </div>
                        <div className="FAQ-card">
                            <h3>Q. 계약 기간은 어떻게 되나요?</h3>
                            <p>A. 계약 기간은 고객님의 요구에 따라 유동적으로 설정할 수 있습니다. 일반적으로 3개월 단위로 계약하며, 계약 만료 후에도 자동 연장되지 않으므로 안심하셔도 됩니다.</p>
                        </div>
                        <div className="FAQ-card">
                            <h3>Q. 상담은 어떻게 신청하나요?</h3>
                            <p>A. 홈페이지 상담 신청 페이지를 통해 간단한 정보를 입력하시면 담당자가 빠르게 연락드립니다.</p>
                        </div>
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
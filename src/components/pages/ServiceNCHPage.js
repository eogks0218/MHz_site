import Header from "../common/Header"
import Footer from "../common/Footer"
import { useEffect } from "react"
import "../../scss/pages/ServiceNCHPage.scss"
import CTA from "../common/CTA"

export default function ServiceNCHPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const NCHs = document.querySelectorAll(".ServiceNCH-title h1, .ServiceNCH-title h5, .ChallengesList, .ServiceList, .VisionList")

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
                    <h1>많은 경험만큼 소통도 확실합니다.</h1>
                    <h5>메가헤르츠가 오늘부터 함께 고민하고, 함께 해결하겠습니다.</h5>
                </div>
                <div className="ServiceNCH-Challenges">
                    <div className="ChallengesList">
                        <p>입점하신 모든 분들의 가장 큰 고민은<br />단연 상위에 노출되는 것입니다.</p>
                    </div>
                    <div className="ChallengesList">
                        <p>트래픽이 모인 곳에 기회가 있으며 또한 당연히 눈에 띄어야지<br/>상품을 알리는데 의미가 있기 때문이죠.</p>
                    </div>
                    <div className="ChallengesList">
                        <p>물론 어느 업체와, 어떤 방식으로 작업 하느냐에 따라<br />노출 상승, 매출 증대까지 좌우하게 됩니다.</p>
                    </div>
                    <div className="ChallengesList">
                        <p>물론 인지도 및 컨디션이 받쳐줘야 하는 경우도 있습니다.<br/>그렇기에 애초부터 안 될 상품은 사전에 말씀드리며 시작조차 않습니다.</p>
                    </div>
                    <div className="ChallengesList">
                        <p>대한민국 TOP 플랫폼에 우리 상품이 상단에 노출 되는건 <br />그 어떤 광고보다 더욱 효과적일 수 있습니다.</p>
                    </div>
                </div>
                <div className="ServiceNCH-Service">
                    <div className="ServiceList">
                        <p>지속적인 관리가 되지 않으면<br/>물건을 팔면 후속 조치가 안되는것입니다.</p>
                    </div>
                    <div className="ServiceList">
                        <p>어느 정도의 규모인지, 기본적인 로직을 알고 있는지,<br/>가장 중요한 연락이 잘 되는지 손발을 잘 맞춰야지만 원하는 순위 포지셔닝이 가능합니다.</p>
                    </div>
                    <div className="ServiceList">
                        <p>노출의 가장 중요한 SEO를 최적화하는게 중요하며<br/>보다 전략적으로 노출되도록 제품군에 맞는 연구와 분석을 통해 결과를 도출합니다.</p>
                    </div>
                </div>
                <div className="ServiceNCH-vision">
                    <div className="VisionList">
                        <p>정보의 비대칭이 심해짐에 따라<br />비양심적으로 일하는 곳이 너무나 많습니다.</p>
                    </div>
                    <div className="VisionList">
                        <p>정직하게.. 거짓 없이 일하겠습니다.<br />방식보다 중요한 것은 어떤 업체와 함께 하느냐입니다.</p>
                    </div>
                    <div className="VisionList">
                        <p>대형키워드부터 소형 키워드까지 <br />구매전환은 어느정도 이루어지고 있는지<br />유입량은 어느정도 이루어지고 있는지</p>
                    </div>
                    <div className="VisionList">
                        <p>저희와 함께하면 다릅니다.</p>
                    </div>
                </div>
            </div>
            <CTA />
            <Footer />
        </>
    )
}
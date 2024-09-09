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
        const titles = document.querySelectorAll(".SuccessViral-title h1, .SuccessViral-title h3, .SuccessViral-title h5");

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
            </div>
            <CTA />
            <Solution />
            <FooterBox />
            <Footer />
        </>
    )
}
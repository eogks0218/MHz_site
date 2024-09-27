import { useEffect } from "react"
import Header from "../common/Header";
import Footer from "../common/Footer";
import CTA from "../common/CTA";
import "../../scss/pages/SuccessPage.scss";
import { Link, useParams } from "react-router-dom";
import SuccessList from "../Success/SuccessList";
import SuccessPerformance from "../Success/SuccessPerformance";
import SuccessReference from "../Success/SuccessReference";

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
        const titles = document.querySelectorAll(".SuccessViral-title h1, .Success-Reference div, .Success-Performance h3, .Success-FAQ h1, .FAQ-card");

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
                    <h1>이미 수많은 업체들이 메가헤르츠와 함께 하셨습니다.</h1>
                </div>
                <div className="SuccessViral-content-one">
                    <div className="SuccessTab">
                        <Link to="/MHz/Success/C" className={SuccessTab.tab === "C" && "selectTab"}>카페, 커뮤니티</Link>
                        <Link to="/MHz/Success/N" className={SuccessTab.tab === "N" && "selectTab"}>네이버, 쿠팡, 오늘의집</Link>
                    </div>
                    <SuccessList tab={SuccessTab.tab} />
                </div>
                <div className="Success-Reference">
                    <SuccessReference />
                </div>
                <div className="Success-content-two">
                    <div className="Success-Performance">
                        <h3>지난 4년간 수 많은 파트너사와 함께</h3>
                        <h3>1,000개가 넘는 이야기를 만들어 왔으며 같이 성장해왔습니다.</h3>
                        <h3>하나하나 소중하지 않은 이야기가 없습니다.</h3>
                    </div>
                    <div className="Success-img">
                        <SuccessPerformance />
                    </div>
                </div>
            </div>
            <CTA />
            <Footer />
        </>
    )
}
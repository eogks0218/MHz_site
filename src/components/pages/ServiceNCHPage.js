import Header from "../common/Header"
import Footer from "../common/Footer"
import { useEffect } from "react"
import "../../scss/pages/ServiceNCHPage.scss"
import CTA from "../common/CTA"
import NCHService from "../ServiceNCH/NCHService"
import Challenges from "../ServiceNCH/Challenges"
import Vision from "../ServiceNCH/Vision"

export default function ServiceNCHPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const NCHs = document.querySelectorAll(".ServiceNCH-title h1, .ServiceNCH-title h5, .NCHService-container, .VisionList, .ChallengesList")

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
                    <Challenges />
                </div>
                <div className="ServiceNCH-Service">
                    <NCHService />
                </div>
                <div className="ServiceNCH-vision">
                    <Vision />
                </div>
            </div>
            <CTA />
            <Footer />
        </>
    )
}
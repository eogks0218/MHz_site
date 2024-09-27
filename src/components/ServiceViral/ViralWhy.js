import "../../scss/ServiceViral/ViralWhy.scss";
import { useEffect } from "react";
export default function ViralWhy(){

    useEffect(() => {
        const CVs = document.querySelectorAll(".Why-title, .Wd-one, .Wd-two");

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
            <div className="Why-title">
                <h2 className="title-first"><span><strong>바이럴 마케팅</strong>이</span></h2>
                <h2 className="title-second"><span>필요한 이유</span></h2>
            </div>
            <div className="Why-description">
                <div className="Wd-one">
                    <p>사람이 모이는 곳에 기회가 있습니다.<br />이런 곳에 노출이 되어야 긍정적인 여론 형성을 통해<br />브랜드의 긍정적인 인지도 효과 및 매출 증대를 가져옵니다.</p>
                </div>
                <div className="Wd-two">
                    <p>기업의 브랜드 및 제품의 입소문이 가장 대규모로 전파 할 수 있는 공간은<br />가장 활성화된 대형 카페, 커뮤니티 공간에서의 활동입니다.</p>
                </div>
            </div>
        </>
    )
}
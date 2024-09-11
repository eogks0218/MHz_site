import { useEffect } from "react";
import "../../scss/ServiceViral/Process.scss";
import { FaSquareCaretDown } from "react-icons/fa6";

export default function Process(){

    useEffect(() => {
        const CVs = document.querySelectorAll(".process-card, .process-svg" )

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
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>제품 URL 전달 및 행사 일정 요청 시 가이드 양식 전달</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>적절한 카페 / 커뮤니티 진입 여부 상담 후 선정</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>원고 작성</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>원고 컨펌 요청 후 최종 발행</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>발행 전 해당 행사 구성 및 할인가 재검토</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>발행 후 링크 전달 및 실시간 피드백(반응 대응)</h3>
                </div>
            </div>
            <FaSquareCaretDown className="process-svg"/>
            <div className="process-card">
                <div className="process-card-img"></div>
                <div className="process-card-description">
                    <h3>행사 이후 상품에 대한 개선점 피드백</h3>
                </div>
            </div>
        </>
    )
}
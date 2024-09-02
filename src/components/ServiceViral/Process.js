import { useEffect } from "react";
import "../../scss/ServiceViral/Process.scss";

export default function Process(){

    useEffect(()=>{
        const flags = document.querySelectorAll(".flag");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        flags.forEach(flag => observer.observe(flag));

        return() => {
            flags.forEach(flag => observer.unobserve(flag));
        }
    }, [])

    return(
        <>
            <ul class="timeline">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">제품 URL 전달 및 행사 일정 요청 시 가이드 양식 전달</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">적절한 카페 / 커뮤니티 진입 여부 상담 후 선정</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">원고 작성</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">원고 컨펌 요청 후 최종 발행</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">발행 전 해당 행사 구성 및 할인가 재검토</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">발행 후 링크 전달 및 실시간 피드백(반응 대응)</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <div className="flag-image" />
                            <span class="flag">행사 이후 상품에 대한 개선점 피드백</span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
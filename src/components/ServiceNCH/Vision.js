import "../../scss/ServiceNCH/Vision.scss";
import React, { useState } from 'react';

export default function Vision() {
    const visionItems = [
        "정보의 비대칭이 심해짐에 따라<br />비양심적으로 일하는 곳이 너무나 많습니다.",
        "정직하게.. 거짓 없이 일하겠습니다.<br />방식보다 중요한 것은 어떤 업체와 함께 하느냐입니다.",
        "대형키워드부터 소형 키워드까지<br />구매전환은 어느정도 이루어지고 있는지<br />유입량은 어느정도 이루어지고 있는지",
        "저희와 함께하면 다릅니다."
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);

    const handleNext = () => {
        if (animating) return; // 애니메이션 중일 때 클릭 방지
        setAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % visionItems.length);
        setTimeout(() => setAnimating(false), 500); // 애니메이션 시간에 맞춰서 상태 리셋
    };

    const handlePrev = () => {
        if (animating) return; // 애니메이션 중일 때 클릭 방지
        setAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + visionItems.length) % visionItems.length);
        setTimeout(() => setAnimating(false), 500); // 애니메이션 시간에 맞춰서 상태 리셋
    };

    return (
        <div className="VisionContainer">
            <div className={`VisionList ${animating ? 'fade-out' : 'fade-in'}`}>
                <p dangerouslySetInnerHTML={{ __html: visionItems[currentSlide] }} />
            </div>
            <div className="VisionNav">
                <button className="nav-button" onClick={handlePrev}>Prev</button>
                <button className="nav-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
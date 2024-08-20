import "../scss/Contact.scss";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 } // 요소가 10% 이상 보이면 콜백 실행
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            const text = '아래 항목을 작성해 주시면 빠른 시일 내에 답변 드리겠습니다.';
            let index = 0;
            const speed = 100;

            function type() {
                if (index < text.length) {
                    document.getElementById("contactHolder").innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }

            type();
        }
    }, [isInView]); // isInView가 true로 변경되면 실행

    return (
        <div
            ref={containerRef}
            className={`Contact-Container ${isInView ? "in-view" : ""}`}
        >
            <div className="Contact-Title">
                <p>
                    <span id="contactHolder" />
                    <span id="contact-blinking-cursor" />
                </p>
            </div>
            <div className="Contact-Form">
                <form>
                    <div className="field-name-box field-box">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="성함/직책" />
                    </div>
                    <div className="field-corporate-box field-box">
                    <label for="corporate">Corporate Name</label>
                        <input type="text" id="corporate" placeholder="회사명" />
                    </div>
                    <div className="field-phone-box field-box">
                    <label for="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="전화번호" />
                    </div>
                    <div className="field-site-box field-box">
                    <label for="site">Existing Site</label>
                        <input type="text" id="site" placeholder="기존 사이트" />
                    </div>
                    <div className="field-budget-box field-box">
                    <label for="budget">Monthly Budget</label>
                        <input type="text" id="budget" placeholder="월예산" />
                    </div>
                    <div className="field-description-box field-box">
                    <label for="description">Description or inquiry of the project</label>
                        <textarea id="description" placeholder="프로젝트에 대한 설명 혹은 문의 내용" />
                    </div>
                    <div className="field-consent-box field-box">
                        <input type="checkbox" id="consent" required />
                        <label for="consent">
                            <span>개인정보 수집 및 이용에 동의합니다.</span>
                        </label>
                    </div>
                    <input className="input-submit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
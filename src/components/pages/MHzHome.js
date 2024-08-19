import Header from "../common/Header"
import Footer from "../common/Footer"
import "../../scss/pages/MHzHome.scss";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function MHzHome(){

    useEffect(() => {
        const text = '"디테일의 차이가 결과의 차이"';
        let index = 0;
        const speed = 150;

        function type(){
            if(index < text.length){
                document.getElementById("holder").innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }, [])

    const ScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    const ScrollDownTwo = () => {
        window.scrollTo({
            top: window.innerHeight * 2,
            behavior: "smooth"
        });
    }

    useEffect(()=> {
        const titleElement = document.getElementById("One-Title");
        const contentElement = document.getElementById("One-Content");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        if (titleElement) observer.observe(titleElement);
        if (contentElement) observer.observe(contentElement);

        return () => {
            if (titleElement) observer.unobserve(titleElement);
            if (contentElement) observer.unobserve(contentElement);
        };

    }, [])

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;

        function updateSlide(position) {
            slider.style.transform = `translateX(${position}px)`;
        }

        function handlePrevClick() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide(-1000 * currentIndex);
            }
            updateButtonState();
        }

        function handleNextClick() {
            if (currentIndex < slider.childElementCount - 1) {
                currentIndex++;
                updateSlide(-1000 * currentIndex);
            }
            updateButtonState();
        }

        function updateButtonState() {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === slider.childElementCount - 1;
            prevButton.classList.toggle('disabled', prevButton.disabled);
            nextButton.classList.toggle('disabled', nextButton.disabled);
        }

        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);

        // Initialize button state
        updateButtonState();

        return () => {
            prevButton.removeEventListener('click', handlePrevClick);
            nextButton.removeEventListener('click', handleNextClick);
        };
    }, []);

    return(
        <>
            <Header />
            <div className="MHzHome-container">
                <div className="MHzHome-Header">
                    <p>
                        <span id="holder" />
                        <span id="blinking-cursor" />
                    </p>
                    <div className="down-btn" onClick={ScrollDown}>
                        <FaChevronDown />
                    </div>
                </div>
                <div className="MHzHome-Content-One">
                    <h1 id="One-Title">Core Value</h1>
                    <ul id="One-Content">
                        <li>클라이언트의 성공은 곧 메가헤르츠의 성장을 위한 자양분입니다.</li>
                        <li>보다 효과적인 솔루션을 이끌어내기 위해 끊임없이 연구합니다.</li>
                        <li>변화무쌍한 시대에 맞춰 트렌드를 주도하는 마케팅을 실현합니다.</li>
                        <li>클라이언트와 소비자 모두가 만족하는 HIGH-QUALITY의 마케팅 서비스를 제공합니다.</li>
                    </ul>
                    <div className="down-btn" onClick={ScrollDownTwo}>
                        <FaChevronDown />
                    </div>
                </div>
                <div className="MHzHome-Content-Two">
                    <h1>How We Work</h1>
                    <div className="slider-container">
                        <button className="prev">◀</button>
                        <ul className="slider">
                            <li>
                                <h3>마케팅 회사들의 가장 큰 문제는 ?<br/><span>소통의 부재</span>입니다.</h3>
                                <h5>연락이 잘 되다가 어느 순간 점점 소통이 없어지는 업체<br/>많은 업체들이 처음과 끝이 다른 곳들이 많습니다.</h5>
                            </li>
                            <li>
                                <h4>우리는 좋은 결과물과 매출상승,<br/>고객사의 영업 이익을 위해 끊임없이 <span>소통</span>합니다.</h4>
                            </li>
                            <li>
                                <h3>마케팅의 본질은 <span>"소통"</span>이 기본입니다.</h3>
                                <h5>시장에서 기업의 이익과 소비자 가치의 교환이 일어나기 위해서는<br/>기업과 소비자가 서로 소통할 수 있어야 합니다.<br/>즉, 고객에게 기업의 제품과 서비스를 이해하도록 마케팅이 진행되어야 하는데<br/>마케팅 회사가 소통이 안된다면 좋은 결과물은 물론이며, 매출 상승도 절대적으로 불가합니다.</h5>
                            </li>
                            <li>
                                <h4>메가헤르츠의 고객 80% 이상이<br/>4년 이상 저희와 함께 마케팅을 진행했습니다.<br/><br/>마케팅에 대한 이해도가 깊고<br/>실질적인 실력이 있는 곳으로<br/>선택하셔야 합니다.<br/><br/>모든 일정에 맞춰 <span>최고의 ROAS</span>를 끌어 올려드리겠습니다.</h4>
                            </li>
                            <li>
                                <h4>업계에서 가장 오래되고 잘나가는 이유는 반드시 있습니다.<br/><br/>향후 몇 개월, 아니 향후 몇 년이 편할 수 있습니다.</h4>
                            </li>
                        </ul>
                        <button className="next">▶</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
import { useEffect } from "react";
import "../../scss/Success/SuccessList.scss";
import review1 from "./imagesC/review.png"

export default function SuccessList({tab}){

    useEffect(() => {
        const cards = document.querySelectorAll(".SL-card");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            })
        });

        cards.forEach(entry => observer.observe(entry));
        return() => {
            cards.forEach(entry => observer.unobserve(entry));
        }
    }, [])

    return(
        <div className="SL-container">
            <div className={tab === "C" ? "SL-card tabC" : "SL-card tabN"}>
                <div className="SL-card-image" >
                    <img src={review1} alt="Card" />
                </div>
                <div className="SL-card-content">Blah Blah</div>
            </div>
            <div className={tab === "C" ? "SL-card tabC" : "SL-card tabN"}>
                <div className="SL-card-image" >
                    <img src={review1} alt="Card" />
                </div>
                <div className="SL-card-content">Blah Blah</div>
            </div>
            <div className={tab === "C" ? "SL-card tabC" : "SL-card tabN"}>
                <div className="SL-card-image" >
                    <img src={review1} alt="Card" />
                </div>
                <div className="SL-card-content">Blah Blah</div>
            </div>
        </div>
    )
}
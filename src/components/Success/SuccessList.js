import "../../scss/Success/SuccessList.scss";
import review1 from "./imagesC/review.png"

export default function SuccessList({tab}){

    return(
        <>
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
        </>
    )
}
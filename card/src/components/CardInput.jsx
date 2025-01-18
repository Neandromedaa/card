import CardFront from "./CardFront";
import CardBack from "./CardBack";

function CardInput() {
    return ( 
        <>
            <div className="cardInput">
                {true ? <CardFront/> : <CardBack/>}
                <div className="cardNumber">
                    <h6>Card Number</h6>
                    <input></input>
                </div>
                <div className="cardName">
                    <h6>Card Name</h6>
                    <input></input>
                </div>
                <div className="cardOther">
                    <div className="cardDate">
                        <h6>Expiration Date</h6>
                        <div className="dateInputs">
                            <input></input>
                            <input></input>
                        </div>
                    </div>
                    <div className="cardCode">
                        <h6>CVV</h6>
                        <input></input>
                    </div>
                </div>
                <button>Submit</button>
            </div>
        </>
    );
}

export default CardInput;
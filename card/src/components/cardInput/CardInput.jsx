import CardFront from "../cardFront/CardFront";
import CardBack from "../cardBack/CardBack";
import styles from "./CardInput.module.scss";
import { useState } from "react";

function CardInput() {
    const[cardNumber, setCardNumber] = useState('#### #### #### ####');
    const[cardNumberInput, setCardNumberInput] = useState(cardNumber);
    function handleCardNumber(e){
        setCardNumberInput(e.target.value + cardNumber.slice(e.target.value.length));
    }
    function numberMask(e){
        // if(/[A-я]/.test(e.key)) e.preventDefault();
    }

    return (
        <>
            <div className={styles.cardInput}>
                {true ? <CardFront 
                            cardNumberInput={cardNumberInput}/> : 
                        <CardBack/>}
                <div className={styles.cardInputs}>
                    <div className={styles.cardNumber}>
                        <h6>Card Number</h6>
                        <input onKeyDown={numberMask} onChange={handleCardNumber}></input>
                    </div>
                    <div className={styles.cardName}>
                        <h6>Card Name</h6>
                        <input></input>
                    </div>
                    <div className={styles.cardOther}>
                        <div className={styles.cardDate}>
                            <h6>Expiration Date</h6>
                            <div className={styles.dateInputs}>
                                <input></input>
                                <input></input>
                            </div>
                        </div>
                        <div className={styles.cardCode}>
                            <h6>CVV</h6>
                            <input></input>
                        </div>
                    </div>
                    <button>Submit</button>
                </div> 
            </div>
        </>
    );
}

export default CardInput;
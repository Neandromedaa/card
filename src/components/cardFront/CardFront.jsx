import { useEffect, useRef } from 'react';
import styles from './CardFront.module.scss';

function CardFront({ cardNumberInput, cardNameInput,  focusCardNumber, focusCardName, focusCardDate, focusCardCode }) {
    const cardNumber = useRef(null);
    const cardName = useRef(null);
    const cardDate = useRef(null);
    const cardFrontSide = useRef(null);
    useEffect(() => {
        focusCardNumber === true ? cardNumber.current.classList.add(styles.border) : cardNumber.current.classList.remove(styles.border)
    }, [focusCardNumber]);
    useEffect(() => {
        focusCardName === true ? cardName.current.classList.add(styles.border) : cardName.current.classList.remove(styles.border)
    }, [focusCardName]);
    useEffect(() => {
        focusCardDate === true ? cardDate.current.classList.add(styles.border) : cardDate.current.classList.remove(styles.border)
    }, [focusCardDate]);
    useEffect(() => {
        focusCardCode === true ? cardFrontSide.current.classList.add(styles.rotate_out) : cardFrontSide.current.classList.remove(styles.rotate_in)
    })
       
    return (
        <>
            <div className={styles.cardSample} ref={cardFrontSide}>
                <div className={styles.cardLogosSample}>
                    <img></img>
                </div>
                <div className={styles.cardNumberSample} ref={cardNumber} >
                    <p>{cardNumberInput}</p>
                </div>
                <div className={styles.cardInfoSample}>
                    <div className={styles.cardNameSample} ref={cardName}>
                        <h6>Card Holder</h6>
                        <p>{cardNameInput}</p>
                    </div>
                    <div className={styles.cardDateSample} ref={cardDate}>
                        <h6>Expires</h6>
                        <p>MM/YY</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardFront;
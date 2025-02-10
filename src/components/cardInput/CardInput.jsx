import CardFront from "../cardFront/CardFront";
import CardBack from "../cardBack/CardBack";
import styles from "./CardInput.module.scss";
import {cardNumberStore, cardNameStore, cardDateStore, cardCodeStore} from '../../store';
import { useState } from "react";

function CardInput() {
    const cardNumberPlaceHolder = '#### #### #### ####';
    const[cardNumber, setCardNumber] = useState(cardNumberPlaceHolder);
    const[cardNumberInput, setCardNumberInput] = useState('');
    function handleCardNumber(e){
        setCardNumberInput(e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim());
        setCardNumber(e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim() + cardNumberPlaceHolder.slice(e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim().length));
    }
    function inputNumberMask(e){
        const isDigits = e.keyCode <= 57 && e.keyCode >= 48;
        const isBackSpace = e.keyCode === 8;
        const isDelete = e.keyCode === 46;
        const isArrows = e.keyCode >= 37 && e.keyCode <= 40;
        if(!isDigits && !isBackSpace && !isArrows && !isDelete) e.preventDefault();
    }

    const cardNamePlaceHolder = 'AD SOYAD';
    const[cardName, setCardName] = useState(cardNamePlaceHolder);
    const[cardNameInput, setCardNameInput] = useState('');
    function handleCardName(e){
        setCardName(e.target.value);
        setCardNameInput(e.target.value)
    }
    function inputNameMask(e){
        const isLetters = e.keyCode <= 90 && e.keyCode >= 65;
        const isBackSpace = e.keyCode === 8;
        const isDelete = e.keyCode === 46;
        const isArrows = e.keyCode >= 37 && e.keyCode <= 40;
        const isSpace = e.keyCode === 32;
        if(!isLetters && !isBackSpace && !isArrows && !isDelete && !isSpace) e.preventDefault();
    }

    const[focusCardNumber, setFocusCardNumber] = useState(cardNumberStore.isFocused);
    const[focusCardName, setFocusCardName] = useState(cardNameStore.isFocused);
    const[focusCardDate, setFocusCardDate] = useState(cardDateStore.isFocused);
    const[focusCardCode, setFocusCardCode] = useState(cardCodeStore.isFocused);
    function handleCardNumberFocus(){
        setFocusCardNumber(!focusCardNumber);
    }
    function handleCardNameFocus(){
        setFocusCardName(!focusCardName);
    }
    function handleCardDateFocus(){
        setFocusCardDate(!focusCardDate);
    }
    function handleCardCodeFocus(){
        setFocusCardCode(!focusCardCode);
    }

    const years = [2020, 2021, 2022, 2023, 2024, 2025];
    const yearsToSelect = years.map(year => {
        return <option>{year}</option>
    });

    const months = [];
    for(let i = 1; i <= 13; i++){
        months.push(i);
    }
    const monthsToSelect = months.map(month => {
        return <option>{month}</option>
    })

    return (
        <>
            <div className={styles.cardInput}>
                {true ? <CardFront 
                            cardNumberInput={cardNumber}
                            cardNameInput={cardName}
                            focusCardNumber={focusCardNumber}
                            focusCardName={focusCardName}
                            focusCardDate={focusCardDate}
                        /> : 
                        <CardBack/>}
                <div className={styles.cardInputs}>
                    <div className={styles.cardNumber}>
                        <h6>Card Number</h6>
                        <input 
                            maxLength={cardNumberPlaceHolder.length}
                            onKeyDown={inputNumberMask}
                            onChange={handleCardNumber}
                            value={cardNumberInput}
                            onFocus={handleCardNumberFocus}
                            onBlur={handleCardNumberFocus}
                        />
                    </div>
                    <div className={styles.cardName}>
                        <h6>Card Name</h6>
                        <input
                            maxLength={20}
                            onKeyDown={inputNameMask}
                            onChange={handleCardName}
                            onFocus={handleCardNameFocus}
                            onBlur={handleCardNameFocus}
                        />
                    </div>
                    <div className={styles.cardOther}>
                        <div className={styles.cardDate}>
                            <h6>Expiration Date</h6>
                            <div className={styles.dateInputs}>
                                <select
                                    onFocus={handleCardDateFocus}
                                    onBlur={handleCardDateFocus}>
                                    <option value='' disabled selected hidden>Month</option>
                                    {monthsToSelect}
                                </select>
                                <select
                                    onFocus={handleCardDateFocus}
                                    onBlur={handleCardDateFocus}
                                    defaultValue={1}>
                                    <option value='' disabled selected hidden>Year</option>
                                    {yearsToSelect}
                                </select>
                            </div>
                        </div>
                        <div className={styles.cardCode}>
                            <h6>CVV</h6>
                            <input
                                onFocus={handleCardCodeFocus}
                                onBlur={handleCardCodeFocus}
                            />
                        </div>
                    </div>
                    <button>Submit</button>
                </div> 
            </div>
        </>
    );
}

export default CardInput;
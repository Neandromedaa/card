import { useEffect, useRef } from 'react';
import styles from './CardBack.module.scss';

function CardBack({ cardCodeInput, focusCardCode }) {
    const cardBackSide = useRef(null);
    useEffect(() => {
        focusCardNumber === true ? cardBackSide.current.classList.add(styles.rotate_in) : cardBackSide.current.classList.remove(styles.rotate_out)
    }, focusCardCode)
    return ( 
        <>
            <div ref={cardBackSide}>
                <p>{cardCodeInput}</p>
            </div>
        </>
     );
}

export default CardBack;
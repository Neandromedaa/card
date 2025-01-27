import styles from './CardFront.module.scss';

function CardFront({ cardNumberInput }) {
    return (
        <>
            <div className={styles.cardSample}>
                <div className={styles.cardLogosSample}>
                    <img></img>
                </div>
                <div className={styles.cardNumberSample}>
                    <p>{cardNumberInput}</p>
                </div>
                <div className={styles.cardInfoSample}>
                    <div className={styles.cardNameSample}>
                        <h6>Card Holder</h6>
                        <p>AD SOYAD</p>
                    </div>
                    <div className={styles.cardDateSample}>
                        <h6>Expires</h6>
                        <p>MM/YY</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardFront;
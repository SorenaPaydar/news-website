import styles from '../styles/Carousel.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ headingsRes }) => {
    const headings = headingsRes.articles;
    const [indx, setIndx] = useState(0);
    const length = headings.length;
    const next = () => {
        if (indx === length - 1) {
            setIndx(0);
        }
        else {
            setIndx((p) => p + 1);
        }
    }
    const pre = () => {
        if (indx === 0) {
            setIndx(length - 1);
        }
        else {
            setIndx((p) => p - 1);
        }
    }
    const [timer, setTimer] = useState(null)
    useEffect(() => {
        clearInterval(timer);
        setTimer(null);
        setTimer(setInterval(next, 10000));
    }, [indx]);

    return (
        <div className={styles.sliderContainer}>
            <button onClick={pre} className={styles.leftButton}><AiOutlineLeft /></button>
            <button onClick={next} className={styles.rightButton}><AiOutlineRight /></button>
            <div className={styles.slide} style={{ 'left': `-${100 * indx}vw` }} >

                {
                    headings.map((slide, index) =>
                        <div className={indx === index ? styles.activeSlide : styles.slidePic}>
                            <img src={slide.urlToImage} />
                            <div className={styles.headerTitle}>{slide.title}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Carousel

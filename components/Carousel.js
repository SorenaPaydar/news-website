import styles from '../styles/Carousel.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";



const Carousel = ({headingsRes}) => {
    const headings = headingsRes.articles;
    const [indx, setindx] = useState(0);
    const length = headings.length;

    const next = ()=>{
        if(indx===length-1){
            setindx(0);
        }
        else{
            setindx((p)=>p+1);
        }   
    }
    const pre = ()=>{
        if(indx===0){
            setindx(length-1);
        }
        else{
            setindx((p)=>p-1);
        }   
    }
    const [timer,settimer]=useState(null)
    useEffect(() => {
        clearInterval(timer);
        settimer(null);
        settimer(setInterval(next,10000));
    },[indx]);
    
    return ( 
        <div className={styles.sliderContainer}>
            <button onClick={pre} className={styles.leftButton}><AiOutlineLeft/></button>
            <button onClick={next} className={styles.rightButton}><AiOutlineRight/></button>
            <div className={styles.slide} style={{'left':`-${100*indx}vw`}}>

            {headings.map((slide,index)=>
                <div className={indx===index?styles.activeSlide:styles.slidePic}>
                    <img src={slide.urlToImage} />
                    <div className={styles.headerTitle}><a target='_blank' href={slide.url}>{slide.title}</a></div>
                </div>
            )}
            </div>
        </div>
     );
}


export default Carousel

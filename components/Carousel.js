import styles from '../styles/Carousel.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import Slide from './slide';

const Carousel = ({headingsRes}) => {
    const headings = headingsRes.articles;
    const [indx, setindx] = useState(0);
    const length = headings.length;
    console.log(headings);
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
        settimer(setInterval(next,3000));
    },[]);
    
    return ( 
        <div className={styles.sliderContainer}>
            <button onClick={pre} className={styles.leftButton}><AiOutlineLeft/></button>
            <button onClick={next} className={styles.rightButton}><AiOutlineRight/></button>
            <div className={styles.slide} style={{'left':`-${100*indx}vw`}}>

            {headings.map((slide,index)=>
                <div className={indx===index?styles.activeSlide:styles.slidePic}>
                    <img src={slide.urlToImage} />
                    <div className={styles.headerTitle}>{slide.title}</div>
                </div>
            )}
            </div>
        </div>
     );
}


export default Carousel

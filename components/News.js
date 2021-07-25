import styles from "../styles/News.module.scss";

const News = ({newsDetails:n}) => {
    const fixdate = (date) => {
        return(date.slice(0,10))
    }
    return (
        
        <div className={styles.newsContainer}>
            <div className={styles.imageContainer}>
                <img src={n.urlToImage}/>
            </div>
            <div className={styles.content}>    
                <a className={styles.link} target="_blank" href={n.url}>
                    <h4 className={styles.title}>{n.title}</h4>
                </a>
                <div className={styles.details}>
                    <p className={styles.date}>{fixdate(n.publishedAt)}</p>
                    <p className={styles.authot}>By {n.author}</p>
                </div>
            </div>  
        </div>
        
     );
}
 
export default News;

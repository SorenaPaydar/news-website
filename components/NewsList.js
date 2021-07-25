import styles from '../styles/NewsList.module.scss'
import News from './News';

const NewsList = ({newsListResJson}) => {
    
    return ( 
        <div className={styles.content}>
            <div className={styles.newsList}>
                {newsListResJson && newsListResJson.map(news => (
                    <News newsDetails={news}/>
                ))}
            </div>
            <div className={styles.categoriesContainer}><div className={styles.categories}></div></div>
        </div>
     );
}
 
export default NewsList;
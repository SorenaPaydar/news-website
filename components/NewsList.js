import styles from '../styles/NewsList.module.scss'
import News from './News';

const NewsList = ({newsListResJson}) => {
    
    return ( 
        <div className={styles.newsList}>
            {newsListResJson.map(news => (
                <News newsDetails={news}/>
            ))}
        </div>
     );
}
 
export default NewsList;
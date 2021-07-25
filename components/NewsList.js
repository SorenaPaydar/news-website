import styles from '../styles/NewsList.module.scss'
import News from './News';
import { useRouter } from 'next/router';
import Pagebutton from './Pagebuttons';

const NewsList = ({newsListResJson,page:pageSTR}) => {
    const page = parseInt(pageSTR);
    const router = useRouter();
    // const lastPage = parseInt(parseInt(newsListResJson.totalResults)/40)+1;
    const lastPage = 23;
    const next = () => {
        router.push('/'+(parseInt(page)+1));
    }
    const pre = () => {
        router.push('/'+(parseInt(page)-1));
    }
    return ( 
        <div className={styles.container}>
            {newsListResJson.articles &&
                <div className={styles.content}>
                    <div className={styles.newslistContainer}>
                        <div className={styles.newsList}>
                            {newsListResJson.articles.map(news => (
                                <News newsDetails={news}/>
                            ))}
                        </div>
                        <div className={styles.categoriesContainer}><div className={styles.categories}></div></div>
                    </div>
                </div>
            }
            <div className={styles.buttonsContainer}>
            <div className={styles.buttons}>
                <button className={styles.pre} disabled={page===1} onClick={pre}>previous</button>
                <Pagebutton onPage={page} page={1}/>
                <Pagebutton onPage={page} page={page-1<=2?2:"..."}/>
                <Pagebutton onPage={page} page={page-1<=2?3:page>=lastPage-2?lastPage-4:page-1}/>
                <Pagebutton onPage={page} page={page<=3?4:page>=lastPage-2?lastPage-3:page}/>
                <Pagebutton onPage={page} page={lastPage-page<=2?lastPage-2:page<=3?5:page+1}/>
                <Pagebutton onPage={page} page={lastPage-page<=2?lastPage-1:"..."}/>
                <Pagebutton onPage={page} page={lastPage}/>
                <button className={styles.next} disabled={page===lastPage} onClick={next}>next</button>
            </div>
            </div>
        </div>
     );
}
 
export default NewsList;
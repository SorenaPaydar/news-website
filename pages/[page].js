import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList';
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router';

const Page = ({headingsResJson,newsListResJson,page}) => {
  const router = useRouter();
  const next = () => {
    router.push('/'+(parseInt(page)+1));
  }
  const pre = () => {
    router.push('/'+(parseInt(page)-1));
  }
  return (
    <div className={styles.home}>
      <Carousel headingsRes={headingsResJson} />
      <div className={styles.content}>
        <div className={styles.newsList}><NewsList newsListResJson={newsListResJson.articles}/></div>
        <div className={styles.categoriesContainer}><div className={styles.categories}></div></div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          <button className={styles.pre} disabled={page==="1"?true:false} onClick={pre}>previous</button>
          <button className={styles.next} onClick={next}>next</button>
        </div>
      </div>
    </div> 
    );
}
export const getServerSideProps = async (context) => {
    const headingRes = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=8ab3f7cfe00e4f679313972211ffff2f');
    const headingsResJson = await headingRes.json();
    const page = context.params.page;
    const newsListRes = await fetch(`https://newsapi.org/v2/top-headlines?language=en&page=${page}&apiKey=8ab3f7cfe00e4f679313972211ffff2f`)
    const newsListResJson = await newsListRes.json();
  
    return {
        props: {
          headingsResJson,
          newsListResJson,
          page
        }
    }
  }
 
export default Page;
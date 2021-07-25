import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList';
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router';

const Home = ({headingsResJson,newsListResJson}) => {
  const router = useRouter();
  const next = () => {
    router.push('/'+(2));
  }
  const pre = () => {
    router.push('/'+(parseInt(page)-1));
  }
  return (
    <div className={styles.home}>
      <Carousel headingsRes={headingsResJson} />
      <div className={styles.content}>
        <NewsList newsListResJson={newsListResJson.articles}/>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          <button className={styles.pre} disabled={true} onClick={pre}>previous</button>
          <button className={styles.next} onClick={next}>next</button>
        </div>
      </div>
    </div> 
    );

}
export const getServerSideProps = async (context) => {
  const headingRes = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=0ce9a2e61d774b4d916604067cb27fd6');
  const headingsResJson = await headingRes.json();
  const newsListRes = await fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=90a29b9db9e548c78bb172767e024f45')
  const newsListResJson = await newsListRes.json();

  return {
      props: {
        headingsResJson,
        newsListResJson
      }
  }
}
 
export default Home;
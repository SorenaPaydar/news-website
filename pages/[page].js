import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList';
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router';

const Page = ({headingsResJson,newsListResJson,page}) => {
  return (
    <div className={styles.home}>
      <Carousel headingsRes={headingsResJson} />
      <NewsList newsListResJson={newsListResJson} page={page}/>
    </div> 
    );
}
export const getServerSideProps = async (context) => {
    const headingRes = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=90a29b9db9e548c78bb172767e024f45');
    const headingsResJson = await headingRes.json();
    const page = context.params.page;
    const newsListRes = await fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=40&page=${page}&apiKey=90a29b9db9e548c78bb172767e024f45`)
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
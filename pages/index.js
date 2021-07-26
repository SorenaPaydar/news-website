import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList';
import styles from '../styles/Home.module.scss'

const Home = ({headingsResJson,newsListResJson}) => {
  return (
    <div className={styles.home}>
      <Carousel headingsRes={headingsResJson} />
      <NewsList newsListResJson={newsListResJson} page="1" path={''}/>
    </div> 
    );
}
export const getServerSideProps = async (context) => {
  const key = '25254bb32bf145d6b91a9234fb4b6fff'
  const headingRes = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${key}`);
  const headingsResJson = await headingRes.json();
  const newsListRes = await fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=40&apiKey=${key}`)
  const newsListResJson = await newsListRes.json();

  return {
      props: {
        headingsResJson,
        newsListResJson
      }
  }
}
 
export default Home;
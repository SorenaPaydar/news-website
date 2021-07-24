import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import styles from '../styles/Home.module.scss'

const Home = ({headingsRes}) => {
  return (
    <div className={styles.home}>
      {/* <Carousel headingsRes={headingsRes} /> */}
    </div> 
    );

}
export const getStaticProps = async () => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=8ab3f7cfe00e4f679313972211ffff2f');
  const headingsRes = await res.json();
  return {
      props: {
        headingsRes
      }
  }
}
 
export default Home;
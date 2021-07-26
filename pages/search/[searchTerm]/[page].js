import NewsList from "../../../components/NewsList";
import styles from '../../../styles/SearchResult.module.scss';

const searchResult = ({ searchResJSON,page,searchTerm }) => {
  console.log(searchTerm);
  return (
    <div className={styles.searchResult}>
      <NewsList newsListResJson={searchResJSON} page={page} path={`${searchTerm}/`}/>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const key = '25254bb32bf145d6b91a9234fb4b6fff'
  const searchTerm = context.params.searchTerm;
  const page = context.params.page;
  const searchRes = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&page=${page}&apiKey=${key}`
  );
  const searchResJSON = await searchRes.json();

  return {
    props: {
      searchResJSON,
      searchTerm,
      page
    },
  };
};

export default searchResult;

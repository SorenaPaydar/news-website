import NewsList from "../../components/NewsList";
import styles from "../../styles/SearchResult.module.scss";

const searchResult = ({ searchResJSON }) => {
  return (
    <div className={styles.searchResult}>
      {searchResJSON && <NewsList newsListResJson={searchResJSON.articles} />}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const searchTerm = context.params.searchTerm;
  const searchRes = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=c489eabb34bd400091e71c7c614b5576`
  );
  const searchResJSON = await searchRes.json();

  return {
    props: {
      searchResJSON,
    },
  };
};

export default searchResult;

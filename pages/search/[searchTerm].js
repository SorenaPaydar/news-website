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
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=90a29b9db9e548c78bb172767e024f45`
  );
  const searchResJSON = await searchRes.json();

  return {
    props: {
      searchResJSON,
    },
  };
};

export default searchResult;

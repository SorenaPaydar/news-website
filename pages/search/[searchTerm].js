import NewsList from "../../components/NewsList";
import styles from "../../styles/SearchResult.module.scss";

const searchResult = ({ searchResJSON,searchTerm }) => {
  console.log(searchTerm);
  return (
    <div className={styles.searchResult}>
      <NewsList newsListResJson={searchResJSON} />
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
      searchTerm
    },
  };
};

export default searchResult;

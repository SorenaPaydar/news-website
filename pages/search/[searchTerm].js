const searchResult = ({ searchResJSON }) => {
    return (
        <div>
            {searchResJSON && searchResJSON.articles.map((article) => (
                <p>{article.title}</p>
            ))}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const searchTerm = context.params.searchTerm
    const searchRes = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=154ecb1292534cfa8990a4aa1e17a2b7`)
    const searchResJSON = await searchRes.json();
  
    return {
        props: {
          searchResJSON
        }
    }
  } 

export default searchResult;



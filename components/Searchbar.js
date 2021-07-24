import { useState } from "react";
import styles from "../styles/Searchbar.module.scss";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    if (searchTerm !== "") {
      router.push("/search/" + searchTerm);
    }
  };

  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.Searchbar}>
      <div className={styles.searchLogo}>
        <label
          className={isActive ? styles.openSearch : styles.closeSearch}
          onClick={() => setActive(!isActive)}
        >
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className={styles.searchIcon} onClick={() => searchHandler()}>
            <AiOutlineSearch />
          </i>
        </label>
      </div>
    </div>
  );
};

export default Searchbar;

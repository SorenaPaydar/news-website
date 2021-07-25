import { useState, useEffect, useRef } from "react";
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
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  return (
    <div className={styles.Searchbar}>
      <div className={styles.searchLogo}>
        <label
          className={isActive ? styles.openSearch : styles.closeSearch}
          onClick={() => setActive(true)}
          ref={ref}
          onKeyPress={(e) => {
            e.persist();
            if (e.key === "Enter") {
              e.preventDefault();
              searchHandler();
            }
          }}
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

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Searchbar;

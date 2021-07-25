import styles from '../styles/Navbar.module.scss'
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Searchbar from './Searchbar';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.navbar}>
            <h2 className={styles.title}>Title</h2>
            <div className={styles.searchbar}>
                <Searchbar />
            </div>
            <div className={styles.links}>
                <a>Home</a>
                <a>About</a>
                <a className={styles.ddContainer} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
                    Category
                    {open && <DropdownMenu />}
                </a>
            </div>
        </div>
    );
}

export default Navbar;
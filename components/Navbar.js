import styles from '../styles/Navbar.module.scss'
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Searchbar from './Searchbar';
import Link from 'next/link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.navbar}>
            <h2 className={styles.title}>NEWS</h2>
            <div className={styles.searchbar}>
                <Searchbar />
            </div>
            <div className={styles.links}>
                <Link className={styles.link} href='/'>
                    <a>Home</a>
                </Link>
                <Link className={styles.link} href='/about'>
                    <a>About</a>
                </Link>
                <a className={styles.ddContainer} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
                    Category
                    {open && <DropdownMenu />}
                </a>
            </div>
        </div>
    );
}

export default Navbar;
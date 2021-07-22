import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <h2 className={styles.title}>Title</h2>
            <div className={styles.links}>
                <a>Home</a>
                <a>Article</a>
                <a>Contact</a>
                <a>Purchase</a>
            </div>
        </div>
     );
}
 
export default Navbar;
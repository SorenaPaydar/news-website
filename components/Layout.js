import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>    
                {children}   
            </div>
            <Footer />
        </>
    );
}

export default Layout;
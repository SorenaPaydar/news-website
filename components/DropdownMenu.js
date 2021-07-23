import Link from 'next/link'
import styles from '../styles/DropdownMenu.module.scss'

const DropdownMenu = () => {
    return (
        <div className={styles.DropdownMenu}>
            <div className={styles.categories}>
                <ul>
                    <li>
                        <Link href="/">Business</Link>
                    </li>
                    <li>
                        <Link href="/">Entertainment</Link>
                    </li>
                    <li>
                        <Link href="/">General</Link>
                    </li>
                    <li>
                        <Link href="/">Health</Link>
                    </li>
                    <li>
                        <Link href="/">Science</Link>
                    </li>
                    <li>
                        <Link href="/">Sports</Link>
                    </li>
                    <li>
                        <Link href="/">Technology</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownMenu;
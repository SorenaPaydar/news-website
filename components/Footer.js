import styles from "../styles/Footer.module.scss"
import SocialIcon from "./social_icon"
import FaceBook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Pinterest from '../icons/pinterest'
import Behance from "../icons/behance"
import Instagram from '../icons/instagram'
import Googleplay from '../icons/google-play'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <span>fashion</span>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Recipes
                        </li>
                        <li>
                            Article
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Purchase
                        </li>
                    </ul>
                </div>
                <div className={styles.socialNetworks}>
                    <SocialIcon icon={<FaceBook />} url='#' />
                    <SocialIcon icon={<Twitter />} url='#' />
                    <SocialIcon icon={<Pinterest />} url='#' />
                    <SocialIcon icon={<Behance />} url='#' />
                    <SocialIcon icon={<Instagram />} url='#' />
                    <SocialIcon icon={<Googleplay />} url='#' />
                </div>
            </div>
            <div className={styles.copyright}>
                <span>@2019 Logwork. All Right Reserved.</span>
            </div>
        </div>
    )
}

export default Footer;
import styles from '../styles/social_icon.module.scss'

export default function SocialIcon({ icon, url }) {
    return <a className={styles.SocialIcon}
        href={url ?? "#"} rel="noreferrer" target={url ? "_blank" : "_self"}>
        {icon}
    </a>;
}
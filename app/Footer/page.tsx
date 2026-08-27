import Link from "next/link";
import styles from "./page.module.css"
export default function Footer(){
    return(
        <footer className={styles.footer}>
    <div className={styles.footerContent}>

        <div className={styles.footerLogo}>
            LISA
        </div>

        <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/photos">Photos</Link>
        </div>

        <div className={styles.socialLinks}>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">X</a>
        </div>

    </div>

    <div className={styles.footerBottom}>
        <p>© 2026 Lisa Manoban Fan Website. All rights reserved.</p>
    </div>
</footer>
    )
}
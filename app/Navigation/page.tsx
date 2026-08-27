import Link from "next/link";
import styles from "./page.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link className={styles.al} href={"/"}>Home</Link>
            <Link className={styles.al} href={"/Photos"}>Photos</Link>
            <Link className={styles.al} href={"/Songs"}>Songs</Link>
        </nav>
    ) 
}
import styles from "./page.module.css"
import bio from "../../data/bio.json"

export default function Body(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                    <h1>Lisa Manoban App</h1>
            </div>
            <img className={styles.ima} src="images/ls1.jpeg"/>
            <p className={styles.tx}>{bio.biography}</p>
        </div>
    );
}
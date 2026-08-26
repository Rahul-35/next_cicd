import photos from "../../data/photo.json"
import styles from "./page.module.css"

export default async function Photos(){
    await new Promise(resolve => setTimeout(resolve, 2000));
    return(
        <div>
            <h2 className={styles.hed}>Photos of Lisa</h2>
        <div className={styles.gridcon}>
            {Object.values(photos).map((imgs,index)=>(
                <img className={styles.ims} key={index} src={imgs}/>
            ))}
        </div>
        </div>
    )
}
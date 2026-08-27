"use client";
import styles from "./page.module.css";

import { useEffect, useState } from "react";

interface ISongs {
    artistName: string;
    collectionName: string;
    trackName: string;
    artworkUrl100: string;
    previewUrl: string;
    releaseDate: string;
}

export default function Songs() {

    const [songs, setSongs] = useState<ISongs[]>([]);

    useEffect(() => {

        const params = new URLSearchParams({
            term: "lisa manoban",
            entity: "song"
        });

        fetch(`https://itunes.apple.com/search?${params}`)
            .then(response => response.json())
            .then(data => {
                setSongs(data.results);
            })
            .catch(error => {
                console.error("Error fetching songs:", error);
            });

    }, []);

    return (
        <div className={styles.gridcontainer}>
            {songs.map((dt) => (
                <div  key={dt.previewUrl}>
                    <img
                    className={styles.ims}
                        src={dt.artworkUrl100.replace("100x100", "1000x1000")}
                        alt={dt.trackName}
                    />
                    <h2 className={styles.songname}>
                        {dt.trackName} (Collection: {dt.collectionName})
                    </h2>
                    <p>{dt.artistName}</p>
                </div>
            ))}
        </div>
    );
}
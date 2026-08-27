"use client";

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
        <div>
            {songs.map((dt) => (
                <div key={dt.previewUrl}>
                    <h2>
                        {dt.trackName} (Collection: {dt.collectionName})
                    </h2>

                    <img
                        src={dt.artworkUrl100}
                        alt={dt.trackName}
                    />

                    <p>{dt.artistName}</p>
                </div>
            ))}
        </div>
    );
}
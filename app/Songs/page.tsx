

interface ISongs{
    artistName:string;
    collectionName:string;
    trackName:string;
    artworkUrl100:string;
    previewUrl:string;
    releaseDate:string;
}

export default async function Songs(){

    const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/songs`);
    const data=await response.json();

    return(
        <div>
            {data.results.map((dt:ISongs)=>{
                return (
                    <div key={dt.previewUrl}>
                        <h2>{dt.trackName} (Collection: {dt.collectionName})</h2>
                        <img src={dt.artworkUrl100}/>
                        <p>{dt.artistName}</p>
                    </div>

                )
            })}
        </div>
    )

}
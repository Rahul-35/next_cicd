export const dynamic = "force-dynamic";


interface ISongs{
    artistName:string;
    collectionName:string;
    trackName:string;
    artworkUrl100:string;
    previewUrl:string;
    releaseDate:string;
}

export default async function Songs(){

    const baseUrl=process.env.NEXT_PUBLIC_BASE_URL || 'https://lis-nextjs-bp-dfhyhkc2cxebfjbt.centralindia-01.azurewebsites.net'
    const response=await fetch(`${baseUrl}/api/songs`);
    const data=await response.json();

    return(
        <div>
            {data.results.map((dt:ISongs)=>{
                return (
                    <div key={dt.previewUrl}>
                        <h2>{dt.trackName} (Collection: {dt.collectionName})</h2>
                        <img src={dt.artworkUrl100} alt="song title"/>
                        <p>{dt.artistName}</p>
                    </div>

                )
            })}
        </div>
    )

}
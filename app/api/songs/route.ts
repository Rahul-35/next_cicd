

export async function GET() {
    
    const params = new URLSearchParams({
    term: "lisa manoban",
    entity: "song"
});

const response = await fetch(
    `https://itunes.apple.com/search?${params}`
);

const data= await response.json();
return Response.json(data); 
}
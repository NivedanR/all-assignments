const artists=[
    { title: "Song 1", artist: "Artist A" },
    { title: "Song 2", artist: "Artist B" },
    { title: "Song 3", artist: "Artist C" }
];

let count=0;

for(let a of artists){
    count=count+1;
    console.log(`${count} ${a.title} by ${a.artist}`);
}
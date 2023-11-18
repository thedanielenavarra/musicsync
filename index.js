songs=[{
    "file": "songs/black_dog.mp3",
    "shift": 2.4,
    "beat": 0.37267
}, {
    "file": "songs/surfin_usa.mp3",
    "shift": 4,
    "beat": 1.5094
},
{
    "file": "songs/obladi_oblada.mp3",
    "shift": 2.4,
    "beat": 2.1239
}
]

function playsong(song) {
    console.log("Playing: " + song);
    $("#player").attr("src", "songs/" + song + ".mp3");
    $("#player")[0].play();
    metadata=songs.filter(function(s) {return s.file == "songs/"+song+".mp3"})[0];
    $(".graphic p").text(song);
    setInterval(function() {
        R=Math.floor(Math.random()*255);
        G=Math.floor(Math.random()*255);
        B=Math.floor(Math.random()*255);
        RGB=R+","+G+","+B;
        $(".graphic").css("background-color", "rgb("+RGB+")");
    }, metadata.beat * 1000);
    let WIDTH=false;
    let HEIGHT=false;
    setInterval(function() {
        if (WIDTH) {
            //$(".graphic").css("width", "100%");
            $(".graphic p").css("font-style", "bold")
            WIDTH=false;
        } else {
            //$(".graphic").css("width", "30%");
            $(".graphic p").css("font-style", "italic")
            WIDTH=true;
        }
        //Math.floor(Math.random()*100)+"%");
        console.log("beat")
    }, metadata.beat * 1000);
    setTimeout(function() {
        setInterval(function() {
            if (HEIGHT) {
                //$(".graphic").css("height", "30%");
                $(".graphic p").css("font-size", "20px")
                HEIGHT=false;
            } else {
                //$(".graphic").css("height", "100%");
                $(".graphic p").css("font-size", "30px")
                HEIGHT=true;
            }
            //Math.floor(Math.random()*100)+"%");
        }, metadata.beat * 250/4);
    }, metadata.beat * 500);
}
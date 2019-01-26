/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var song = ["Jealous", "All The Stars", "Love Myself", "Dance For You"];
var artist = ["Nick Jonas", "Kendrick Lamar", "Hailee Steinfeld", "Beyonce"];
var songLength = ["3:43", "3:52", "3:37", "6:16"];
var image = ["https://m.media-amazon.com/images/I/81BMf0uKGvL._SS500_.jpg", 
            "https://i.ytimg.com/vi/yvOh7vVqlaE/maxresdefault.jpg",
            "https://i.pinimg.com/736x/1b/f1/d4/1bf1d4bbec9c66034b74d2d1e986714a--hailee-steinfeld-love-myself-love-yourself.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWJiYjI3YmMtMzEyNy00M2E0LTk1ZGUtMmEwMDkzMmQxZGE3XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"];
var songLink = ["https://www.youtube.com/watch?v=yw04QD1LaB0",
                "https://www.youtube.com/watch?v=GfCqMv--ncA",
                "https://www.youtube.com/watch?v=bMpFmHSgC4Q", 
                "https://www.youtube.com/watch?v=PGc9n6BiWXA"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above


 
function emptySongInfo(){
    $("#songs").empty();
    $("#artist").empty();
    $("#length").empty();
    $("#image").empty();
    $("#link").empty();
}
    
    // Use jQuery to empty all of the remaining divs

function displaySongInfo(){
    for(var i = 0; i<image.length; i++){

        $("#images").append("<img src='" + image[i] + "'>");   
    }
    
    for(var i = 0; i<song.length; i++){
        $("#songs").append("<li class= 'song'>" + song[i] + "</li>");
    }
    for(var i = 0; i<artist.length; i++){
        $("#artists").append("<li class= 'artist'> By~ " + artist[i] + "</li>"); 
    }
    for(var i = 0; i<length.length; i++){
        $("#lengths").append("<li class= 'length'>" + length + "</li>"); 
    }
    for(var i = 0; i<link.length; i++){
        $("#links").append("<li class= 'link'> <a href='" + link + "'> Play Song~ </a> </li>"); 
    }

}

$("#add").click(function() {
        var songs = $('#song').val();
        var artists = $('#artist').val();
        var songlengths = $('#length').val();
        var images =  $('#image').val();
        var songLinks =  $('#link').val();

        song.push(songs);
        artist.push(artists);
        length.push(songLengths);
        image.push(images);
        link.push(songLinks);

    displaySongInfo();
    emptySongInfo();

});

displaySongInfo();
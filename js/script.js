/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [];
var artist = [];
var songLength = [];
var image = [];
var songLink = [];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above


 
function emptySongInfo(){
    $("#songs").empty();
    $("#artist").empty();
    $("#length").empty();
    $("#image").empty();
    $("#link").empty();

    
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $('#add').click(function() {
        var songs = $('#song').val();
        var artists = $('#artist').val();
        var songlengths = $('#length').val();
        var images =  $('#image').val();
        var songLinks =  $('#link').val();

        song.push(songs);
        artist.push(artists);
        length.push(songlength);
        songlengths.push(length);
        images.push(image);
        songLinks.push(link);

        console.log(song);
        console.log(artist);
        console.log(length);
        console.log(songlengths);
        console.log(images);
        console.log(songLinks);

    for (var i = 0; i < song.length; i++){
        $("#song").append("<li>" + song[i] + "</li>");
    }
    for (var i = 0; i < artist.length; i++){
        $("#artist").append("<li>" + artist[i] + "</li>");
    }
    for (var i = 0; i < length.length; i++){
        $("#length").append("<li>" + length[i] + "</li>");
    }
// $("#add").click(function() {
//     emptySongInfo();
//     addSongInfo();
//     displaySongInfo();
// });

// displaySongInfo();
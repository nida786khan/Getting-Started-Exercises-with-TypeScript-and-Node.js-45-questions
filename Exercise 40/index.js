"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title, tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example function calls
const album1 = make_album('Vitel Signs', 'Hum Tum');
const album2 = make_album('Artist 2', 'Album 2', 12);
const album3 = make_album('Artist 3', 'Album 3', 8);
console.log(album1);
console.log(album2);
console.log(album3);

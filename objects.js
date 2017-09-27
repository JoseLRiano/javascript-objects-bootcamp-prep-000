var playlist ={artist: "song title"};

function updatePlaylist(playlist, artist, title){
  playlist[artist]= title;
  return playlist;
}
function removeFromPlaylist(playlist, artist){
  Delete playlist[artist];
    return playlist;
}

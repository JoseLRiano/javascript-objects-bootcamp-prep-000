var playlist ={artist: "song title"};

function updatePlaylist(playlist, artist, title){
  playlist[artist]= title;
  return playlist;
}
function removeFromPlaylist(playlist, artist){
  playlist.assign({},playlist{artist});
  return playlist;
}
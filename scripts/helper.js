class Helper {
  playPauseAndUpdate(song) {
  player.playPause(song);

const songLength = player.currentlyPlaying.duration;
 $('#time-control .total-time').text( songLength );
}};

const helper = new Helper();

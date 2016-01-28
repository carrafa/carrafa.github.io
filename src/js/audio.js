console.log('audio scripts');
//
// var om = $('#om');
// var poc = $('#poc');
// var nexf = $('#nexf');
//
// var songs = {
//   om: {
//     songUrl: '/audio/compact.mp3',
//     songName: 'compact stares',
//     bandName: 'old monk',
//     albumName: 'unreleased'
//   },
//   poc: {
//     songUrl: '/audio/compton.mp3',
//     songName: 'compton crackdown',
//     bandName: 'plates of cake',
//     albumName: 'becoming double'
//   },
//   nexf: {
//     songUrl: '/audio/aloha.mp3',
//     songName: 'aloha empire',
//     bandName: 'new england axe factory',
//     albumName: 'bx swift'
//   }
// };
//
// var song = false;
//
// $(function() {
//   addSongHandler(om, songs.om.songUrl);
//   addSongHandler(poc, songs.poc.songUrl);
//   addSongHandler(nexf, songs.nexf.songUrl);
// });
//
//
//
// function newHowl(url) {
//   var howl = new Howl({
//     urls: [url],
//     autoplay: false,
//     buffer: true
//   });
//   return howl;
// }
//
// function addSongToPlayer(url) {
//   var $playButton = $('<i>').addClass('fa fa-play play-pause');
//   song = newHowl(url);
//   addSongToControls($playButton, song);
//   $('.audio-container').append($playButton);
//
// }
//
// function addSongToControls(el, howl) {
//   el.on('click', function(e) {
//     e.preventDefault();
//     console.log('wat');
//     if (howl.paused === false) {
//       console.log('no');
//     } else {
//       howl.play();
//       console.log('play');
//     }
//   });
//   $('.play-pause').on('click', function() {
//     howl.pause();
//   });
//   $('.stop').on('click', function() {
//     howl.stop();
//   });
// }
//
// function addSongHandler(el, newSong) {
//   el.on('click', function(e) {
//     e.preventDefault();
//     if (song) {
//       song.stop();
//     }
//     $('.audio-container').empty();
//     addSongToPlayer(newSong);
//   });
// }

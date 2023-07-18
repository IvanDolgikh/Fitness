const video = document.querySelector('.gym__video');
const button = document.querySelector('.gym__button');

button.addEventListener('click', () => {

});

function onPlayVideo() {
  if (video.paused) {
    video.play();
    button.style.display = 'none';
  } else {
    video.pause();
  }
}

function onPauseVideo() {
  video.pause();
  button.style.display = 'block';
}

button.addEventListener('click', onPlayVideo);

video.addEventListener('click', onPauseVideo);

// Musik
const track = document.getElementById("track");
const button = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    button.className = "bi-pause-fill";
  } else {
    track.pause();
    button.className = "bi-play-fill";
  }
}
// Button Music
button.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  button.className = "bi-play-fill";
});
// Gallery glightbox
const lightbox = GLightbox({
  closeOnOutsideClick: false,
  loop: true,
});

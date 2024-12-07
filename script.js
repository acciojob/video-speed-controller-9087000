const video = document.querySelector('.viewer');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

const minSpeed = 0.5;
const maxSpeed = 4;

function handleSpeedChange(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const playbackRate = percent * (maxSpeed - minSpeed) + minSpeed;
  video.playbackRate = playbackRate;
  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = `${playbackRate.toFixed(2)}×`;
}

// Event listener for mouse movements on the speed bar
speed.addEventListener('mousemove', handleSpeedChange);
speed.addEventListener('click', handleSpeedChange);
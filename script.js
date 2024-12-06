// Get elements
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSpeedSlider = document.querySelector('input[name="playbackSpeed"]');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

// Functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleVolumeChange() {
    video.volume = volumeSlider.value;
}

function handlePlaybackSpeedChange() {
    video.playbackRate = playbackSpeedSlider.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function rewind() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 25;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', handleVolumeChange);
playbackSpeedSlider.addEventListener('input', handlePlaybackSpeedChange);

progress.addEventListener('click', scrub);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);
// Fetch the elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



// //Create the functions
// function togglePlay() {
//     //only a paused property and no 'playing' --> there's also .play() && .pause()
//     if(video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }

// }

function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//short term
// function togglePlay() {
//     const method = video.paused ? 'play' : 'pause';
//     video[method]();
// }

function updatePlayButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
    // console.log('Update the button')
}



function skip() {
    // console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip);
    // console.log(video.currentTime/60 + "/" + video.duration/60)
}

function handleRangeUpdate() {
    //checking what we need to update
    // console.log(this.name)

    video[this.name] = this.value
    // console.log(this.value)
}

//progress bar 
//when you click on the pause or play, the pause bar should be at that time
function handleProgress() {
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

//scrub --> progress bar
// we will listen to for a click on the progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
    //console.log(e)
}

//hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updatePlayButton)
video.addEventListener('pause', updatePlayButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
//if mouse is down then it will mvoe on to check if they are scrubbing
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))

progress.addEventListener('mousedown', mousedown=true)
progress.addEventListener('mouseup', mousedown=false)


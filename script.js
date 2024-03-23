document.addEventListener("DOMContentLoaded", function() {
    var bgAudio = document.getElementById("bgAudio");
    bgAudio.volume = 0.5; // Adjust the volume (0.0 to 1.0)

    var playPauseButton = document.getElementById("playPauseButton");
    
    // Function to toggle play/pause and update icon
    function togglePlay() {
        if (bgAudio.paused) {
            bgAudio.play();
            playPauseButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            bgAudio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    }

    // Event listener to toggle play/pause and update icon
    playPauseButton.addEventListener("click", togglePlay);

    // Show the play/pause status
    bgAudio.addEventListener("play", function() {
        console.log("Audio is playing");
        playPauseButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    });

    bgAudio.addEventListener("pause", function() {
        console.log("Audio is paused");
        playPauseButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });
});

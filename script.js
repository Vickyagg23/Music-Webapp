let audioPlayer = document.getElementById("audioPlayer");
        let songListDiv = document.getElementById("songList");
        let songs = [];
        let currentIndex = -1;

        function addSongs() {
            const input = document.getElementById("songInput");
            const files = Array.from(input.files);

            files.forEach((file) => {
                songs.push(file);

                // Add song to the playlist UI
                const songElement = document.createElement("div");
                songElement.classList.add("song");
                songElement.innerText = file.name;
                songElement.onclick = () => playSelectedSong(file);
                songListDiv.appendChild(songElement);
            });
        }

        function playSelectedSong(file) {
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
            audioPlayer.play();
            currentIndex = songs.indexOf(file);
        }

        function playSong() {
            if (audioPlayer.src) {
                audioPlayer.play();
            } else if (songs.length > 0) {
                currentIndex = 0;
                playSelectedSong(songs[currentIndex]);
            }
        }

        function pauseSong() {
            audioPlayer.pause();
        }

        function stopSong() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }

function youtubeVideoPopup() {

    const videoPlayButtons = document.querySelectorAll('.v-play-btn');

    function videoOpen() {
        const popupContainer = document.getElementById(this.getAttribute('data-video-id'));
        // open popup
        popupContainer.classList.add('active');
        document.body.classList.add('y-hidden');
        const target = popupContainer.querySelector('input');
        //ini youtube player
        const player = initailizeYoutubePlayer(target);
        // enable close btn
        popupContainer.querySelector('.cls-btn').addEventListener('click', videoClose.bind({popupContainer, player}));
    }

    function initailizeYoutubePlayer(target) {
        let width = 1140;
        let height = 641;
    
        if (window.innerWidth < 1200) {
          width = 768;
          height = 432;
        }
        if (window.innerWidth < 800) {
          width = 365;
          height = 205;
        }
    
        let player = new YT.Player(target, {
          height: height + "",
          width: width + "",
          videoId: target.value,
          playerVars: {
            playsinline: 1,
            autoplay: 1,
          },
        });
    
        return player;
      }

    function videoClose() {
        this.popupContainer.classList.remove('active')
        document.body.classList.remove('y-hidden')
        this.player.stopVideo()
    }

    // add event listeners to buttons
    for(let i = 0; i < videoPlayButtons.length; i++){
        videoPlayButtons[i].addEventListener('click', videoOpen);
    }

}

youtubeVideoPopup();
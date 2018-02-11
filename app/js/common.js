// Popup video
$('.video-link').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function() {
        this.content.children('video')[0].play();
      },
      close: function() {
        this.content.children('video')[0].pause();
      }
    }
});
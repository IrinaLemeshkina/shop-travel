const videoButton = document.querySelector('[data-id="btn-video"]');
const video = document.querySelector('[data-title="hero-video"]');

const showVideo = () => {
  if (videoButton && video) {
    videoButton.addEventListener('click', function () {
      if (video.classList.contains('ready')) {
        return;
      }
      video.classList.add('ready');
      video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="Видео из тренажерного зала" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      videoButton.style.display = 'none';
    });
  }
};

export {showVideo};

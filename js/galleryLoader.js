const galleryElement = document.getElementById('gallery');

imageList.forEach(name => {
  const img = document.createElement('img');
  img.src = `images/${name}`;
  img.alt = name;
  img.classList.add('gallery-image');

  img.addEventListener('click', () => {
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
      img.msRequestFullscreen();
    }
  });

  galleryElement.appendChild(img);
});

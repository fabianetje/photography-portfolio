// js/bestPhotos.js
import { bestImageList } from './bestImageList.js';

const gridContainer = document.getElementById("best-photo-grid");

bestImageList.forEach(filename => {
  const img = document.createElement("img");
  img.src = `homePaginaFotos/${filename}`;
  img.alt = filename;
  img.classList.add("gallery-image");
  gridContainer.appendChild(img);
});

// generateHomePhotoList.js
const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "homePaginaFotos");
const outputFile = path.join(__dirname, "index.html");

// Lees alle afbeeldingsbestanden
const images = fs.readdirSync(imageDir).filter(file =>
  /\.(jpg|jpeg|png|gif)$/i.test(file)
);

// Genereer HTML-blok met <img> tags met juiste class
const imageHtml = images.map(file => {
  return `<img src="homePaginaFotos/${file}" alt="${file}" class="best-photo">`;
}).join("\n        ");

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fabian's Photography Portfolio</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <a href="index.html" class="home-photo-link">
      <img src="homefoto/homefoto.jpg" alt="Home" class="home-photo" />
    </a>
    <h1>Fabian's Photography Portfolio</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="gallery.html">Gallery</a>
      <a href="about.html">About</a>
    </nav>
  </header>

  <main>
    <section class="intro">
      <h2>Welkom!</h2>
      <p>Ik ben Fabian, een gepassioneerd fotograaf. Hieronder zie je een selectie van mijn favoriete foto's.</p>
    </section>

    <section class="best-photos">
      <h3>Mijn Beste Foto’s</h3>
      <div class="best-photo-grid">
        ${imageHtml}
      </div>
    </section>
  </main>
</body>
</html>
`;

fs.writeFileSync(outputFile, html);
console.log("✅ index.html gegenereerd met foto's uit homePaginaFotos.");

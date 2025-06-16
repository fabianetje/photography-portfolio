// generateImageList.js
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'images');
const outputFile = path.join(__dirname, 'js', 'imageList.js');

const files = fs.readdirSync(imageDir);
const imageList = files.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledList = shuffle(imageList);

const content = `const imageList = ${JSON.stringify(shuffledList, null, 2)};`;

fs.writeFileSync(outputFile, content);
console.log('✅ Bestand js/imageList.js succesvol aangemaakt!');

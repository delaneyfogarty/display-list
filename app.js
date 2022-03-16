import { candies } from './candy-data.js';
import { renderCandy } from './render-candy.js';
import { gemstones } from './gemstone-data.js';
import { renderGemstones } from './render-gemstones.js';
import { bigThree } from './zodiac-data.js';
import { renderBigThree } from './render-bigthree.js';
import { mySisters } from './sister-data.js';
import { renderSisters } from './render-sisters.js';



const candyListEl = document.querySelector('.candy-list');
for (let i of candies) {
  const candyEl = renderCandy(i);

  candyListEl.append(candyEl);
}

const gemstonesListEl = document.querySelector('.gemstone-list');
for (let i of gemstones) {
  const gemstonesEl = renderGemstones(i);

  gemstonesListEl.append(gemstonesEl);
}

const bigThreeListEl = document.querySelector('.bigthree-list');
for (let i of bigThree) {
  const zodiacEl = renderBigThree(i);

  bigThreeListEl.append(zodiacEl);
}

const sistersListEl = document.querySelector('.sister-list');
for (let i of mySisters) {
  const sistersEl = renderSisters(i);

  sistersListEl.append(sistersEl);
}




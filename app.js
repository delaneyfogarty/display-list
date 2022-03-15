import { candies } from './candy-data.js';
import { renderCandy } from './render-candy.js';
import { gemstones } from './gemstone-data.js';
import { renderGemstones } from './render-gemstones.js';



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


import { candies } from './candy-data.js';
import { renderCandy } from './render-candy.js';

const candyListEl = document.querySelector('.candy-list');
for (let i of candies) {
  const candyEl = renderCandy(i);

  candyListEl.append(candyEl);
}
export function renderCandy(candyData) {
	const candyEl = document.createElement('div');
	const nameEl = document.createElement('h3');
	const imgEl = document.createElement('img');
	candyEl.classList.add('candy');
	imgEl.src = `assets/${candyData}.jpg`;
	candyEl.textContent = candyData;

	candyEl.append(nameEl, imgEl);
	return candyEl;
};
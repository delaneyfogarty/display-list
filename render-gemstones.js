export function renderGemstones(gemstone) {
	const gemstonesEl = document.createElement('div');
	const nameEl = document.createElement('h3');
	const typeEl = document.createElement('p');
	const welcomesEl = document.createElement('p');
	const imgEl = document.createElement('img');

	gemstonesEl.classList.add('gemstone');

	gemstonesEl.textContent = gemstone;
	nameEl.textContent = gemstone.name;
	typeEl.textContent = gemstone.type;
	welcomesEl.textContent = gemstone.welcomes;
	imgEl.src = `assets/${gemstone}.jpg`;

	gemstonesEl.append(nameEl, typeEl, welcomesEl, imgEl);
	return gemstonesEl;
}
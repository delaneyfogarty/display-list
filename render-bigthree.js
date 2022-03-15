export function renderBigThree(zodiacData) {
	const bigThreeEl = document.createElement('div');
	const signEl = document.createElement('h3');
	const planetEl = document.createElement('p');
	const placementEl = document.createElement('p');
	const attributesListEl = document.createElement('ul')
	const imgEl = document.createElement('img');

	bigThreeEl.classList.add('zodiac');

	signEl.textContent = `Sign: ${zodiacData.sign}`;
	planetEl.textContent = `Planet: ${zodiacData.planet}`;
	placementEl.textContent = `Placement: ${zodiacData.planet}`;
	imgEl.src = `assets/${zodiacData.name}.jpg`;

	for (let i of zodiacData.attributes) {

		const attributeEl = document.createElement('li');
		attributeEl.textContent = i;

		attributesListEl.append(attributeEl);

		bigThreeEl.append(signEl, planetEl, placementEl, imgEl, attributesListEl)

		return bigThreeEl;
	} 
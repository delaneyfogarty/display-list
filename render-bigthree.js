export function renderBigThree(zodiacData) {
	const bigThreeEl = document.createElement('div');
	const signEl = document.createElement('h3');
	const planetEl = document.createElement('p');
	const placementEl = document.createElement('p');
	const attributesListEl = document.createElement('ul');
	const imgEl = document.createElement('img');

	bigThreeEl.classList.add('.bigThree');

	signEl.textContent = `Sign: ${zodiacData.Sign}`;
	planetEl.textContent = `Planet: ${zodiacData.Planet}`;
	placementEl.textContent = `Placement: ${zodiacData.Placement}`;
	attributesListEl.textContent = `Attributes:`;
	imgEl.src = `assets/${zodiacData.Sign}.jpg`;

	for (let i of zodiacData.Attributes) {

		const attributeEl = document.createElement('li');
		attributeEl.textContent = i;


		attributesListEl.append(attributeEl);
	}

	bigThreeEl.append(signEl, planetEl, placementEl, imgEl, attributesListEl);

	return bigThreeEl;
}

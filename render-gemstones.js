export function renderGemstones(gemstone) {
  const gemstonesEl = document.createElement('div');
  const nameEl = document.createElement('h3');
  const typeEl = document.createElement('p');
  const welcomesEl = document.createElement('p');
  const imgEl = document.createElement('img');

  gemstonesEl.classList.add('gemstone');


  nameEl.textContent = `Name: ${gemstone.name}`;
  typeEl.textContent = `Type: ${gemstone.type}`;
  welcomesEl.textContent = `Welcomes: ${gemstone.welcomes}`;
  imgEl.src = `assets/${gemstone.name}.jpg`;

  gemstonesEl.append(nameEl, typeEl, welcomesEl, imgEl);
  return gemstonesEl;
}
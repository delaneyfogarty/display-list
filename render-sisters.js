export function renderSisters(sisterData) {
  const sistersEl = document.createElement('div');
  const nameEl = document.createElement('h3');
  const ageEl = document.createElement('p');
  const birthdayEl = document.createElement('p');
  const imgEl = document.createElement('img');

  sistersEl.classList.add('.sisters');

  nameEl.textContent = `Name: ${sisterData.Name}`;
  ageEl.textContent = `Age: ${sisterData.Age}`;
  birthdayEl.textContent = `${sisterData.Birthday.Zodiac} born on ${sisterData.Birthday.Date}`;
  imgEl.src = `assets/${sisterData.Name}.jpg`;

  sistersEl.append(nameEl, ageEl, birthdayEl, imgEl);
  return sistersEl;
}
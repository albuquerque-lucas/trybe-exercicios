const body = document.querySelector('#body');
const title = document.createElement('h1');
const main = document.createElement('main');
const sectionCenter = document.createElement('section');

body.appendChild(title);
body.appendChild(main);
main.appendChild(sectionCenter);

title.innerText = "TrybeTrip - Agência de Viagens";
main.classList.add('main-content');
sectionCenter.classList.add('center-content');
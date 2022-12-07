let text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate amet illo animi reiciendis voluptates maiores soluta excepturi, neque adipisci delectus repudiandae consequuntur repellat autem ex, vitae consectetur officiis enim.';

const body = document.querySelector('#body');
const title = document.createElement('h1');
const main = document.createElement('main');
const sectionCenter = document.createElement('section');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');
const centerParagraph = document.createElement('p');

body.appendChild(title);
body.appendChild(main);
main.appendChild(sectionCenter);
main.appendChild(sectionLeft);
main.appendChild(sectionRight);
sectionCenter.appendChild(centerParagraph);

title.innerText = "TrybeTrip - Agência de Viagens";
main.classList.add('main-content');
sectionCenter.classList.add('center-content');
sectionLeft.classList.add('left-content');
sectionRight.classList.add('right-content');
centerParagraph.innerText = text1;
const createItems = (length, element, father) => {

    const object = {

        1:'Um',
        2:'Dois',
        3:'Três',
        4:'Quatro',
        5:'Cinco',
        6:'Seis',
        7:'Sete',
        8:'Oito',
        9:'Nove',
        10:'Dez',
    }

    for(let i = 0; i < length; i += 1){

        if(element == 'li'){
            
        }

        let item = document.createElement(element);
        father.appendChild(item);
        item.classList.add('list-item');
        item.innerText = object[i + 1];
        
    }

}

let text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate amet illo animi reiciendis voluptates maiores soluta excepturi, neque adipisci delectus repudiandae consequuntur repellat autem ex, vitae consectetur officiis enim.';



const body = document.querySelector('#body');

const title = document.createElement('h1');
const main = document.createElement('main');
const sectionCenter = document.createElement('section');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');
const centerParagraph = document.createElement('p');
const image = document.createElement('img');
const ul = document.createElement('ul');


image.setAttribute('src', 'https://picsum.photos/200')

body.appendChild(title);
body.appendChild(main);
main.appendChild(sectionCenter);
sectionCenter.appendChild(centerParagraph);
main.appendChild(sectionLeft);
main.appendChild(sectionRight);

sectionLeft.appendChild(image);
sectionRight.appendChild(ul);

title.innerText = "TrybeTrip - Agência de Viagens";
main.classList.add('main-content');
sectionCenter.classList.add('center-content');
sectionLeft.classList.add('left-content');
sectionRight.classList.add('right-content');
image.classList.add('small-image');
centerParagraph.innerText = text1;

createItems(10, 'li', sectionRight);
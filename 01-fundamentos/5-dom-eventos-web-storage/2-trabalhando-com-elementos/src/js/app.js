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


const createItems = (length, element, father, itemClass, content) => {



    for(let i = 0; i < length; i += 1){

        if(element == 'li'){
            let item = document.createElement(element);
            father.appendChild(item);
            item.classList.add(itemClass);
            item.innerText = content[i + 1];
        } else if(element == 'h3'){
            let item = document.createElement(element);
            father.appendChild(item);
            item.classList.add(itemClass);
            item.innerText = content;
        }


        
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
createItems(3, 'h3', main, 'secondary-title', 'subtitulo');

body.appendChild(title);
body.appendChild(main);
main.appendChild(sectionCenter);
main.appendChild(sectionLeft);
main.appendChild(sectionRight);
sectionCenter.appendChild(centerParagraph);
sectionLeft.appendChild(image);
sectionRight.appendChild(ul);

title.innerText = "TrybeTrip - Agência de Viagens";
main.classList.add('main-content');
sectionCenter.classList.add('center-content');
sectionLeft.classList.add('left-content');
sectionRight.classList.add('right-content');
image.classList.add('small-image');
centerParagraph.innerText = text1;

title.classList.add('title');


createItems(10, 'li', sectionRight, 'item-list', object);

let secondaryTitle = document.querySelectorAll('.secondary-title');
secondaryTitle.forEach(element => {
    element.classList.add('description');
});

main.removeChild(sectionLeft);
sectionRight.style.marginRight = 'auto';
sectionCenter.style.backgroundColor = 'green';

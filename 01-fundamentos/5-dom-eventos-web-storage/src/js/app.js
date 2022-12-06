const changeText = (tagId, text) => {

    const paragraph = document.querySelector(`#${tagId}`);

    paragraph.innerText = text;

}

const changeBackgroundColor = (tagClass, color) => {

    let tag = document.querySelector(`.${tagClass}`);
    
    tag.style.backgroundColor = color;

}

const changeTagText = (tagName, text) => {

    let tag = document.querySelector(`.${tagName}`);
    tag.innerText = text;

}

const toUpperCase = id => {
    let element = document.querySelector(id);
    element.style.textTransform = 'uppercase';
}

const logAllItems = tagClass => {

    const item = document.querySelectorAll(tagClass);

    item.forEach(element => {
        console.log(element.innerText);
    });

}

let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium quos culpa voluptatibus quo! Numquam similique vel fugit nihil mollitia dolorum adipisci praesentium ea, excepturi iusto voluptatum, hic quidem aperiam?';

changeText('description-foward', text);
changeBackgroundColor('main-content', 'rgb(76,164,109)');
changeBackgroundColor('center-content', 'rgb(255,255,255)');
changeTagText('title', 'Desafio - Javascript');
toUpperCase('#first-content');
logAllItems('.content');
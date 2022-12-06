const changeText = (tagId, text) => {

    const paragraph = document.querySelector(`#${tagId}`);

    paragraph.innerText = text;

}

const changeMainBackground = (mainClass, color) => {

    let main = document.querySelector(`.${mainClass}`);
    
    main.style.backgroundColor = color;

}

let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium quos culpa voluptatibus quo! Numquam similique vel fugit nihil mollitia dolorum adipisci praesentium ea, excepturi iusto voluptatum, hic quidem aperiam?';

changeText('description-foward', text);
changeMainBackground('main-content', 'rgb(76,164,109)');
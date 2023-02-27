const buttonss = document.querySelector('#btn');
const nameOutput = document.querySelector('#name-main');
const imgOutput = document.querySelector('#img-main');


// const url2 = 'https://www.superheroapi.com/api.php/5866574670091102/2';



buttonss.addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 100);
  const url = `https://www.superheroapi.com/api.php/5866574670091102/${randomNumber}`;
  fetch(url)
  .then((response) => response.json())
  .then((hero) => {
    console.log(hero);
    nameOutput.innerHTML = hero.name;
    imgOutput.src = hero.image.url;

  });
});
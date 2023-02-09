import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const button = document.querySelector('#password-btn');
const output = document.querySelector('#password-h2');

button.addEventListener('click', ()=> {
    const generatedPassword = nanoid();
    output.innerHTML = generatedPassword;
});

output.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});
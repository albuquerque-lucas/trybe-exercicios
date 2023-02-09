import "../css/style.css";
import validator from 'validator';

const validationsArray = ['email', 'url', 'id', 'cpf', 'telefone'];
const text = document.querySelector('#textarea');
const selectList = document.querySelector('#options-list');
const validationBtn = document.querySelector('#validation-btn');
const validationOutput = document.querySelector('#output-text');

validationsArray.forEach((item) => {
  const option = document.createElement('option');
  option.value = item;
  option.innerHTML = item;
  option.classList.add('option');
  selectList.appendChild(option);
  console.log(item);
});

validationBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const capturedText = text.value;
  const vldSelected = selectList.value;
  const vldData = selectValidation(vldSelected, capturedText);
  validationOutput.innerHTML = `Foi requisitada uma validação de ${vldSelected} para ${capturedText} e o resultado é ${vldData}`;
});


function selectValidation(validationType, text) {
  let result;
  switch(validationType){
    case 'email':
      result = validator.isEmail(text);
      break;
    case 'cpf':
      const vldNumeric = validator.isNumeric(text);
      const vldLength = validator.isLength(text, {min: 14, max: 14});
      vldNumeric === true && vldLength === true ? result = true : result = false;
      break;
    case 'id':
      result = validator.isIdentityCard(text);
      break;
    case 'telefone':
      result = validator.isMobilePhone(text);
      break;
    case 'url':
      result = validator.isURL(text);
    default:
      result = 'Não foi possível realizar essa validação.';
      break;
  }

  return result;
}
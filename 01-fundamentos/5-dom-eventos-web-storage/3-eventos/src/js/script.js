const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

const createDaysOfTheMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holidays = [24, 25, 31];
    const fridays = [4, 11, 18, 25];
    const ulDays = document.querySelector('#days');


    for(let i = 0; i < decemberDaysList.length; i += 1){

        let li = document.createElement('li');
        li.className = 'days';

        for(let holidayIndex = 0; holidayIndex < holidays.length; holidayIndex += 1){
            if(decemberDaysList[i] == holidays[holidayIndex]){
                li.classList.add('holiday');
            }
        }

        for(let j = 0; j < fridays.length; j += 1){
            if(decemberDaysList[i] == fridays[j]){
                li.classList.add('friday');
            }
        }

        li.innerText = decemberDaysList[i];
        ulDays.appendChild(li);

    }



}

const createButton = (item, itemId, fatherItem, content) => {

    const element = document.createElement(item);
    const fatherElement = document.querySelector(fatherItem);
    fatherElement.appendChild(element);
    element.setAttribute('id', itemId);
    element.innerText = content;
}

const changeBackgroundColor = (element, currentEvent, elementTarget) => {

    const item = document.querySelector(element);
    const target = document.getElementsByClassName(elementTarget);


    item.addEventListener(currentEvent, event => {
        event.preventDefault();
        for(let i = 0; i < target.length; i += 1){
            target[i].classList.toggle('clicked');
        }

    })
}

const changeFridaysContent = () => {

    const button = document.querySelector('#btn-friday');
    const fridays = document.querySelectorAll('.friday');

    console.log(button);

    button.addEventListener('click', event =>{
        event.preventDefault();

        fridays.forEach(element => {
            let clicked = false;

            if(clicked == false){
                element.innerText = 'Sextou!!!';
                clicked = true;
            } else if(clicked == true){
                element.innerText = 'Dia';
                clicked = false;
            }


        })

    });

}





createDaysOfTheWeek();
createDaysOfTheMonth();
createButton('button', 'btn-holiday', '.buttons-container', 'Feriados');
createButton('button', 'btn-friday', '.buttons-container', 'Sexta-feira');
changeBackgroundColor('#btn-holiday', 'click', 'holiday');
changeFridaysContent();
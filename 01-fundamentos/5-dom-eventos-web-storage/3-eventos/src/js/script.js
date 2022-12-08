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
    const fridays = [3, 11, 18, 25];
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

createDaysOfTheWeek();
createDaysOfTheMonth();

// Escreva seu código abaixo.
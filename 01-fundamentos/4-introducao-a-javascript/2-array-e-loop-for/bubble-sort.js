let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



function retornaArrayMultiplicado(array)
{

    let newNumbers = [];

    for(let i = 0; i < array.length; i+=1 ){

        
        if(array[i + 1] != undefined){
            newNumbers.push(array[i] *  array[i + 1]);
        } else{
            newNumbers.push(array[i] * 2);
        }
    
    }

    console.log(newNumbers);
}

retornaArrayMultiplicado(numbers);




//ORDEM DECRESCENTE
// for(let i = 1; i < numbers.length; i++){

//     for(let j = 0; j < i; j++){

//         if(numbers[i] > numbers[j]){

//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;

//         }

//     }

// }

//ORDEM CRESCENTE

// for(let i = 1; i < numbers.length; i++){

//     for(let j = 0; j < i; j++){

//         if(numbers[i] < numbers[j]){

//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;

//         }

//     }

// }

// console.log(numbers);


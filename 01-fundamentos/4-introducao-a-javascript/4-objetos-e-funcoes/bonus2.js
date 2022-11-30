function arrayOfNumbers(vector)
{

    let arrayOfEvens = [];

    for(let index = 0; index < vector.length; index += 1){


        for(let j = 0; j < vector[index].length; j+=1){
            if(vector[index][j] % 2 == 0){
                arrayOfEvens.push(vector[index][j]);
            }
        }

    }

    return arrayOfEvens;


}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));
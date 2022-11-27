function verifyPalindrome(word)
{
    const arrayWord = word.split('');
    const reversed = arrayWord.reverse();
    const joined = reversed.join('');

    let verification;

    if(word == joined){
        verification = true;
    } else{
        verification = false;
    }

    return verification;
}

function biggestIndex(array)
{

    let biggest = array[0];

    for(let i = 1; i < array.length; i += 1){

        if(array[i] > biggest){

            biggestIndex = i;
        }

    }

    return biggestIndex;

}

function smallestIndex(array)
{
    let smallest = array[0];
    let smallIndex;

    for(let i = 1; i < array.length; i += 1){

        if(array[i] < smallest){
            
            smallIndex = i;
        }

    }

    return smallIndex;
}
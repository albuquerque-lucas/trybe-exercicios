window.onload = () => {

    //const paragraphss = document.querySelectorAll('.text-paragraph');
    const paragraphs = document.getElementsByClassName('text-paragraph');

    // const attBackgroundColor = document.getElementsByClassName('att-background-color');
    // const attColor = document.getElementsByClassName('att-color');
    // const attFontSize = document.getElementsByClassName('att-font-size');
    // const attLineHeight = document.getElementsByClassName('att-line-height');
    // const attFontFamily = document.getElementsByClassName('att-font-family');

    const backgroundList = document.querySelectorAll('.att-background-list li');
    const colorList = document.querySelectorAll('.att-color-list li');
    const fontSizeList = document.querySelectorAll('.att-font-size-list li');
    const lineHeightList = document.querySelectorAll('.att-line-height-list li');
    const fontFamilyList = document.querySelectorAll('.att-font-family-list li');

    const changeBackground = (list, target) => {
        list.forEach(element => {

            element.addEventListener('click', event => {
                for(let i = 0; i < target.length; i += 1){
                    target[i].style.backgroundColor = element.innerHTML;
                }
            })
        })
    }



    changeBackground(backgroundList, paragraphs);


    
}
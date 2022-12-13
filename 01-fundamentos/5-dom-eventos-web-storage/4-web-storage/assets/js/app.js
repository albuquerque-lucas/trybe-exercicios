window.onload = () => {

    const paragraphs = document.getElementsByClassName('text-paragraph');

    const backgroundList = document.querySelectorAll('.att-background-list li');
    const colorList = document.querySelectorAll('.att-color-list li');
    const fontSizeList = document.querySelectorAll('.att-font-size-list li');
    const lineHeightList = document.querySelectorAll('.att-line-height-list li');
    const fontFamilyList = document.querySelectorAll('.att-font-family-list li');

    const changeProperty = (list, target, property) => {
        list.forEach(element => {

            element.addEventListener('click', event => {
                for(let i = 0; i < target.length; i += 1){

                    switch(property){
                        case 'backgroundColor':
                            target[i].style.backgroundColor = element.innerHTML;
                            break;
                        case 'color':
                            target[i].style.color = element.innerHTML;
                            break;
                        case 'fontSize':
                            target[i].style.fontSize = element.innerHTML;
                            break;
                        case 'lineHeight':
                            target[i].style.lineHeight = element.innerHTML;
                            break;
                        case 'fontFamily':
                            target[i].style.fontFamily = element.innerHTML;
                            break;
                    }
                    
                }
            })
        })
    }



    changeProperty(backgroundList, paragraphs, 'backgroundColor');
    changeProperty(colorList, paragraphs, 'color');
    changeProperty(fontSizeList, paragraphs, 'fontSize');
    changeProperty(lineHeightList, paragraphs, 'lineHeight');
    changeProperty(fontFamilyList, paragraphs, 'fontFamily');


    
}
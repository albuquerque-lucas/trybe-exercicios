window.onload = () => {

    const paragraphs = document.getElementsByClassName('text-paragraph');

    const mainContent = document.querySelector('#main-content');

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
                            localStorage.setItem('backgroundColor', element.innerHTML);
                            break;
                        case 'color':
                            target[i].style.color = element.innerHTML;
                            localStorage.setItem('fontColor', element.innerHTML);
                            break;
                        case 'fontSize':
                            target[i].style.fontSize = element.innerHTML;
                            localStorage.setItem('fontSize', element.innerHTML);
                            break;
                        case 'lineHeight':
                            target[i].style.lineHeight = element.innerHTML;
                            localStorage.setItem('lineHeight', element.innerHTML);
                            break;
                        case 'fontFamily':
                            target[i].style.fontFamily = element.innerHTML;
                            localStorage.setItem('fontFamily', element.innerHTML);
                            break;
                    }
                }
            })
        })
    }

    const fetchProperties = targets => {

        if(localStorage.backgroundColor !== null){
            for(let i = 0; i < targets[0].length; i+=1){
                targets[0][0].style.backgroundColor = localStorage.backgroundColor;
            }
        }

        if(localStorage.fontColor !== null){
            for(let i = 0; i < targets[0].length; i+=1){
                targets[0][0].style.color = localStorage.fontColor;
            }
        }

        if(localStorage.fontSize !== null){
            for(let i = 0; i < targets[1].length; i+=1){
                targets[1][i].style.fontSize = localStorage.fontSize;
            }
        }

        if(localStorage.lineHeight !== null){
            for(let i = 0; i < targets[1].length; i+=1){
                targets[1][i].style.lineHeight = localStorage.lineHeight;
            }
        }

        if(localStorage.fontFamily !== null){
            for(let i = 0; i < targets[1].length; i+=1){
                targets[1][i].style.fontFamily = localStorage.fontFamily;
            }
        }
    }

    changeProperty(backgroundList, [mainContent], 'backgroundColor');
    changeProperty(colorList, [mainContent], 'color');
    changeProperty(fontSizeList, paragraphs, 'fontSize');
    changeProperty(lineHeightList, paragraphs, 'lineHeight');
    changeProperty(fontFamilyList, paragraphs, 'fontFamily');
    fetchProperties([[mainContent], paragraphs]);
    
}
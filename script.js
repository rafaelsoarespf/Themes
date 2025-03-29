function alterarCor(elemento){
    
    switch(elemento){

        //background
        case "input-background-color":
            let colorBackground = document.querySelector('#input-background-color').value;   
            document.documentElement.style.setProperty('--colorBackground', colorBackground);
            break;

        //box
        case "input-box-color":
            let colorBox = document.querySelector('#input-box-color').value;   
            document.documentElement.style.setProperty('--colorBox', colorBox);
            break;

        //box2
        case "input-box2-color":
            let colorBox2 = document.querySelector('#input-box2-color').value;   
            document.documentElement.style.setProperty('--colorBox2', colorBox2);
            break;
        
        //box3
        case "input-box3-color":
            let colorBox3 = document.querySelector('#input-box3-color').value;   
            document.documentElement.style.setProperty('--colorBox3', colorBox3);
            break;

        //title
        case "input-title-color":
            let colorTitle = document.querySelector('#input-title-color').value;   
            document.documentElement.style.setProperty('--colorTitle', colorTitle);
            break;

        //subtitle
        case "input-subtitle-color":
            let colorSubtitle = document.querySelector('#input-subtitle-color').value;   
            document.documentElement.style.setProperty('--colorSubtitle', colorSubtitle);
            break;

        //text
        case "input-text-color":
            let colorText = document.querySelector('#input-text-color').value;   
            document.documentElement.style.setProperty('--colorText', colorText);
            break;

        //border
        case "input-border-color":
            let colorBorder = document.querySelector('#input-border-color').value;   
            document.documentElement.style.setProperty('--colorBorder', colorBorder);
            break;

        //Cor de estilo
        case "input-custom-color":
            let colorCustom = document.querySelector('#input-custom-color').value;   
            document.documentElement.style.setProperty('--colorCustom', colorCustom);
            break;


    }
}
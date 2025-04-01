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
            document.querySelector('#checkbox-title-color').checked = false; 
            break;

        //subtitle
        case "input-subtitle-color":
            let colorSubtitle = document.querySelector('#input-subtitle-color').value;   
            document.documentElement.style.setProperty('--colorSubtitle', colorSubtitle);
            document.querySelector('#checkbox-subtitle-color').checked = false;
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
            document.querySelector('#checkbox-border-color').checked = false;
            break;

        //Cor de estilo
        case "input-custom-color":
            let colorCustom = document.querySelector('#input-custom-color').value;   
            document.documentElement.style.setProperty('--colorCustom', colorCustom);
            break;

    }
}

function removeTheme(){
    document.documentElement.style.setProperty('--colorBackground', null || ''); 
    document.documentElement.style.setProperty('--colorBox', null || '');
    document.documentElement.style.setProperty('--colorBox2', null || '');
    document.documentElement.style.setProperty('--colorBox3', null || '');
    document.documentElement.style.setProperty('--colorTitle', null || '');
    document.documentElement.style.setProperty('--colorSubtitle', null || '');
    document.documentElement.style.setProperty('--colorText', null || '');
    document.documentElement.style.setProperty('--colorBorder', null || '');
    document.documentElement.style.setProperty('--colorCustom', null || '');
}

//
function applyColorTheme(theme){

    let $html = document.querySelector('html');

    removeTheme();

    if(theme=="light-theme"){
        $html.classList.remove('dark-theme');
        $html.classList.add('light-theme');     
    }

    if(theme=="dark-theme"){
        $html.classList.remove('light-theme');
        $html.classList.add('dark-theme');      
    }
}




//
function useCustomColor(elemento){

    switch(elemento){

        //title
        case "checkbox-title-color":
            let checkboxTitle = document.querySelector('#checkbox-title-color');
            if(checkboxTitle.checked){  
                document.documentElement.style.setProperty('--colorTitle', 'var(--colorCustom)');
            }else{
                alterarCor("input-title-color")
            }
            break;     
        
        //subtitle
        case "checkbox-subtitle-color":
            let checkboxSubtitle = document.querySelector('#checkbox-subtitle-color');
            if(checkboxSubtitle.checked){  
                document.documentElement.style.setProperty('--colorSubtitle', 'var(--colorCustom)');
            }else{
                alterarCor("input-subtitle-color")
            }
            break;    

        //title
        case "checkbox-border-color": 
            let checkboxBorder = document.querySelector('#checkbox-border-color');
            if(checkboxBorder.checked){  
                document.documentElement.style.setProperty('--colorBorder', 'var(--colorCustom)');
            }else{
                alterarCor("input-border-color")
            }
            break;

    }    
}

//função copiar
function copyColor(textColor){
    navigator.clipboard.writeText(textColor)
}
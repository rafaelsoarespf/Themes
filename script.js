//===========================================================================================
function changeColor(element){  
    switch(element){
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

        //Shadow
        case "input-shadow-color":
            let colorShadow = document.querySelector('#input-shadow-color').value;   
            document.documentElement.style.setProperty('--colorShadow', colorShadow);
            break;

        //Custom color
        case "input-custom-color":
            let colorCustom = document.querySelector('#input-custom-color').value;   
            document.documentElement.style.setProperty('--colorCustom', colorCustom);
            break;
    }
}

//===========================================================================================
function resetTheme(){
    document.documentElement.style.setProperty('--colorBackground', null || ''); 
    document.documentElement.style.setProperty('--colorBox', null || '');
    document.documentElement.style.setProperty('--colorBox2', null || '');
    document.documentElement.style.setProperty('--colorBox3', null || '');
    document.documentElement.style.setProperty('--colorTitle', null || '');
    document.documentElement.style.setProperty('--colorSubtitle', null || '');
    document.documentElement.style.setProperty('--colorText', null || '');
    document.documentElement.style.setProperty('--colorBorder', null || '');
    document.documentElement.style.setProperty('--colorShadow', null || '');
    document.documentElement.style.setProperty('--colorCustom', null || '');

    document.querySelector('#checkbox-title-color').checked = false;
    document.querySelector('#checkbox-subtitle-color').checked = false;
    document.querySelector('#checkbox-border-color').checked = false;
}

//===========================================================================================
function updateColorInput(){
    let colorBackground = getComputedStyle(document.documentElement).getPropertyValue('--colorBackground').trim();
    let colorBox = getComputedStyle(document.documentElement).getPropertyValue('--colorBox').trim();
    let colorBox2 = getComputedStyle(document.documentElement).getPropertyValue('--colorBox2').trim();
    let colorBox3 = getComputedStyle(document.documentElement).getPropertyValue('--colorBox3').trim();
    let colorTitle = getComputedStyle(document.documentElement).getPropertyValue('--colorTitle').trim();
    let colorSubtitle = getComputedStyle(document.documentElement).getPropertyValue('--colorSubtitle').trim();
    let colorText = getComputedStyle(document.documentElement).getPropertyValue('--colorText').trim();
    let colorBorder = getComputedStyle(document.documentElement).getPropertyValue('--colorBorder').trim();
    let colorShadow = getComputedStyle(document.documentElement).getPropertyValue('--colorShadow').trim();
    let colorCustom = getComputedStyle(document.documentElement).getPropertyValue('--colorCustom').trim();
    
    document.querySelector('#input-background-color').value = colorBackground;
    document.querySelector('#input-box-color').value = colorBox;
    document.querySelector('#input-box2-color').value = colorBox2;
    document.querySelector('#input-box3-color').value = colorBox3;
    document.querySelector('#input-title-color').value = colorTitle;
    document.querySelector('#input-subtitle-color').value = colorSubtitle;
    document.querySelector('#input-text-color').value = colorText;
    document.querySelector('#input-border-color').value = colorBorder;
    document.querySelector('#input-shadow-color').value = colorShadow;
    document.querySelector('#input-custom-color').value = colorCustom;
}

//===========================================================================================
function applyColorTheme(theme){

    let $html = document.querySelector('html');

    if(theme=="light-theme"){
        $html.classList.remove('dark-theme');
        $html.classList.add('light-theme');     
    }
    if(theme=="dark-theme"){
        $html.classList.remove('light-theme');
        $html.classList.add('dark-theme');      
    }
    resetTheme();
    updateColorInput();
}

//===========================================================================================
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

//===========================================================================================
function copyColor(textColor){
    navigator.clipboard.writeText(textColor)
}
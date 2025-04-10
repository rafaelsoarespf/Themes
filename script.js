//Variables ============================================================================================================

//Colors -----------------------------------------------------------------
const colorBackground = document.querySelector('#input-background-color');
const colorBox = document.querySelector('#input-box-color');
const colorBox2 = document.querySelector('#input-box2-color');   
const colorBox3 = document.querySelector('#input-box3-color');
const colorTitle = document.querySelector('#input-title-color');
const colorSubtitle = document.querySelector('#input-subtitle-color');
const colorText = document.querySelector('#input-text-color');
const colorBorder = document.querySelector('#input-border-color');
const colorShadow = document.querySelector('#input-shadow-color');
const colorCustom = document.querySelector('#input-custom-color');

//span code
const colorBoxSpanValue = document.querySelector('#input-box-color-value');
const colorBox2SpanValue = document.querySelector('#input-box2-color-value');
const colorBox3SpanValue = document.querySelector('#input-box3-color-value');

//range Transparency
const transparencyColorBox = document.querySelector('#input-box-transparency-color');
const transparencyColorBox2 = document.querySelector('#input-box2-transparency-color');
const transparencyColorBox3 = document.querySelector('#input-box3-transparency-color');
const transparencyColorTitle = document.querySelector('#input-title-transparency-color');
const transparencyColorSubtitle = document.querySelector('#input-subtitle-transparency-color');
const transparencyColorText = document.querySelector('#input-text-transparency-color');
const transparencyColorBorder = document.querySelector('#input-border-transparency-color');
const transparencyColorShadow = document.querySelector('#input-shadow-transparency-color');
const transparencyColorCustom = document.querySelector('#input-custom-transparency-color');

const transparencyColorBoxSpanValue = document.querySelector('#input-box-transparency-color-value');
const transparencyColorBox2SpanValue = document.querySelector('#input-box2-transparency-color-value');
const transparencyColorBox3SpanValue = document.querySelector('#input-box3-transparency-color-value');
const transparencyColorTitleSpanValue = document.querySelector('#input-title-transparency-color-value');
const transparencyColorSubtitleSpanValue = document.querySelector('#input-subtitle-transparency-color-value');
const transparencyColorTextSpanValue = document.querySelector('#input-text-transparency-color-value');
const transparencyColorBorderSpanValue = document.querySelector('#input-border-transparency-color-value');
const transparencyColorShadowSpanValue = document.querySelector('#input-shadow-transparency-color-value');
const transparencyColorCustomSpanValue = document.querySelector('#input-custom-transparency-color-value');

//renge blur input-box3-blur
const blurBox = document.querySelector('#input-box-blur');
const blurBox2 = document.querySelector('#input-box2-blur');
const blurBox3 = document.querySelector('#input-box3-blur');

const blurBoxSpanValue = document.querySelector('#input-box-blur-value');
const blurBox2SpanValue = document.querySelector('#input-box2-blur-value');
const blurBox3SpanValue = document.querySelector('#input-box3-blur-value');

//checkbox
const checkboxBackgroundRainbowColor = document.querySelector('#checkbox-background-rainbow-color');
const checkboxTitle = document.querySelector('#checkbox-title-color');
const checkboxSubtitle = document.querySelector('#checkbox-subtitle-color');
const checkboxBorder = document.querySelector('#checkbox-border-color');


//Fonts ---------------------------------------------------------------------------------------------------
const fontTitle = document.querySelector('#input-font-title');
const fontSizeTitle = document.querySelector('#input-size-title');
const fontWeightTitle = document.querySelector('#input-weight-title');
const fontStyleTitle = document.querySelector('#input-style-title');

const fontSubtitle = document.querySelector('#input-font-subtitle');
const fontSizeSubtitle = document.querySelector('#input-size-subtitle');
const fontWeightSubtitle = document.querySelector('#input-weight-subtitle');
const fontStyleSubtitle = document.querySelector('#input-style-subtitle');

const fontText = document.querySelector('#input-font-text');
const fontSizeText = document.querySelector('#input-size-text');
const fontWeightText = document.querySelector('#input-weight-text');
const fontStyleText = document.querySelector('#input-style-text');

//valores dos spans do radios
const inputSizeTitleSpan = document.getElementById('input-size-title-span');
const inputSizeSubtitleSpan = document.getElementById('input-size-subtitle-span');
const inputSizeTextSpan = document.getElementById('input-size-text-span');


//section 1 - colors ===========================================================================================
//change Color
function changeColor(element){  
    switch(element){
        //background
        case "input-background-color":   
            document.documentElement.style.setProperty('--colorBackground', colorBackground.value);
            document.querySelector('#input-background-color-value').innerHTML = colorBackground.value;
            checkboxBackgroundRainbowColor.checked = false;
            useCustomColor('checkbox-background-rainbow-color');
            break;
        
        //box
        case "input-box-color":
            let boxColor = colorBox.value + hexadecimal(transparencyColorBox.value);   
            document.documentElement.style.setProperty('--colorBox', boxColor);
            document.documentElement.style.setProperty('--blur-box', `blur( ${blurBox}px)`);
            colorBoxSpanValue.innerHTML = boxColor;
            break;

        //box2
        case "input-box2-color":
            let boxColor2 = colorBox2.value + hexadecimal(transparencyColorBox2.value);
            document.documentElement.style.setProperty('--colorBox2', boxColor2);
            document.documentElement.style.setProperty('--blur-box2', `blur( ${blurBox2}px)`);
            document.querySelector('#input-box2-color-value').innerHTML = boxColor2;
            break;
        
        //box3
        case "input-box3-color":
            let boxColor3 = colorBox3.value + hexadecimal(transparencyColorBox3.value);
            document.documentElement.style.setProperty('--colorBox3', boxColor3);
            document.documentElement.style.setProperty('--blur-box3', `blur( ${blurBox3}px)`);
            document.querySelector('#input-box3-color-value').innerHTML = boxColor3;
            break;

        //title
        case "input-title-color":
            let titleColor = colorTitle.value + hexadecimal(transparencyColorTitle.value);
            document.documentElement.style.setProperty('--colorTitle', titleColor);
            document.querySelector('#input-title-color-value').innerHTML = titleColor;
            document.querySelector('#checkbox-title-color').checked = false; 
            break;

        //subtitle
        case "input-subtitle-color":
            let subtitleColor = colorSubtitle.value + hexadecimal(transparencyColorSubtitle.value);
            document.documentElement.style.setProperty('--colorSubtitle', subtitleColor);
            document.querySelector('#input-subtitle-color-value').innerHTML = subtitleColor;
            document.querySelector('#checkbox-subtitle-color').checked = false;
            break;

        //text
        case "input-text-color":   
            let textColor = colorText.value + hexadecimal(transparencyColorText.value);
            document.documentElement.style.setProperty('--colorText', textColor);
            document.querySelector('#input-text-color-value').innerHTML = textColor;
            break;

        //border
        case "input-border-color":
            let borderColor = colorBorder.value + hexadecimal(transparencyColorBorder.value);
            document.documentElement.style.setProperty('--colorBorder', borderColor);
            document.querySelector('#input-border-color-value').innerHTML = borderColor;
            document.querySelector('#checkbox-border-color').checked = false;
            break;

        //Shadow
        case "input-shadow-color":  
            let shadowColor = colorShadow.value + hexadecimal(transparencyColorShadow.value);
            document.documentElement.style.setProperty('--colorShadow', shadowColor);
            document.querySelector('#input-shadow-color-value').innerHTML = shadowColor;
            break;

        //Custom color
        case "input-custom-color":   
            let customColor =  colorCustom.value + hexadecimal(transparencyColorCustom.value);
            document.documentElement.style.setProperty('--colorCustom', customColor);
            document.querySelector('#input-custom-color-value').innerHTML = customColor;
            break;
    }
}

//section 1 - font=================================================================================
//input radio

//trasparency
transparencyColorBox.addEventListener('input', function() {
    transparencyColorBoxSpanValue.textContent = transparencyColorBox.value;
    changeColor("input-box-color");

});

transparencyColorBox2.addEventListener('input', function() {
    transparencyColorBox2SpanValue.textContent = transparencyColorBox2.value;
    changeColor("input-box2-color");
});

transparencyColorBox3.addEventListener('input', function() {
    transparencyColorBox3SpanValue.textContent = transparencyColorBox3.value;
    changeColor("input-box3-color");
});

transparencyColorTitle.addEventListener('input', function() {
    transparencyColorTitleSpanValue.textContent = transparencyColorTitle.value;
    changeColor("input-title-color");
});

transparencyColorSubtitle.addEventListener('input', function() {
    transparencyColorSubtitleSpanValue.textContent = transparencyColorSubtitle.value;
    changeColor("input-subtitle-color");
});

transparencyColorText.addEventListener('input', function() {
    transparencyColorTextSpanValue.textContent = transparencyColorText.value;
    changeColor("input-text-color");
});

transparencyColorBorder.addEventListener('input', function() {
    transparencyColorBorderSpanValue.textContent = transparencyColorBorder.value;
    changeColor("input-border-color");
});

transparencyColorShadow.addEventListener('input', function() {
    transparencyColorShadowSpanValue.textContent = transparencyColorShadow.value;
    changeColor("input-shadow-color");
});

transparencyColorCustom.addEventListener('input', function() {
    transparencyColorCustomSpanValue.textContent = transparencyColorCustom.value;
    changeColor("input-custom-color");
});

//blur
blurBox.addEventListener('input', function() {
    blurBoxSpanValue.textContent = blurBox.value;
    changeColor("input-box-color");
});

blurBox2.addEventListener('input', function() {
    blurBox2SpanValue.textContent = blurBox2.value;
    changeColor("input-box2-color");
});

blurBox3.addEventListener('input', function() {
    blurBox3SpanValue.textContent = blurBox3.value;
    changeColor("input-box3-color");
});

//font size
fontSizeTitle.addEventListener('input', function() {
    inputSizeTitleSpan.textContent = fontSizeTitle.value;
});

fontSizeSubtitle.addEventListener('input', function() {
    inputSizeSubtitleSpan.textContent = fontSizeSubtitle.value;
});

fontSizeText.addEventListener('input', function() {
    inputSizeTextSpan.textContent = fontSizeText.value;
});

//section 1 - font ==========================================================================================
//change font
function changeFont(element){
    switch(element){
        //title
        case "title":
            document.documentElement.style.setProperty('--fontTitle', `${fontStyleTitle.value} ${fontWeightTitle.value} ${fontSizeTitle.value}rem ${fontTitle.value}`);
            break;

        //subtitle
        case "subtitle":
            document.documentElement.style.setProperty('--fontSubtitle', `${fontStyleSubtitle.value} ${fontWeightSubtitle.value} ${fontSizeSubtitle.value}rem ${fontSubtitle.value}`);

        //text
        case "text":
            document.documentElement.style.setProperty('--fontText', `${fontStyleText.value} ${fontWeightText.value} ${fontSizeText.value}rem ${fontText.value}`);
    }
}

// ===========================================================================================
//Reset Theme - use in applyColorTheme()
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

    document.documentElement.style.setProperty('--fontTitle', null || '');
    document.documentElement.style.setProperty('--fontSubtitle', null || '');
    document.documentElement.style.setProperty('--fontText', null || '');

    document.querySelector('#checkbox-title-color').checked = false;
    document.querySelector('#checkbox-subtitle-color').checked = false;
    document.querySelector('#checkbox-border-color').checked = false;
    checkboxBackgroundRainbowColor.checked = false;
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

    //atualizando cor do input
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

    //atualizando span de codigo da cor 
    document.querySelector('#input-background-color-value').innerHTML = colorBackground;
    document.querySelector('#input-box-color-value').innerHTML = colorBox;
    document.querySelector('#input-box2-color-value').innerHTML = colorBox2;
    document.querySelector('#input-box3-color-value').innerHTML = colorBox3;
    document.querySelector('#input-title-color-value').innerHTML = colorTitle;
    document.querySelector('#input-subtitle-color-value').innerHTML = colorSubtitle;
    document.querySelector('#input-text-color-value').innerHTML = colorText;
    document.querySelector('#input-border-color-value').innerHTML = colorBorder;
    document.querySelector('#input-shadow-color-value').innerHTML = colorShadow;
    document.querySelector('#input-custom-color-value').innerHTML = colorCustom;

    //atualizando inputs de font
    document.querySelector('#input-font-title').value = 'Arial, Helvetica, sans-serif';
    document.querySelector('#input-size-title').value = 2.8;
    document.querySelector('#input-weight-title').value = 'bold';
    
    document.querySelector('#input-font-subtitle').value = 'Arial, Helvetica, sans-serif';
    document.querySelector('#input-size-subtitle').value = 2;
    document.querySelector('#input-weight-subtitle').value = 'normal';

    document.querySelector('#input-font-text').value = 'Arial, Helvetica, sans-serif';
    document.querySelector('#input-size-text').value = 1;
    document.querySelector('#input-weight-text').value = 'normal';


    //radio span
    inputSizeTitleSpan.textContent = fontSizeTitle.value;
    inputSizeSubtitleSpan.textContent = fontSizeSubtitle.value;
    inputSizeTextSpan.textContent = fontSizeText.value;
}

//===========================================================================================
function applyColorTheme(theme){

    let $html = document.querySelector('html');
    let body = document.querySelector('body');

    //remove old theme
    $html.classList.remove('light-theme', 'dark-theme', 'rainbow-theme');
    body.classList.remove('rainbow-background');

    //add new theme
    if(theme=="light-theme"){
        $html.classList.add('light-theme');     
    }
    if(theme=="dark-theme"){
        $html.classList.add('dark-theme');      
    }
    if(theme=="rainbow-theme"){
        document.querySelector("#checkbox-background-rainbow-color").checked = true;
        useCustomColor("checkbox-background-rainbow-color");
        $html.classList.add('rainbow-theme');        
    }

    resetTheme();
    updateColorInput();
}

//===========================================================================================
function useCustomColor(elemento){

    switch(elemento){
        //title
        case "checkbox-title-color":
            if(checkboxTitle.checked){  
                document.documentElement.style.setProperty('--colorTitle', 'var(--colorCustom)');
            }else{
                changeColor("input-title-color")
            }
            break;     
        
        //subtitle
        case "checkbox-subtitle-color":
            if(checkboxSubtitle.checked){  
                document.documentElement.style.setProperty('--colorSubtitle', 'var(--colorCustom)');
            }else{
                changeColor("input-subtitle-color")
            }
            break;    

        //border
        case "checkbox-border-color": 
            if(checkboxBorder.checked){  
                document.documentElement.style.setProperty('--colorBorder', 'var(--colorCustom)');
            }else{
                changeColor("input-border-color")
            }
            break;

        case "checkbox-background-rainbow-color":
            if(checkboxBackgroundRainbowColor.checked){
                document.querySelector('body').classList.add('rainbow-background');
            }else{
                document.querySelector('body').classList.remove('rainbow-background');
            }
            break;
    }    
}

//===========================================================================================
function copyColor(textColor){
    
    //div alert copy text
    divAlertCopyText = document.querySelector('#div-alert-copy-text')
    divAlertCopyText.style.setProperty('display','block');
    setTimeout(() => { divAlertCopyText.style.setProperty('display','none')},1000)

    //copy text
    navigator.clipboard.writeText(textColor)
}

//hexadecimal
function hexadecimal(value) {
    const hex = Math.round(value * 255).toString(16).padStart(2, '0');
    return hex.toUpperCase();
}
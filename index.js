let screen = document.getElementById('screen');
spans = document.querySelectorAll('span');
let screenValue = '';
for(item of spans){
    item.addEventListener('click', (e)=>{
        spanText = e.target.innerText;
        console.log('span text is', spanText);
        if(spanText=='X'){
            spanText = '*';
            screenValue += spanText;
            screen.value = screenValue;

        }else if(spanText =='C'){
            screenValue = '';
            screen.value = screenValue;

        }else if(spanText =='='){
            screen.value = eval(screenValue);

        }else{
            screenValue += spanText;
            screen.value = screenValue;
        }
    })
}
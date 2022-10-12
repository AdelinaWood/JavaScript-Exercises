let a = ''; // first number
let b = ''; // second number
let sign = ''; // the sign of the operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; // first number
    b = ''; // second number
    sign = ''; // the sign of the operation
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // в блоке .buttons нажата не кнопка то мы просто выходим
    if(!event.target.classList.contains('btn')) return;
    // если нажата кнопка all clear то её тоже не обрабатываем
    if(event.target.classList.contains('ac')) return;
    //очищаю элемент p
    out.textContent = '';

    //получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или .
    if (digit.includes(key)){
        if (b === '' && sign ===''){
            a += key;     
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return; 
        
    }
   
    
   
    // если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(sign);
        returt;
    }
    if (key === '='){
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a)+(+b);
                break;
            case "-":
                a = a-b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === "0"){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;       
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}
let arr = [2, 4, 6, 1, 5, 8];
let numb = 2;

let resultArr = [];

const divisibleBy = function(x, y) {
    for ( let i = 0; i < x.length; i++) {
        if( x[i]%y ==0 ){
            resultArr.push(x[i])
        }
    }
    return resultArr;
}

console.log('New arr: ' + divisibleBy(arr, numb));
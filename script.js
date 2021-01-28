var input = document.querySelector('.calculator input');
var result = document.querySelector('.calculator .result');
var error = document.querySelector('.calculator .error');

document.querySelector('#calculate').addEventListener('click',(e)=>{
    if(input.value != ''){
        let f = factorial(input.value);

        error.classList.remove('show');
        result.classList.add('show');
        result.innerHTML = f;
    }else{
        result.classList.remove('show');
        error.classList.add('show');
        error.innerHTML = 'Please enter a valid value';
    }
});

document.querySelector('#clear').addEventListener('click',()=>{
    input.value = null;
    result.classList.remove('show');
    error.classList.remove('show');
})

function factorial(n){
    let aux = 1;
    if(n != 0){
        return aux = n * factorial(n - 1);
    }else{
        return aux;
    }
}
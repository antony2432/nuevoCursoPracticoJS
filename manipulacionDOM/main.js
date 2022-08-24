const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');


// escuchar eventos
function btnOnClick(){
    const pResult = document.querySelector('#result');
    const sumaImput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado: ${sumaImput}`;
}

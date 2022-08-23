//TODO: Leyendo HTML desde JavaScript
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafo = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

//TODO: Escribiendo HTML desde JavaScript

h1.innerHTML = 'El patito <br> Onichan' // con innerHTML  transforma todo a codigo html
// h1.innerText = 'El patito <br> Onichan' // con innerText transforma todo a texto 
console.log(h1.getAttribute('pantalla')) // para leer el atributo
h1.setAttribute('pantalla', 'rojo')// para escribir los atributos

parrafo.classList.add('Rojo') // para agregar a la clase
parrafo.classList.remove('Rojo') // para agregar a la clase
// parrafo.classList.toggle('Rojo') // para estados del html
// parrafo.classList.contains('Rojo') // para validar si cuenta con una clase el cual nos devolvera un boolean

input.value = "456" // modificar el valor

const img = document.createElement('img') // crear un elemento
img.setAttribute('src', 'https://www.lisdatasolutions.com/wp-content/uploads/2022/07/Que-es-y-para-que-sirve-GitHub-1.jpg')
console.log(img);
pid.innerHTML = ""
pid.append(img); // con append agregan el elemento despues del contenido que ya tiene el parrafo

//TODO: Eventos en javaScript: interactuando con ususarios
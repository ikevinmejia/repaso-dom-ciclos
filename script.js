// 1. Tener una referencia -> document.querySelector('')
// 2. Crear una etiqueta HTML -> document.createElement('')
// 3. Agregar atributos necesarios o texto -> setAttribute(), innerText, classList.add('')
// 4. Agregar el elemento creado a la referencia. -> append()

// 1. Paso.
const container =  document.querySelector('.container');

// 2. Paso.

const valor = document.createElement('p');

// 3. Paso.

// Agregando una clase.

valor.innerText = 'Estan muy pros';

valor.classList.add('texto');

// 4. Paso.

container.appendChild(valor);


for (let i = 1; i <= 10; i++) {

    const valor = document.createElement('p');
    valor.innerText = `7 * ${i} = {i*7}`;
    valor.classList.add('texto');
    container.appendChild(valor);
}

// 1 * 7 = 7
// 2 * 7 = 14
// 3 * 7 = 21
// .
// .
// 10 * 7 = 70



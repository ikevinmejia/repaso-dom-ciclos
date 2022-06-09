const btnDerecha = document.querySelector('.btn-derecha');
const btnIzquierda = document.querySelector('.btn-izquierda');
const titulo = document.querySelector('.titulo');
const descripcion = document.querySelector('.descrp');
const image = document.querySelector('img');


let contador = 0;


let arreglo = [
    {
        nombre: 'Golem',
        descripcion: 'Es muy grande',
        image: './img/juanMiguel.jpeg',
    },
    {
        nombre: 'Arquero',
        descripcion: 'Es eficaz y rapido',
        image: './img/Santiago.jpeg',
    },
    {
        nombre: 'Caballero',
        descripcion: 'Fuerte y desgarrador',
        image: './img/Sebastian.jpeg',
    },
    {
        nombre: 'Impresora',
        descripcion: 'Tiene muy buenos colores',
        image: './img/Sebastian.jpeg',
    },
];

    console.log(`La longitud del arreglo es de ${arreglo.length}`);

    titulo.innerText = `${arreglo[contador].nombre}`;

    descripcion.innerText = `${arreglo[contador].descripcion}`;

    image.setAttribute('src', `${arreglo[contador].image}`)

    btnIzquierda.disabled = true;

const irDerecha = () => {
    if (contador < arreglo.length - 1 ) {
        contador = contador + 1 ;

        titulo.innerText = `${arreglo[contador].nombre}`;

        descripcion.innerText = `${arreglo[contador].descripcion}`;

        image.setAttribute('src', `${arreglo[contador].image}`)

        btnIzquierda.disabled = false;

        console.warn(contador);
    }

}

const irIzquierda = () => {
    contador = contador - 1 ;
    titulo.innerText = `${arreglo[contador].nombre}`;
    descripcion.innerText = `${arreglo[contador].descripcion}`;
    image.setAttribute('src', `${arreglo[contador].image}`)
    console.error(contador);


}



btnDerecha.addEventListener('click', irDerecha);
btnIzquierda.addEventListener('click', irIzquierda);


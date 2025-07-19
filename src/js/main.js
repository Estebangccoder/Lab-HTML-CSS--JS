// LABORATORIO HTML, CSS Y JS
// 1. Crea una página que:
// 1.
// Muestre un contador, los estilos dependen de cada uno.
// 2.
// Hacer un botón para incrementar el contador (Con JS).
// 2. Agregar un nuevo botón, que ahora, decrementa el conteo.
// 3. Cambie el color del contador cuando llegue a 10.



const body= document.querySelector("body")

let contador=0



function mostrarHTML(inicial){body.innerHTML=`
 <header>
        <h1>Contador</h1>
    </header>
    
    <div class="container" id="contenedor_contador">
        <p id="numero">${inicial}</p>
        <div id="contenedor_botones">
        <button class="boton_contador" id="boton_aumentar">Incrementar</button>
        <button class="boton_contador" id="boton_disminuir">Disminuir</button>
    
        </div>
    </div>
    
`;

const numero =document.querySelector("#numero")

document.querySelector("#boton_aumentar").addEventListener('click', () => {
    contador++
    mostrarHTML(contador)
});

document.querySelector("#boton_disminuir").addEventListener('click', () => {
    contador--
    mostrarHTML(contador)
});
cambiarContador();
}

function cambiarContador(){
    if (contador>9){
        numero.style.color="red";
    }else{
        numero.style.color="black";
    };
}


mostrarHTML(contador)
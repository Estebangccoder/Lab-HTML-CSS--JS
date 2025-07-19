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

document.querySelector("#boton_aumentar").addEventListener('click', () => {
    contador++
    mostrarHTML(contador)
});

document.querySelector("#boton_disminuir").addEventListener('click', () => {
    contador--
    mostrarHTML(contador)
});

}


mostrarHTML(contador)
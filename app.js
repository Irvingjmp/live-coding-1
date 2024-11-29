const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

// alert("Palabras");
function palabrasGrandes(palabra, arreglo){
    return arreglo.filter(elemento => elemento.length > palabra.length);
}

const nuevaLista= palabrasGrandes('bocina', myArray);
console.log(nuevaLista);

function printArray(array){
    const $ul =document.getElementById("listaPalabras");

    array.forEach(elemento=>{
        const $li = document.createElement("li");
        $li.textContent = elemento;
        $ul.appendChild($li);
    });
}

printArray(myArray);



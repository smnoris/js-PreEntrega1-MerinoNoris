for (let i = 1; i < 12; i++) {
    alert("lectura n°" + i);
    console.log("Lectura n°" + i);
    let voltaje = prompt("Ingrese voltaje");
    alert("El voltaje es " + voltaje + " volts");
    console.log("Voltaje: "+ voltaje + " volts");
    if (voltaje === null){
        alert ("Valor no introducido.");
        valorIncorrecto();
        break;
    } 
    let amperaje = prompt("Ingrese corriente");
    alert("La corriente es " + amperaje + " ampers");
    console.log("Corriente: "+ amperaje + " amperes");
    if (amperaje === null){
        alert ("Valor no introducido.");
        valorIncorrecto();
        break;
    }
    let resistencia = prompt("Ingrese resistencia");
    alert("La resistencia es " + resistencia + " ohms");
    console.log("Resistencia: "+ resistencia + " ohms");
    if (resistencia === null){
        alert ("Valor no introducido.");
        valorIncorrecto();
        break;
    } 
}

function valorIncorrecto () {
    alert ('Error de dato')
    console.log('Error de datos');
}

console.log(voltaje);
console.log(amperaje);
console.log(resistencia);






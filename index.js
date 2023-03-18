for (let i = 1; i < 12; i++) {
    alert("lectura n°" + i)
    let voltaje = prompt("Ingrese voltaje");
    alert("El voltaje es " + voltaje + " volts");
        if (voltaje === null){
            valorIncorrecto;
             alert ("Valor no introducido.")
            } else {
                 console.log("Falta valor")}
    let amperaje = prompt("Ingrese corriente");
    alert("La corriente es " + amperaje + " ampers");
    if (amperaje === null){
        alert ("Valor no introducido.")
       } else {
            console.log("Falta valor")}
    let resistencia = prompt("Ingrese resistencia");
    alert("La resistencia es " + resistencia + " ohms");
    if (resistencia === null){
        alert ("Valor no introducido.")
       } else {
            console.log("Falta valor")}
} 

function lectura () {
console.log("Voltaje: "+ voltaje + " volts");
console.log("Corriente: "+ amperaje + " amperes");
console.log("Resistencia: "+ resistencia + " ohms");
}

lectura();

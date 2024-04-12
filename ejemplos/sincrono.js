function uno () {
    console.log("uno")
}

function dos () {
    console.log("dos")
    
}

uno()
setTimeout(() => dos(),5000)



function misDatos(nombre, edad, callback) {
    console.log("Mi nombre es " + nombre + " y tengo " + edad + " años.");
    callback();
}

function mostrarMensaje() {
    console.log("Bienvenido al aprendizaje de JavaScript Callback.");
}

misDatos("Juan", 20, mostrarMensaje);

setTimeout(()=> mostrarMensaje (),2000)


function giveMeYourDoc () {
    
    let docIngresado = prompt("Esta por ser redireccionado: INGRESE SU DOCUMENTO");
    
    alert('el numero ingresado es ' + docIngresado);

    if (docIngresado != 39422412) {
        giveMeYourDoc();
    }
}


let nombre = prompt('Ingrese su nombre y apellido para corroborar identificación');

if (nombre.toLowerCase() === 'tomas valentino real' || nombre.toLowerCase() === 'tomisiyo' || nombre.toLowerCase() === 'tomi') {
    alert('Bienvenido, Tomas. a la base de datos confidenciales del gobierno argentino');
} else {
    alert('Los datos ingresados son incorrectos.');
    alert('Estas siendo vigilado');
    console.log('La base de datos obtenida es incorrecta, serás ubicado en un tiempo muy breve por el servicio de inteligencia estatal')

    giveMeYourDoc ();
}

let identificationNumber = prompt('Ingrese clave de identificación');

let number = parseInt(identificationNumber);

if (number === 1593) {
    alert("Ahora si puedes realizar cambios en la base de datos");
}
else {
    alert('No estás autorizado, puede recibir una demanda civil y/o penal. Queda usted notificado.');
    let edad = prompt('Ingrese su edad ');

    while (edad != "27") {
        alert("Usted ingresó " + edad + " y no es el numero correcto.");
        edad = prompt("Ingrese la edad/número correcto.");
    }


    let intentosPermitidos = 2;
    let identificationCorrectNumber = 1593
    let correctIncome = false;

    for (let intento = 1; intento <= intentosPermitidos; intento++) {
        let identificationNumber = parseInt(prompt("Intento " + intento + ": Ingrese su número de identificación"));

        if (identificationCorrectNumber === 1593) {
            break;
        } else {
            alert("Número incorrecto. Solo tienes " + (intentosPermitidos - intento) + " intento.");
            alert("Número incorrecto. No puedes solicitar mas intentos. Por favor llama a la poli");
        } 
    }

    if (correctIncome === identificationCorrectNumber) {
        alert('Bienvenido.');
        alert('En este momento usted está siendo grabado. ¡sonría!');
    } else {
        alert('No puedes solicitar más ingresos, por favor no insista.');
    }
}



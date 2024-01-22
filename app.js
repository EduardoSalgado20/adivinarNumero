let numeroSecreto = Math.floor(Math.random()*10)+1;
let intentos = 1;
let numeroUsuario = 0;
//let palabraJuegos = `juego`;
let maximoDeIntentos = 3
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("me indicas un numero entre 1 y 10 por favor: "));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) { //la condicion hace una comparacion
        //la condicion es verdadera
        alert(`Acertast, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? `vez` : `veces`}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert(`el nuero secreto es menor`);
        }else{
            alert(`el numero secreto es mayor`);
        }
        // contador de intentos del usuario
        intentos += 1;
        //palabraJuegos = 'jueos';
        if(intentos > maximoDeIntentos){
            alert(`perdiste el juego, los intento maximos ${maximoDeIntentos}`);
            break;
        }
    }
}
let intentos = 1;
let lim_de_juego = parseInt(prompt('ingrese el limite maximo para el juego 10,100,1000: '));
let numeroSecreto = Math.floor(Math.random()*lim_de_juego)+1;
let numeroUsuario = 0;
//let palabraJuegos = `juego`;
let maximoDeIntentos = 0;
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`me indicas un valor entre 1 y ${lim_de_juego} por favor`));

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
        if(lim_de_juego == 100 ){
            maximoDeIntentos = 8;
        }else{
            if(lim_de_juego == 1000){
                maximoDeIntentos = 12;
            }else{
                maximoDeIntentos = 3;
            }
        }
        if(intentos > maximoDeIntentos){
            alert(`perdiste el juego, los intento maximos ${maximoDeIntentos} y el numero secreo era ${numeroSecreto}`);
            break;
        }
    }
}
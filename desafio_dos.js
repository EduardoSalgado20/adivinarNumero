let dia_de_semana = prompt('que dia de la semana es? ');

if(dia_de_semana == 'Sabado' | dia_de_semana == 'Domingo' | dia_de_semana == 'sabado' | dia_de_semana == 'domingo'){
    alert('Buen fin de semana');
}else {
    alert('buena semana');
}

let signo_numero = prompt('ingresa un numero');

if(signo_numero >= 0){
    alert(`el numero es positivo ${signo_numero}`);
}else{
    alert(`el numero es negativo ${signo_numero}`);
}

let puntuacion = prompt('ingresa el valor de puntiacion optenidos');

if(puntuacion >= 100){
    alert('felicidades, has ganado!');
}else{
    alert('intenta nuevamente para ganar');
}

let cuentaDeSaldo = prompt('cual es su saldo actual: ');
alert(`su saldo que ingreso es: ${cuentaDeSaldo}`);
let nombreDeUsuario = prompt('cual es su nombre: ');
alert(`bienvenido ${nombreDeUsuario}`);
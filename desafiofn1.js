let nombre = 'Eduardo';
let valor1 = 30;
let valor2 = 25;
let suma,resta = 0;
let edad,numero;
let conteo0a10 = 1;
let nota = Math.floor(Math.random()*10);
//para el punto 10, 3  valores difeneta para comrpobar su funcion correcta
let probar3veces = 0;

console.log('bienvenidos');
console.log(`Hola ${nombre}`);

alert(`Hola, ${nombre}`);
lenguaje_favorito = prompt('cual es el lengiaje que mas te gusta?');
console.log(lenguaje_favorito);

suma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${suma }`);
resta = valor1 - valor2;
console.log(`la diferencia entre ${valor1} y ${valor2} es igual a ${resta}`);

edad = prompt('ingresa la edad que tienes actualmete: ');
if(edad >= 18){
    alert('ya eres mayor de edad, felicidades');
}else{
    alert('aun eres menor de edad');
}

numero = prompt('ingresa un numero para saber si es negativo, poitivo o cero: ');
if(numero > 0){
    alert(`el numero ${numero} es positivo`);
}else{
    if(numero < 0){
        alert(`el numero ${numero} es negativo`);
    }else{
        alert('el numero que proporcionaste es cero');
    }
}
//punto 9
while(conteo0a10 <= 10){
    console.log(conteo0a10);
    conteo0a10++;
}
//punto 10, 11 y 12
while(probar3veces >=3){
    if(nota >= 7){
        console.log(`la calificacion ${nota} es aprobatoria`);
    }else{
        console.log(`la calificacion ${nota} es reprobatoria`);
    }
    console.log(`el numero aleatorio es: ${nota}`);
    probar3veces++;
}

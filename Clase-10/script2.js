let edad
let nomuser
let nota
let numA
let numB
let oper
let result

edad = prompt('Ingrese la edad del usuario')
console.log(edad)

if (edad < 18){
    alert('ES MENOR DE EDAD')
}
else{
    alert('ES MAYOR DE EDAD')
}




// Solicitar un nombre al usuario y verificar
// -Si el usuario escribió algo poner por consola: "SE INGRESÓ EL NOMBRE CON ÉXITO"
// -Si no poner por consola: "ERROR, nombre no fue escrito"
// falsie: '', 0, NaN, null, false, undefined

nomuser = prompt('Ingrese el nombre de usuario')
console.log(nomuser)

if(nomuser){
    alert('SE INGRESÓ EL NOMBRE CON ÉXITO')
}
else{
    alert('ERROR, nombre no fue escrito')
}

// Solicitar una nota al usuario y verificar
// -si la nota es menor a 4  entonces pone: "AAAA ESTUDIAR!"
// -si la nota es menor 7 entonces poner: 'mejor suerte la próxima :D!
// -Sino poner: "FELICITACIONES, has aprobado 🎆"

nota = prompt('Ingrese su nota')
console.log(nota)

if(nota<4){
    alert('AAAA ESTUDIAR!')
}
else if (nota<7){
    alert('mejor suerte la próxima :D!')
}
else{
    alert('FELICITACIONES, has aprobado 🎆')
}


// Solicitar al usuario un numero a, un numero b y una operación
// -si la operación es '+' entonces poner: el resultado de la suma entre a y b es: resultado
// -si la operación es '-' entonces poner: el resultado de la resta entre a y b es: resultado
// -sino poner: ERROR, no has colocado una operación válida
// Recomendaciones: recuerda que puedes usar Number(numero) para transformar un string en un número


numA = Number(prompt('Ingrese el primer número:'))
console.log('Primer número: ' + numA)
numB=Number(prompt('Ingrese el segundo número:'))
console.log('Segundo número: ' + numB)
oper=prompt('Igrese la operación a realizar (+-/*%):')
console.log('Operador: ' + oper)

if (oper === '+'){
    alert('La suma entre ' + numA + ' y ' + numB + ' es: ' + (numA+numB))
}
else if(oper === '-'){
    alert('La resta entre ' + numA + ' y ' + numB + ' es: ' + (numA-numB))
}
else if(oper === '/'){
    alert('La división de ' + numA + ' entre ' + numB + ' es: ' + (numA/numB))
}
else if(oper === '*'){
    alert('La multiplicación entre ' + numA + ' y ' + numB + ' es: ' + (numA*numB))
}
else if(oper === '%'){
    alert('El resto de la división de ' + numA + ' entre ' + numB + ' es: ' + (numA%numB))
}
else{
    alert('ERROR, no has colocado una operación válida')
}
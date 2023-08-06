
// for(let i=1; i<=3; i=i+1){
//      let precio=Number(prompt('Ingrese el precio') )
//      alert('el iva de $' + precio + ' es $' + (precio * 0.21))
// }

// iva=total * 0.21


let oracion='Jorge va Al baño por las noches'
let cantidadA = 0
for (let i=0; i < oracion.length; i = i + 1 ){
    if (oracion[i].toLowerCase() == 'a'){
        cantidadA = cantidadA +1
    }
}
alert(`La cantidad de letras "a" es: ${cantidadA}`)
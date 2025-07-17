

import { PI, IVA, Dias_Semana } from './constantes.js';
import { sumar, restar, multiplicar, area_Circulo } from './operaciones-matematicas.js';
import { calcular_Total, aplicar_impuestos, aplicar_descuentos} from './operaciones-matematicas.js';


// Ejercicio 1
let circulo_area = (radio,PI) => {
    return PI * radio * radio;
}

let IVA_producto = (precio) => {
    return precio * IVA;
}

console.log(Dias_Semana[1])

// Ejercicio 2
console.log("El resultado de la suma de los números es de:"+ " " + sumar(5, 3));
console.log("El resultado de la resta de los números es de:"+ " " + restar(10, 4)); 
console.log("El resultado de la multiplicación de los números es de:"+ " " + multiplicar(2, 3));
console.log("El área calculada es de:"+" "+area_Circulo(5, PI)+" "+ "Unidades Cuadradas");

// Ejercicio 3
let inventario = [
  { nombre: "Papas", precio: 15, cantidad: 2},
  { nombre: "Arroz", precio: 25, cantidad: 3},
  { nombre: "Queso", precio: 35, cantidad: 7},

];

console.log("Su lista de compras es la siguiente:");
for (let i = 0; i < inventario.length; i++) {
  const producto = inventario[i];
  const subtotal = producto.precio * producto.cantidad;
  
  console.log(
    producto.nombre + ": " + 
    producto.cantidad + " x $" + 
    producto.precio.toFixed(2) + " = $" + 
    subtotal.toFixed(2)
  );
}

const total = calcular_Total(inventario);
console.log ("El total de su compra neto es de:"+ " " + total.toFixed(2))

const impuestos = aplicar_impuestos (calcular_Total);
console.log ("El total de su compra con el impuesto del IVA al 10% es de:"+ " " + impuestos.toFixed(2));

const descuentos = aplicar_descuentos(impuestos);
console.log ("El total de su compra con el descuento aplicado es de:" + " " + descuentos.toFixed(2))
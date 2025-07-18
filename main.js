

import { PI, IVA, Dias_Semana, descuento } from './constantes.js';
import { sumar, restar, multiplicar, area_Circulo } from './operaciones-matematicas.js';
import { calcular_Total, aplicar_impuestos, aplicar_descuentos, aplicarDescuentoPorRol} from './operaciones-matematicas.js';
import { crearUsuario } from './usuarios.js';
import { roles } from './constantesUsuarios.js';


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
  { nombre: "Papas", precio: 15, cantidad: 2 },
  { nombre: "Arroz", precio: 25, cantidad: 3 },
  { nombre: "Queso", precio: 35, cantidad: 7 },
];

console.log("Su lista de compras es la siguiente:");
for (let i = 0; i < inventario.length; i++) {
  const producto = inventario[i];
  const subtotal = producto.precio * producto.cantidad;
  
  console.log(producto.nombre + ": " + producto.cantidad + " x $" + producto.precio.toFixed(2) + " = $" + subtotal.toFixed(2));
}

const totalNeto = calcular_Total(inventario);
console.log("El total de su compra neto es de: $" + totalNeto.toFixed(2));


const totalConIVA = aplicar_impuestos(totalNeto, IVA);
console.log("El total de su compra con el impuesto del IVA al 10% es de: $" + totalConIVA.toFixed(2));


const totalConDescuento = aplicar_descuentos(totalConIVA, descuento);
console.log("El total de su compra con el descuento aplicado es de: $" + totalConDescuento.toFixed(2));


// Ejercicio 4
let usuario1 = crearUsuario("Alejandro", roles.ADMIN);
let usuario2 = crearUsuario("María", roles.USER);

console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

// Ejercicio 5
const compraUsario1 = Array(4).fill({ precio: 25, cantidad: 1 }); // Linea consultada para crear un array de 4 elementos con el mismo objeto
const compraUsario2 = Array(3).fill({ precio: 50, cantidad: 1 });

const totalUsuario1 = calcular_Total(compraUsario1);
const totalUsuario2 = calcular_Total(compraUsario2);

const totalConIVAUsuario1 = aplicar_impuestos(totalUsuario1);
const totalConIVAUsuario2 = aplicar_impuestos(totalUsuario2);

const totalConDescuentoUsuario1 = aplicarDescuentoPorRol(totalConIVAUsuario1, usuario1);
const totalConDescuentoUsuario2 = aplicarDescuentoPorRol(totalConIVAUsuario2, usuario2);

console.log("Total sin IVA para Usuario 1 (Admin): $" + totalUsuario1.toFixed(2));
console.log("Total con IVA para Usuario 1 (Admin): $" + totalConIVAUsuario1.toFixed(2));
console.log("Total con Descuento para Usuario 1 (Admin): $" + totalConDescuentoUsuario1.toFixed(2));

console.log("Total sin IVA para Usuario 2 (User): $" + totalUsuario2.toFixed(2));
console.log("Total con IVA para Usuario 2 (User): $" + totalConIVAUsuario2.toFixed(2));
console.log("Total con Descuento para Usuario 2 (User): $" + totalConDescuentoUsuario2.toFixed(2));
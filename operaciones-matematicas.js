import { PI, IVA, descuento} from './constantes.js';

export function sumar(a, b) {
    return a + b;
}

export function restar (a,b){
    return a - b;
}

export function multiplicar (a,b){
    return a * b;
}

export function area_Circulo(radio){
    return PI * radio * radio;
}

export function calcular_Total(inventario) {
  let total = 0;
  
  for (let i = 0; i < inventario.length; i++) {
    total += inventario[i].precio * inventario[i].cantidad;
  }
  
  return total;
}

export function aplicar_impuestos (total){
    return total * (1 + IVA)

}

export function aplicar_descuentos (total){
    return total * (1- descuento)
}

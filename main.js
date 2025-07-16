import { PI, IVA, Dias_Semana } from './constantes.js';

circulo_area = (radio) => {
    return PI * radio * radio;
}

IVA_productio = (precio) => {
    return precio * IVA;
}

console.log(Dias_Semana[1])
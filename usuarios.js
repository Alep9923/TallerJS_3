import { roles } from "./constantesUsuarios.js";

export function crearUsuario(nombre, rol){
    if (rol !== roles.ADMIN && rol !== roles.USER) {
        console.error("Rol no válido. Debe ser 'admin' o 'user'.");
        return null;
    }
    return {
        nombre: nombre,
        rol: rol,
        fechaRegistro: new Date().toLocaleDateString(), //  Linea consultada para obtener la fecha actual en formato local
    }
}
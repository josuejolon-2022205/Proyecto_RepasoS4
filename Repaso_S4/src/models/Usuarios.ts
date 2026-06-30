import {Rol} from "./Rol"
export interface Usuarios{
    id_usuario: number,
    nombre_usuario: string,
    telefono_usuario: number,
    correo_cliente: string, 
    contrasena_cliente: string,
    direccion: string,
    rol: Rol

}
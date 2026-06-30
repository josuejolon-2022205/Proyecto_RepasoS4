import { usuarios } from "../data/Usuarios";
import { Usuarios } from "../models/Usuarios";

export function listarUsuarios(): Usuarios[]{
    return usuarios;
}

export function buscarUsuario(id_usuario: number): Usuarios | undefined{
    return usuarios.find(p => p.id_usuario === id_usuario);
}

export function crearUsuario(nuevoUser: Usuarios): Usuarios | undefined{
    if(!nuevoUser.id_usuario){
        nuevoUser.id_usuario = usuarios.length +1 ;
    }
    usuarios.push(nuevoUser);
    return nuevoUser
}
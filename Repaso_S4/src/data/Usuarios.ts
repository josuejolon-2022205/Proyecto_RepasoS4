import { Usuarios } from "../models/Usuarios";
import { Rol } from "../models/Rol";

export const usuarios: Usuarios[] = [
    {
        id_usuario: 1,
        nombre_usuario: "Juan Pérez",
        telefono_usuario: 30214567,
        correo_cliente: "juan.perez@gmail.com",
        contrasena_cliente: "Juan123",
        direccion: "Zona 1, Ciudad de Guatemala",
        rol: Rol.ADMIN
    },
    {
        id_usuario: 2,
        nombre_usuario: "María López",
        telefono_usuario: 41235678,
        correo_cliente: "maria.lopez@gmail.com",
        contrasena_cliente: "Maria123",
        direccion: "Zona 5, Ciudad de Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 3,
        nombre_usuario: "Carlos Méndez",
        telefono_usuario: 52346789,
        correo_cliente: "carlos.mendez@gmail.com",
        contrasena_cliente: "Carlos123",
        direccion: "Mixco, Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 4,
        nombre_usuario: "Ana García",
        telefono_usuario: 63457890,
        correo_cliente: "ana.garcia@gmail.com",
        contrasena_cliente: "Ana123",
        direccion: "Villa Nueva, Guatemala",
        rol: Rol.ADMIN
    },
    {
        id_usuario: 5,
        nombre_usuario: "Luis Hernández",
        telefono_usuario: 74568901,
        correo_cliente: "luis.hernandez@gmail.com",
        contrasena_cliente: "Luis123",
        direccion: "Zona 10, Ciudad de Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 6,
        nombre_usuario: "Sofía Ramírez",
        telefono_usuario: 85679012,
        correo_cliente: "sofia.ramirez@gmail.com",
        contrasena_cliente: "Sofia123",
        direccion: "Amatitlán, Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 7,
        nombre_usuario: "Pedro Castillo",
        telefono_usuario: 96780123,
        correo_cliente: "pedro.castillo@gmail.com",
        contrasena_cliente: "Pedro123",
        direccion: "Zona 15, Ciudad de Guatemala",
        rol: Rol.ADMIN
    },
    {
        id_usuario: 8,
        nombre_usuario: "Gabriela Torres",
        telefono_usuario: 37891234,
        correo_cliente: "gabriela.torres@gmail.com",
        contrasena_cliente: "Gabriela123",
        direccion: "San Miguel Petapa, Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 9,
        nombre_usuario: "José Morales",
        telefono_usuario: 48902345,
        correo_cliente: "jose.morales@gmail.com",
        contrasena_cliente: "Jose123",
        direccion: "Zona 7, Ciudad de Guatemala",
        rol: Rol.USER
    },
    {
        id_usuario: 10,
        nombre_usuario: "Daniela Cruz",
        telefono_usuario: 59013456,
        correo_cliente: "daniela.cruz@gmail.com",
        contrasena_cliente: "Daniela123",
        direccion: "Santa Catarina Pinula, Guatemala",
        rol: Rol.ADMIN
    }
];
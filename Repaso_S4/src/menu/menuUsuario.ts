import { rl } from "../utils/readline"
import { listarUsuarios, buscarUsuario, crearUsuario } from "../service/UsuariosService"
import { Usuarios } from "../models/Usuarios"
import { Rol } from "../models/Rol"

export function menuUsuario() {

    console.log("|***----------*** MENU USUARIO ***----------***|");
    console.log("|---------------------------------------------|");
    console.log("|***---- 1. Listar usuarios            ----***|");
    console.log("|***---- 2. Buscar usuario por ID      ----***|");
    console.log("|***---- 3. Agregar usuario            ----***|");
    console.log("|***---- 0. Salir                      ----***|");
    console.log("|---------------------------------------------|");

    rl.question("Ingrese una opcion: ", (opcion) => {

        switch (opcion) {

            case "1":
                const lista = listarUsuarios();

                if (lista.length === 0) {
                    console.log("No hay usuarios.");
                } else {
                    console.log("===== LISTA DE USUARIOS =====");
                    lista.forEach(usuario => console.log(usuario));
                }

                menuUsuario();
                break;

            case "2":
                rl.question("Ingrese el ID del usuario: ", (id) => {

                    const usuario = buscarUsuario(Number(id));

                    if (usuario) {
                        console.log("Usuario encontrado:");
                        console.log(usuario);
                    } else {
                        console.log("Usuario no encontrado.");
                    }

                    menuUsuario();
                });
                break;

            case "3":
                console.log("|*** --- ===== AGREGAR USUARIO ===== --- ***|");

                rl.question("Nombre: ", (nombre) => {
                    rl.question("Telefono: ", (telefono) => {
                        rl.question("Correo: ", (correo) => {
                            rl.question("Contraseña: ", (contrasena) => {
                                rl.question("Direccion: ", (direccion) => {
                                    console.log("Roles que hay: ADMIN | USER");
                                    rl.question("Rol: ", (rol) => {

                                        const nuevoUsuario: Usuarios = {
                                            id_usuario: 0,
                                            nombre_usuario: nombre,
                                            telefono_usuario: Number(telefono),
                                            correo_cliente: correo,
                                            contrasena_cliente: contrasena,
                                            direccion: direccion,
                                            rol: rol.toUpperCase() === "ADMIN"? Rol.ADMIN : Rol.USER
                                        };

                                        const usuarioCreado = crearUsuario(nuevoUsuario);

                                        console.log("\nUsuario creado:");
                                        console.log(usuarioCreado);

                                        menuUsuario();
                                    });
                                });
                            });
                        });
                    });
                });
                break;

            case "0":
                console.log("Saliendo...");
                rl.close();
                break;

            default:
                console.log("Opcion invalida.");
                menuUsuario();
        }
    });
}
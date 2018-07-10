//setTimeout(() => console.log('Hola Mundo'), 3000);
let getUsuarioById = (id, callback) => { // esta funcion recibe el id de un usuario a buscar en una bd y la funcion callback que realizara cuando encuentre al usuario
    let usuario = {
        nombre: 'Paul',
        id: id
    };
    if (id === 20) {
        callback(`El usuario con el id ${id} no fue encuentrado`, null);
    } else
        callback(null, usuario);
};

// aqui usamos la funcion y mandamos como parametro la funcion callback, es decir lo que se hara luego de que el usuario en bd fue encontrado
getUsuarioById(10, (err, usuario) => {
    if (err)
        return console.log(err);
    console.log('Usuario de la BD encontrado : ', usuario);
});
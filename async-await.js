// primera version
let getNombre = async() => {
    return 'Paul';
}

let getNombreV2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paul');
        }, 3000);
    });
}

/* hacemos que la funcion sea asincrona, aqui el await sirve para que el programa 'espere' a que 
la funcion de getNombreV2 retorne lo prometido y luego de eso continuara la ejecutara el resto del codigo
simulando que todo se ejecute en el mismo hilo de ejecucion y el comportamiento sea sincrono
*/
let saludo = async() => {
    let nombre = await getNombreV2();
    return `Hola ${nombre}`;
}

/*
getNombre()
    .then((nombre) => {
        console.log(nombre);
    })
    .catch((err) => {
        console.log('Ocurrio un error : ', err);
    })
*/

saludo()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((err) => {
        console.log('Ocurrio un error : ', err);
    })
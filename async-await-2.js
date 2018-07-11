// mini-base de datos
let empleados = [{
        id: 1,
        nombre: 'Empleado1'
    },
    {
        id: 2,
        nombre: 'Empleado2'
    },
    {
        id: 3,
        nombre: 'Empleado3'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id);
        if (!empleadoDB)
            reject(`El empleado con el ID ${id} no fue encontrado`);
        else
            resolve(empleadoDB);
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);
        if (!salarioDB)
            reject(`El salario para el empleado ${empleado.nombre} no fue encontrado`);
        else
            resolve(salarioDB);
    });
}

// usamos el await en conjunto con el async para consultar los metodos que retornan promesas
let getInformation = async(id) => {
    let empleado = await getEmployee(id);
    let salario = await getSalario(empleado);
    return `El empleado ${empleado.nombre} tiene como salario ${salario.salario}`;
}

getInformation(3)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((err) => {
        console.log(err);
    });
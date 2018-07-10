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

// esta vez se realizara algo similar a la clase callback-problemas.js pero mediante el uso de promesas

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

getEmployee(10).then((empleado) => {
    console.log('Empleado de la BD enontrado : ', empleado);
}, (err) => {
    console.log(err);
})

let empleado1 = empleados[0];
getSalario(empleado1).then((salarioDB) => {
    console.log(`El salario del empleado ${empleado1.nombre} es ${salarioDB.salario}`);
}, (err) => {
    console.log(err);
});
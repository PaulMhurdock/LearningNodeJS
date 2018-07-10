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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!empleadoDB)
        callback(`El empleado con el ID ${id} no fue encontrado`, null);
    else
        callback(null, empleadoDB);
};

let getSalario = (empleado, callback) => {
    let salario = salarios.find((salario) => salario.id === empleado.id);
    if (!salario)
        callback(`El salario del empleados ${empleado.nombre} no fue encontrado`, null);
    else
        callback(null, {
            nombre: empleado.nombre,
            salario: salario.salario
        });
};

getEmpleado(2, (err, empleado) => {
    if (err)
        console.log(err);
    else
        console.log(empleado);
});

getSalario(empleados[1], (err, result) => {
    if (err)
        console.log(err);
    else
        console.log(result);
});
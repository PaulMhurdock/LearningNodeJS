/* let y var sirven para declarar variables, pero el tiempo que estas viven es diferente, var tiene un alcance en todo el archivo js
y puede ser re-inicializado mulitples veces declarandolo, mientras q let tiene un alcance limitado, en este caso solo dentro del if */
var name = 'Wolverine'; // name 1 : global
if (true) {
    let name = 'Magneto'; // name 2 : dentro del if-block
}
console.log(name);
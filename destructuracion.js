let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    power: 'regeneration',
    getName: function() {
        return `${this.name} ${this.lastname} - power : ${this.power}`;
    }
};

console.log(deadpool.getName());

let { name: deadpoolName, lastname: deadpoolLastname, power: deadpoolPower } = deadpool;
console.log(deadpoolName, deadpoolLastname, deadpoolPower);
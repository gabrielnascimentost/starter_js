//REST

const usuario = {
    nome: 'gabriel',
    idade: 23,
    empresa: 'Viva'
}

const {nome, ...resto} = usuario

console.log(resto)

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)
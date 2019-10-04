const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index) {
   return item + index; 
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total+next;
});

console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function (item) {
    return item === 4;
});

console.log(find);

//-----------------------------Arrow Function

const arr2 = [1,3,4,5,8,9];

const newArr2 = arr.map(item => item*2); 
 
 console.log(newArr2);

 //---------------------------Destruct 

 const usuario = {
     nome: 'Gabriel',
     idade: 23,
     endereco:{
         cidade: 'Juiz de Fora',
         estado: 'Minas Gerais',
     },
 }

 const {nome, idade, endereco: {cidade}} = usuario;

 function nameShow({nome}) {
    console.log(nome);   
 }

 nameShow(usuario)


 //---------------Template Literals

 const nome1 = 'Gabriel';
 const idade1 = 24;

 console.log(`Meu nome é ${nome1} e tenho ${idade1} anos.`);
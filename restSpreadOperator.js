//opção 1

function sum(a, b){
    console.log(arguments);
    return a + b;
}
console.log(sum(5,5,5,2,3));

//opção 2

function sum(a, b){
    var value =0;
    for(i=0; i < arguments.length;i++){
        value += arguments[i];
    }   
     return value;
}
console.log(sum(5,5,5,2,3));var value 

//opção 3

function sum(...arqs){
    return arqs.reduce((acc,value)=> acc + value, 0);
}
console.log(sum(5,5,5,2,3))

//opção 4

//const sum = (...rest) => {

//};
//console.log(sum(5,5,5,2,3));

//opção 5

//const sum = (a,b, ...rest) =>{
 //   console.log(a,b, rest);
//};
//console.log(sum(5,5,5,2,3));

//exemplo 

const multiplicacao = (...arqs)=> arqs.reduce((acc,value)=>acc * value, 1)
console.log(sum(5,5,5,2,3));

//spred operator pega todos os itens do arrays e transforma em parametros

const multiply = (...args) => args.reduce((acc,value)=>acc*value,1);
const soma = (...rest)=> {
    return multiply(...rest);
};
console.log(soma(5,5,5,2,3));

//strings, arrays, leteral objects e objects operaveis

const str = 'Digital innovation One';

function logArgs(...args){
    console.log(args);
}
logArgs(...str);

const arr = [1,2,3,4];
function logArgs(a,b,c){
    console.log(a,b,c);
}
logArgs(...arr);
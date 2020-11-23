console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

/* if(idadeComprador >= 18){

  console.log(`Comprador maior de idade`);
  listaDeDestinos.splice(1,1);

}else if(estaAcompanhada){
    console.log(`Comprador esta acompanhado`);
    listaDeDestinos.splice(1,1);

}else{
  console.log(`Comprador menor de idade, não posso vender`);
} */

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador = 18);

if(idadeComprador >= 18  || estaAcompanhada == true){
  console.log(`Boa Viagem`);
  listaDeDestinos.splice(1,1);
}else{
  console.log(`Comprador menor de idade, não posso vender`);
}

console.log(`Embarque: \n\n`);
if(idadeComprador >= 18 && temPassagemComprada){
  console.log("Boa Viagem");
}else{
  console.log("Você não pode embarcar");
}
console.log(listaDeDestinos);
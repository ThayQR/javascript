console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
const destino = "Slavador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18  || estaAcompanhada == true;
let contador =  0;
let destinoExiste = false;
/* 
while(contador<3){
    if(listaDeDestinos[contador] == destino){
      destinoExiste = true;
      break;
    }
    contador += 1;
} */
for(let i = 0; i < 3; i ++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
    break;
  }
}
console.log('Destino não existe:', destinoExiste);

if(podeComprar && destinoExiste){
  console.log('Boa viagem');
}else{
  console.log('Desculpe tivemos um erro');
}
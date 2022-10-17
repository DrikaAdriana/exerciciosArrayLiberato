 /*   1. Elabore um algoritmo que lê as notas de 10 alunos, e em seguida apresenta a
média das notas informadas.*/

let  listaNotas = [1.0, 5.0, 4.0, 9.0, 5.5, 7.7, 9.5, 3.5, 4.4, 6.0];
function calcularMedia (lista) {
    let media = (lista.reduce((total, numero) => total + numero, 0)).toFixed(2); // comecei do 0
    media/listaNotas.length
    return  media
}
console.log(calcularMedia(listaNotas));




/*
2. Elabore um algoritmo que lê 20 números aleatórios, e em seguida apresenta
somente os pares.*/


let  listaNumeros = [6, 23, 55, 88, 456, 767, 2637, 12, 5868];
let listaDePares 
function buscarPares (listaNumeros) {  
  listaDePares = listaNumeros.filter((e) => e % 2 === 0 )
  return listaDePares
}
console.log(buscarPares(listaNumeros));



/*
3. Elabore um algoritmo que lê o tempo de corrida de 30 corredores (em segundos),
em seguida ele apresenta o tempo do primeiro e do último colocados, seguido da sua
posição.*/

let corredores = [1000, 50000, 6000, 3000, 50000, 60000, 80000, 5300, 25000, 99000, 77000,
6788, 92333, 10050, 767574, 9596847, 646352, 54548, 525251, 6363, 858452, 858858,963363,
879697, 64736473, 9695847, 42534253, 986978, 858452, 99000000000 , 200               
]
 function classificacao (corredores) {
    let primeiroColocado =  Math.min(...corredores)
    const posicao1 = corredores.indexOf(primeiroColocado)
    let ultimoColocado =  Math.max(...corredores)
    const posicao2 = corredores.indexOf(ultimoColocado )
    return (`Primeiro colocado com o tempo: ${primeiroColocado} segundos - Posição: ${posicao1}\nÚltimo colocado com o tempo:  ${ultimoColocado} segundos - Posição: ${posicao2}`)
   
 } 
classificacao(corredores)



  



/*
4. Elabore um algoritmo que lê valores para um vetor de 17 posições, e armazena
em um segundo vetor somente os números primos entre os lidos. Escreva, a seguir, o
vetor original, e o vetor de números primos.*/

const listaDeNumeros= [-7, 7, 88, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30];

const numerosPrimos = listaDeNumeros.filter((elemento) => {
    for (let i = 2; elemento > i; i++) {
        if (elemento % i === 0) {
            return false;
        }
    }
    return elemento > 1;
});
console.log(listaDeNumeros);
console.log(numerosPrimos); 


/*
5. Faça um algoritmo que leia o nome de 10 livros que foram empilhados, e escreva
na ordem em que serão removidos da pilha (contrária à que foram digitados).
ORDEM DE LEITURA
0,1,2,3,4
4 ORDEM DE ESCRITA
4,3,2,1,0
3
2
1
0

*/
let livros = ["Livro Suspense", "Livro de Romance", "Livro de Recitas", "livro de música", "Livro de Matemática", 
"Livro de JavaScript",  "Livro de Exercícios", "Livro de Previsões" , "Livro de Língua Portuguesa", "Livro de Inglês"                             ];
livros.reverse();
console.log(livros); 



/*
6. Elabore um programa que lê valores inteiros para um vetor de 30 posições e o
escreve. Troque, a seguir, somente os números ímpares deste vetor pelo valor “zero”.
Escreva o vetor resultante. Apresente lado a lado os valores do vetor original, e do vetor
resultante.
2 2
3 0
5 0
4 4
8 8

*/
let lista =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

let listaNova  = lista.map(e => (e % 2 == 1)? 0:e )
lista.forEach((e, index) => console.log(e, listaNova[index]))



/*


/*
7. Elabore um programa que leia 50 valores para um vetor A e o escreva. Pesquise,
a seguir, o vetor e:
a) Encontre e escreva o maior valor e sua posição;
b) Encontre e escreva o menor valor e sua posição;
c) Calcule e escreva a média aritmética dos valores lidos;
d) Escreva quantos números são pares;
e) Escreva quantos números são ímpares;
*/

let listaA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 
  44, 45, 46, 47, 48, 49, 50]

let media 
let quantNumPares 
let quantNumImpares 

function verificarValores(lista) {
  let menorNumeroLista = Math.min(...listaA);
  let indice = listaA.indexOf(menorNumeroLista);
  let maiorNumeroLista = Math.max(...listaA);
  let indice2 = listaA.indexOf(maiorNumeroLista);
  let somaDaLista = listaA.reduce((total, numero) => total + numero, 0); 
  media = somaDaLista /listaA.length
  quantNumPares = listaA.filter((e) => e % 2 === 0);
  quantNumImpares = listaA.filter((e) => e % 2 != 0);
              
  
  return  `O menor valor na lista é ${menorNumeroLista} com o indice ${indice}, o maior valor na lista é o ${maiorNumeroLista} com indice ${indice2} 
a media aritmética dos valores somados é ${media} na lista tem ${quantNumPares.length } números pares e ${quantNumImpares.length} números ímpares `
} 
console.log(verificarValores(listaA));




/*
8. Escrever um algoritmo que lê a temperatura de 25 pessoas e as escreve,
colocando um destaque **temp[i]** em todas que forem acima de 38.
*/
let  temperaturCorporal = [35, 40, 35.6, 38.9, 40.8, 36.2, 43.4, 40.0, 36.2, 37.9, 38.6,
43.2, 37.9, 36.8, 39.2, 35.7, 36.8, 39.8, 36.5, 36.8, 37.2, 36.9, 37.8, 36.9, 37.1];
let comFebre = [];

function calculandoTemperatura(lista ){
  for(let i = 0; i < temperaturCorporal.length; i++) {
    if(temperaturCorporal[i] > 38){
      comFebre.push(temperaturCorporal[i])
    }
  }
  return comFebre
}
console.log(calculandoTemperatura(temperaturCorporal));
  
  


/*
9. Elabore um programa que lê 20 notas de uma turma, e armazene em um vetor de
números reais. Crie um vetor de cadeia, e armazene a menção equivalente a cada nota,
na mesma posição. Se a nota for menor que 7, a menção é NA; se a nota for menor que
8, a menção é A; se a nota for maior que 8 a menção é AP. Apresente os dois vetores
lado a lado.
10 AP
9 AP
5 NA
7,5 A
DESAFIO
*/

let lista1 =  [-1, -2, -3, -4, -5, -6,  7.5, 7.1, 7.8, -7, -8, -9, -10, 1, 2, 7.9, 3, 4, 5, 6, 7, 8, 9, 10]
let mencao =  ['NA', 'A', 'AP'] 
let avaliacaoNA 
let avaliacaoA 
let avaliacaoAP 

avaliacaoNA = lista1.filter((e) => e <= 7);
avaliacaoA = lista1.filter((e) => e < 8 && e > 7);
avaliacaoAP = lista1.filter((e) => e >= 8);

  if (avaliacaoNA) {
    avaliacaoNA.forEach((e) => console.log(e, mencao[0]))
  }if (avaliacaoA){
    avaliacaoA.forEach((e) => console.log(e, mencao[1]))
  }if (avaliacaoAP){
    avaliacaoAP.forEach((e) => console.log(e, mencao[2]))
  }
  



/*
10. Elabore um programa para ler valores para dois vetores, a[10] e b[10]. Transfira, a
seguir, os valores lidos para um vetor c[20] e os escreva de maneira ordenada
crescente  */

let vetorA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let vetorB = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
let vetorC = vetorA.concat(vetorB)
console.log(vetorC)



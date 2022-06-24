/*
Desafio: Lanche

Com base na tabela abaixo, escreva um programa que leia o código de um item 
e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

CODIGO ESPECIFICAÇÃO PREÇO
1 Cachorro Quente R$ 4,00
2 X-Salada R$ 4,50
3 X-Bacon R$ 5,00
4 Torradas simples R$ 2,00
5 Refrigerante R$ 1,50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

 
Exemplo de Entrada              	Exemplo de Saída
3 2                                  Total: R$ 10.00
4 3                                  Total: R$ 6.00
2 3                                  Total: R$ 13.50
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let qdt = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//OBS:  No javascript a casa decimal é definida por ponto. Exemplo: 1.50

let price = 0;

    if (X ==  1) {
      price  =  qdt * 4 ;
    }
    else if (X == 2) {
      price  =   qdt * 4.50;   
      }
    else if (X ==  3   ) {
      price  =   qdt* 5;
    }
    else if (X ==  4) {
      price  =    qdt*2 ;
    }
    else if (X ==  5) {
      price  =    qdt*1.50;
    }
    print( "\n Total: R$ "  + price.toFixed(2));
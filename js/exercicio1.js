// 8. Escreva um algoritmo que receba 4 notas. Calcule a média das notas e mostre na tela. Se a média for maior ou igual a 6, escreva "Aprovado", senão escreva "Reprovado".


   let nota1 = 5, nota2 = 7, nota3 = 8, nota4 = 9, media

   //   calculo das variaveis

     media = (nota1 + nota2 + nota3 + nota4) / 4;

   //   finalizaçao 
     console.log("media", (media.toFixed(1)));


             if (media >= 6){
               console.log("aprovado");

             if (media > 3 && media < 6) {
                  console.log("recuperaçao");
                  
               } else { console.log("reprovado");
               
                  
               }
               
             }
     
// 		Saída:
// 			Média: 6.7
// 			Aprovado!

/*
 ** jogo da advinhação **

 apresente a mensagem ao usuário:
 "advinhe o número que estou pensando? está entre 0 e 10" 

 crie uma lógica para gerar um número aleatório 
 e verificar se o número digitado é o mesmo que o aleatório
 gerado pelo sistema 

 enquanto o usuário não adivinhar o número, mostrar a mensagem:
 "erro, tente novamente" 

 caso o usuário acerto o número, apresentar a mensagem:
 "parabéns! você adivinhou o número em x tentativas" 

 substitua o "x" da mensagem, pelo número de tentativas
*/ 

let result = prompt("Advinhe o número que estou pensando? Está entre 0  10") 
const randomNumber = Math.round(Math.random() * 10) 

let xAttempts = 1

while(Number(result) != randomNumber) { 
  result = prompt("Erro, tente novamente:") 
  xAttempts++ }

alert(`Parabéns! O número que eu pensei foi ${randomNumber} 
e você adivinhou o número em ${xAttempts} tentativas`)  
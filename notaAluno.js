let nota1 = parseFloat(prompt("Por favor, insira a primeira nota:"))
let nota2 = parseFloat(prompt("Por favor, insira a segunda nota:"))
let nota3 = parseFloat(prompt("Por favor, insira a terceira nota:"))
let nota4 = parseFloat(prompt("Por favor, insira a quarta nota:"))

let media = (nota1+nota2+nota3+nota4)/4

// Verifica se o número inserido é válido
if (!isNaN(nota1, nota2, nota3, nota4)) {
    if(media >= 7){
        document.write("A média é " + media, ". Parabéns você foi aprovado!");
    } else{
        document.write("A média é " + media, ". Você foi reprovado!")
    }
    
} else {
    // Exibe uma mensagem de erro na tela
    document.write("Você não inseriu um número válido.");
}

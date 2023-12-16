
// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.


//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console


const medidaLado1 = parseInt(prompt("Informe a medida do primeiro lado:"))
const medidaLado2 = parseInt(prompt("Informe a medida do segundo lado:"))
const medidaLado3 = parseInt(prompt("Informe a medida do terceiro lado:"))

if (medidaLado1 == medidaLado2 && medidaLado2 == medidaLado3) {
    alert ("Triângulo Equilátero")
} else {
    if (medidaLado1 == medidaLado2 || medidaLado2 == medidaLado3 || medidaLado1 == medidaLado3) {
        alert ("Triãngulo Isósceles")

    } else {
        alert ("Triângulo Escaleno")
        
    }
    
}
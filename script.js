let nomes = []
let notas = []
let soma = 0 


for(let i = 0; i< 5 ;i++){
    let nome = prompt('Digite o nome do aluno  :')
    let nota = parseFloat(prompt(`Digite a nota do aluno ${nome}: `))
    nomes.push(nome)
    notas.push(nota)

    soma += nota
}

let media = soma/5

for(i = 0; i<5; i++){
    if(notas[i] < media){
        console.log(`O aluno ${nomes[i]} está abaixo da média.`)
    }
}
        
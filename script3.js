let A = []
let B = []
let C = []

for(let i = 0; i < 5; i++){
    let valor = parseFloat(prompt('Digite um valor'))
    A.push(valor)
}
for(let i = 0; i < 5; i++){
    let random = Math.floor(Math.random() * 10) + 1
    B.push(random)
}
for(let i = 0; i < 5; i++){
    C.push(A[i] * B[i])

}
console.log('Vator C: ' + C)
let nums = []

for(let i = 0; i < 10; i++){
    let num = parseFloat(prompt('Digite um número: '))
    nums.push(num)
}

for(let i = 0; i <10; i++){
    if(nums[i] < 0){
        console.log(`Índice: ${i},número negativo: ${nums[i]}`)
    }
}
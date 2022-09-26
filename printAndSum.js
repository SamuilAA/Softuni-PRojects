function printAndSum(n1, n2){
    
    
    let sum = 0
    let outpu = ``

    for(let i = n1; i <= n2; i++){
        if(i === n2){
            outpu += `${i}`
        }else{
            outpu += `${i} `
        }
        sum += i

        
    }
    console.log(outpu)

    console.log(`Sum: ${sum}`)
}
printAndSum([5, 10])
function rounding(input) {
    let num = input[0]
    let d = input[1]
    if(d > 15){
        d = 15
    }
    let number = num.toFixed(d)
    console.log(parseFloat(number))
    
}
rounding([3.1415926535897932384626433832795, 2])
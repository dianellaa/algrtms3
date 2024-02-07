function Factorialize (n){
    let factor1 = 1 
    for(let i = n ; i >=1 ; i--){
        factor1*=i
    }
    return factor1
}
console.log(Factorialize(0))
console.log(Factorialize(10))
console.log(Factorialize(20))

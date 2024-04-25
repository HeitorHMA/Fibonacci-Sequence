function fibs(v){
    const fibsSequence = [0,1];
    for(let i = 1; i <= v; i++){
        fibsSequence.push(fibsSequence[i] + fibsSequence[i - 1])
    }
    
    console.log(fibsSequence)

}

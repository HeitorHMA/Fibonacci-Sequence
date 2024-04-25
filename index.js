//Recursive Fibonacci Sequence//
let i = 1
let fibsSequence = [0,1];
function fibsRec(v){
    if (i <= v){
        fibsSequence.push(fibsSequence[i] + fibsSequence [i - 1]);
        i++
        fibsRec(v)
    }
    else{
        return
    }
}
console.log(fibsSequence)

//Iteration Fibonacci Sequence//
function fibs(v){
    const fibsSequence = [0,1];
    for(let i = 1; i <= v; i++){
        fibsSequence.push(fibsSequence[i] + fibsSequence[i - 1])
    }
    
    console.log(fibsSequence)

}
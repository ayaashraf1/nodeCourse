// 1 1 2 3 5 8 13 21 ...
function generateFibonacci(lengthOfNumbers){
    let x = 1;
    let y = 1;
    let sequence = [ x , y ];

    Array(lengthOfNumbers).fill().forEach(()=>{
        let sum = x + y;
        sequence.push(sum);
        x = y;
        y = sum;
    });
    return sequence;
}

console.log(generateFibonacci(100));
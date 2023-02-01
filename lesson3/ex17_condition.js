/**
 * 돈이 5000 초과면 택시를 탄다.
 * 돈이 2000 초과면 버스를 탄다.
 * 돈이 2000 이하이면 걸어간다.
 */
let money = 10000;

// answer1
if(money > 5000){
    console.log('택시를 탄다.');
} else{
    if(money > 2000) {
        console.log('버스를 탄다.');
    } else {
        console.log('걸어간다.');
    }
} 

// answer2
if(money > 5000){
    console.log('택시를 탄다.');
} else if(money > 2000) {
    console.log('버스를 탄다.');
} else {
    console.log('걸어간다.');
}

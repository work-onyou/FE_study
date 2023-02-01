// answer1
function getTransportation(money){
    if(money > 5000){
        console.log('택시를 탄다.');
    } else if(money > 2000) {
        console.log('버스를 탄다.');
    } else {
        console.log('걸어간다.');
    }
}

// answer2
const getTransportation = function(money){
    if(money > 5000){
        console.log('택시를 탄다.');
    } else if(money > 2000) {
        console.log('버스를 탄다.');
    } else {
        console.log('걸어간다.');
    }
}

// answer3
const getTransportation = (money) => {
    if(money > 5000){
        console.log('택시를 탄다.');
    } else if(money > 2000) {
        console.log('버스를 탄다.');
    } else {
        console.log('걸어간다.');
    }
}

getTransportation(10000)
// getTransportation(5000)
// getTransportation(2000)
// getTransportation(100)
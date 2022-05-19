// Code your solutions in this file
const writeCards = (arr, eventName) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArr;
}

const countDown = x => {
    while(x >= 0){
        console.log(x);
        x--;
    }
}
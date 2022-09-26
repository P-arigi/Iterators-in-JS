let arr=[2,4,6,8];
let array=arr.reduce(function(acc,next){
    return acc+next;
},5);
console.log(array)

/*
In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
*/
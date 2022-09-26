let arr=[2,4,6,8];
let array=arr.reduce(function(acc,next){
    return acc+next;
})
console.log(array)

/* 20 (When no second argument is supplied to reduce, the `acc` starts at the first value in the array,
 i.e. 2. In this case, we simply get the sum of all values in the array */

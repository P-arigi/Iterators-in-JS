let arr=[1,2,3,4]
let squaredValues=arr.map(function(value,index,arr){
    return value*2
})
console.log(squaredValues)

let tripledValues = arr.map(function(val,index,arr){
    return val*3;
});
console.log(tripledValues);
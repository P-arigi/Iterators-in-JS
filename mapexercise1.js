function doubleArray(arr){
    return arr.map(function(value,index,array){
        return value*index
    })
}
console.log(doubleArray([1,2,3]));
console.log(doubleArray([5,10,15]));

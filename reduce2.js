let arr = [1,2,3,4];
let array=arr.reduce(function(acc,next){
    if(next >= 2){
        acc['key' + next] = next;
    }
    return acc;
},{});
console.log(array)
// Think about what acc and next are for each step in the iteration!
// Ultimately, this reduce will return the following:
// Object {key2: 2, key3: 3, key4: 4}
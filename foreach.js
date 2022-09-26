let arr=[4,3,2,1,0];
arr.forEach(function(value,index,arr){  //It will take 3parameters
    console.log(value)
    
});

arr.forEach(function(value,index,arr){  
    console.log(index)
    
});

let doubleValue=arr.forEach(function(value,index,arr){
    return value*2;//It will give undefined

})
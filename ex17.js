function joinArr(arr,arr2){
    for(let i=0;i<arr2.length;i++){
        arr.push(arr2[i]);
    }
    return arr;
}

// test 1
console.log(joinArr(['Hello'],['appleSeeds','Bootcamp'])); 

//test 2
arr = ['This'];
arr2 = ['Is','a','Test'];
joinArray = joinArr(arr,arr2);
console.log(joinArray);

//test 3
arr = [];
arr2 = ['works','if','one','empty','?'];
joinArray = joinArr(arr,arr2);
console.log(joinArray);

//test 4
console.log(joinArr([],[])); 
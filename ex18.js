function reverse (arr){  
    let middle = arr.length/2;
    
    for(let i=0;i<middle;i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr
}

//tests
console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,2,3,4,5,6]));
console.log(reverse([1,2]));
console.log(reverse([1,2,3]));


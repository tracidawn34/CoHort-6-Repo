// Finish the function to filter out all odd numbers and all even numbers from an array of numbers.


// Example
// filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10]) should return [2,4,6,8,10]

// Hint


// Pseudo Code
    



function filterOddsAndEvens(arr, arr2){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] % 2 === 0){
            //console.log(arr[i])
        }
 } for(let i = 0; i < arr2.length; i++){
    if(arr2[i] % 2 !== 0){
        //console.log(arr2[i])
        console.log(arr[i], arr2[i])
    }
 }
}


console.log(filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10]



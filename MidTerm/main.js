// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num){
    if(num <= 15){
return "You can't drive."
    } else if(num >= 16 && num <= 17){
        return "You can drive but not vote."
}else if(num >= 18 && num <= 24){
    return "You can vote but not rent a car."
} 
 else{
    return "You can do pretty much anything."}
}


function oddIndices(arr){
//let result = []
for(let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) {
      //result.push(arr[i]);
     // console.log(arr[i])
    }return arr[i]
    
}


function numOddValues(arr){
    let result = []
    
    }

    function averageStringLength(arr){
let average = 0
for(let i = 0; i < arr.length; i++){
    let currentNum = arr[i]
    average += currentNum
}
average = average / arr.length
return average
    }

    function firstPunctuationIndex(str){
        
        
        
        //let result = ""
        //for (let i = 0; i < str.length; i++) {
           // let char = str[i]
           // if (char === "?" || char === "." || char === "!") {
            //  } result += char
         // } return result
          
    }

    function getPlace(num1, num2){

    }
    
    function addToObj(obj, person, obj2){
       
    }

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};

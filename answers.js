/*
function isPositive(num){

    if (num >= 0){
        positiveNums.push(num);
    }
    
}
function printPositives(nums){
    nums.forEach(isPositive);
}
var positiveNums = [];
printPositives([1,-1,2,3,-3,4,5,6,7,-4,-56,8,112,3323,54,2343,76,-2,-3,-56]);
console.log(positiveNums);



function filterPositives(num){
    return num >= 0;
}

function getPositives(nums){
    
    //filteredResults.push(nums.filter(filterPositives));
    filteredResults = nums.filter(filterPositives);
}

var filteredResults = [];
getPositives([1,-1,2,3,-3,4,5,6,7,-4,-56,8,112,3323,54,2343,76,-2,-3,-56]);
console.log(filteredResults);



function printNumber(num){
    console.log("a positive number" + num);
}

function filterPositives(num){
    return num >= 0
}

function printPositives(nums){
    nums.filter(filterPositives).forEach(printNumber);
}


printPositives([1,-1,2,3,-3,4,5,6,7,-4,-56,8,112,3323,54,2343,76,-2,-3,-56]);




function filterArray(filterFunction, theArray){
    return theArray.filter(filterFunction);
}

var x = filterArray(function (num){
    return num >= 5;
}, [1,2,3,4,5,6,7,8,9,4,3,21,6,454,2,6,7,89,-5,-3,-200,4,3,4,3,4,-4,6,7]);

console.log(x)
*/

function findLongestWord(longest, thisWord){
    if (longest.length < thisWord.length){
        longest =  thisWord;
    }
    return longest;
    
}

function longestWord(str){
    var strArray = str.split(" ");
    var longWord = strArray.reduce(findLongestWord, "");
    console.log(longWord);
}

longestWord("the quick brown fox jumped over the lazy goats so fast loud noisesssssSSSS");
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


function findVowels(total, currentLetter){
    if (currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u"){
        total++;
    }
    return total;
}

function countVowels(str){
    var letterArray = str.split("");

    var amountOfVowels = letterArray.reduce(findVowels, 0);
    console.log(amountOfVowels);
}

countVowels("there are a lot of vowels in this sentence");


function findHighestNumber (highest, x){
    if (highest < x){
        highest = x;
    }
    return highest;
}

function findLowestNumber (lowest, x){
    if (lowest > x){
        lowest = x;
    }
    return lowest;
}


function highLow(theArray){
    var tempObject = {}
    tempObject.highest = theArray.reduce(findHighestNumber, -Infinity);
    tempObject.lowest = theArray.reduce(findLowestNumber, Infinity);
    return tempObject;
}

var highLowNum = highLow([1,2,3,4,5,6,84,-200,1111, -8962]);
console.log(highLowNum);




var theArray = [4,3,2,1,6,9,-65,-31,44,532];
var highLowTwoObject = theArray.reduce(function(obj, num){
    if (num > obj.secondHighest){
        obj.secondHighest=num;
        if (num > obj.highest){
            obj.secondHighest = obj.highest; 
            obj.highest = num;
        }
    }
    
    if (num < obj.secondLowest){
        obj.secondLowest=num;
        if (num < obj.lowest){
            obj.secondLowest = obj.lowest; 
            obj.lowest = num;
        }
    }
    
    return obj;
}, {highest: -Infinity,
    secondHighest: -Infinity,
    lowest: Infinity,
    secondLowest: Infinity
})
console.log(highLowTwoObject);


*/


// 

function countChars(str){
    var strArray = str.split("");
    var obj = {};
    
    
    
    obj = strArray.reduce(function(acc, char){
        if (char != " "){
            if(acc[char]) {
                acc[char] += 1
            } else {
                acc[char] = 1
            }
        }
        return acc;
        
    }, {})
    
    console.log(obj)

    
} 

countChars("abbcccddddeeeeeffffffgggggggg");


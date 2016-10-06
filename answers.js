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


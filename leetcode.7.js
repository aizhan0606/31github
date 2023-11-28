//Как найти непарное число в массиве

const input = [5, 1, 2, 1, 2];

const singleNumber1 = function(nums){
   let uniq = new Set();
   let uniqSum = 0;
   let numSum = 0;

   for (let i = 0; i < nums.length; i++){
    const current = nums[i];

    if(!uniq.has(current)){
        uniq.add(current);
        uniqSum += current;
    }
    numSum += current;
   }
   return uniqSum * 2 - numSum;

};

console.log(singleNumber1(input));
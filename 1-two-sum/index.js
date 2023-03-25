var twoSum = function(nums, target) {
  let currentIndex=0
  if(nums.length<3){
    return [0,1]
  }
  while(currentIndex<nums.length){
    let targetResult=target-nums[currentIndex]
    nums[currentIndex]=null
    if(nums.indexOf(targetResult)!=-1){
      let elem2=nums.indexOf(targetResult)
      return [currentIndex,elem2]
    }
    currentIndex++
  }
};


let nums = [2,7,11,15]
let target = 9

twoSum(nums,target)
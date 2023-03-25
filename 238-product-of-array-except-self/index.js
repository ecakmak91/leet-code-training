let productExceptSelf = function(nums) {
  let result=1
  let zeroCount=0
  for(element of nums){
    if(element!=0){
      result*=element
    }else{
      zeroCount++
    }
    
  }
  let arr= new Array(nums.length)
  if(zeroCount>1){
    arr.fill(0)
  }else if(zeroCount==1){
    arr= arr.fill(0)
    arr[nums.indexOf(0)]=result
  }else{
    arr= arr.fill(result)
    for(let i=0;i<nums.length;i++){
      arr[i]=arr[i]/nums[i]
    }
  }
  return arr;
};


let nums = [-1,1,0,-3,3]
productExceptSelf(nums)
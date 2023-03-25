let containsDuplicateV1 = function(nums) {
    let arr=new Set(nums)
    return arr.size==nums.length ? false : true
};

let containsDuplicateV2 = function(nums) {
  let result=false;
  while(nums.length>0){
    let tmpElem=nums.shift()
    if(nums.indexOf(tmpElem)!=-1){
      result=true
      break
    }
  }
  return result
};


let arr = [1,2,3,4,1]

console.log(containsDuplicateV2(arr))
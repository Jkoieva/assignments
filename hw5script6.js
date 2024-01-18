let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let nums3 = nums1.concat(nums2)

const result = nums3.filter((int) => int > 0);
console.log(result)

result.sort((a,b)=>a-b);
console.log(result);






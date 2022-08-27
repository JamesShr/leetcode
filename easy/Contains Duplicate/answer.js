
var containsDuplicate = function (nums) {
    const numsObj = {};
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (!numsObj[nums[i]]) {
            numsObj[nums[i]] = true
        }else{
            i = nums.length;
            result = true
        }
    }
    return result;
};


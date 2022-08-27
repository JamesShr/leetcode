
 var productExceptSelf = function(nums) {
    let hasZero = 0;
    let total = 1;
    nums.map((num) => {
        if (num === 0) {
            hasZero++
        } else {
            total = total * num
        }
        return num
    });
    if (hasZero > 1) {
        return nums.map((num) => {
            return 0
        });
    }
    if (hasZero === 1) {
        return nums.map((num) => {
            if (num === 0) {
                return total
            }
            return 0
        });
    }
    return nums.map((num) => {
        return total / num
    });
};
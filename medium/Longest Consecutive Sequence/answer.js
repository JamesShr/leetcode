var longestConsecutive = function (nums) {
    if (!nums.length) { return 0 }
    let count = 1;
    let maxCount = 1;
    nums.sort((a, b) => { return a - b })
    for (let i = 0; i < nums.length; i++) {
      if ((nums[i] + 1) === nums[i + 1]) {
        count++
        if (count > maxCount) {
          maxCount = count
        }
      } else {
        if (nums[i] !== nums[i + 1]) {
          count = 1;
        }
      }
    }
    return maxCount
  };
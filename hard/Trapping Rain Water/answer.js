var trap = function (height) {
    let water = 0;
    let leftIdx = 0;
    let leftValue =  height[leftIdx];
    let rightIdx = height.length-1;
    let rightValue = height[rightIdx];

    for (let i = 0; i < height.length; i++) {
        if (height[i]) {
            if (height[i] >= leftValue) {
                // cal water 
                for (let x = leftIdx + 1; x < i; x++) {
                    water = water + (leftValue - height[x])
                }
                leftValue = height[i]
                leftIdx = i

            }
        }
    }

    if (leftIdx !== (rightIdx)) {
        for (let i = (rightIdx); i >= leftIdx; i--) {
            if (height[i]) {
                if (height[i] >= rightValue) {
                    // cal water 
                    for (let x = rightIdx; x > i; x--) {
                        water = water + (rightValue - height[x])
                    }
                    rightValue = height[i]
                    rightIdx = i
                }
            }
        }
    }
    return water;
};
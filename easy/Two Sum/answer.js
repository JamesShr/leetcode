var twoSum = function(nums, target) {
    let a1;
    let a2;
    const numsTable = {};
    for(let i=0;i<nums.length;i++){
        if(!numsTable[nums[i]]){
            numsTable[nums[i]] = [i];
        }else{
            numsTable[nums[i]].push(i)
        }
    }
    for(let x=0;x<nums.length;x++){
        const result = target - nums[x];
        if(numsTable[result]){
            if(result===nums[x]){
                if( numsTable[result][1]!==undefined){
                    a1 = numsTable[result][0];
                    a2 = numsTable[result][1];
                    x = nums.length
                }
            }else{
                a1 = numsTable[nums[x]][0];
                a2 = numsTable[result][0];
                x = nums.length
            }
            
        }
    }
    return [a1,a2].sort(function(a, b) {
        return a - b;
    });
};
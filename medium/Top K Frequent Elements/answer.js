var topKFrequent = function (nums, k) {
    const calObject = {}
    nums.map((num) => {
        if (!calObject[num]) {
            calObject[num] = 1
        } else {
            calObject[num]++
        }
        return num;
    });
    const calResult = Object.keys(calObject).map((key) => { return { key, counts: calObject[key] } })
    calResult.sort((a, b) => {
        if (a.counts > b.counts) return -1;
        if (a.counts < b.counts) return 1;
        return 0; 
    })
    calResult.splice(k)
    return calResult.map((r)=>{return parseInt(r.key)})
};
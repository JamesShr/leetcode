var twoSum = function (numbers, target) {
    let t1, t2;
    const numObj = {}
    numbers.forEach((num, idx) => {
      if(!numObj[num]){
        numObj[num] = [idx + 1]
      }else{
        numObj[num].push(idx + 1);
      }
    });
    numbers.forEach((num, idx) => {
      if (numObj[target - num]) {
        if (numObj[target - num].length > 1) {
          t1 = numObj[target - num][0];
          t2 = numObj[target - num][1];
        } else {
          if (numObj[target - num][0] > idx + 1) {
            t1 = idx + 1;
            t2 = numObj[target - num][0]
          } else {
            t2 = idx + 1;
            t1 = numObj[target - num][0]
          }
        }
  
      }
    });
    return [t1, t2];
  };
var isPalindrome = function (s) {
    let front = '';
    let back = '';
    s.split('').map((e) => {
      if(
        (e.charCodeAt(0) >= 48 && e.charCodeAt(0) <= 57)||
        (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90)||
        (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122)
      ){
        front = front + e.toLowerCase();
        back = e.toLowerCase() + back;
      }
    })
    return front === back
  };
var isAnagram = function (s, t) {
    const sortObject = {};
    [s, t].map((str) => {
        const sortArr = str.split('').sort((a, b) => { return a.charCodeAt(0) - b.charCodeAt(0) });
        let sortString = '';
        sortArr.forEach(s => {
            sortString = sortString + s
        });
        if (!sortObject[sortString]) {
            sortObject[sortString] = [str]
        } else {
            sortObject[sortString].push(str)
        }
        return sortString
    });
    return Object.keys(sortObject).length === 1
};
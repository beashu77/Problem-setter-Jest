 function prime(arr) {
  
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      ans.push(arr[i]);
    }
  }
 return ans;
}

module.exports = prime;

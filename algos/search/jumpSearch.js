function jumpSearch(arr, item) {
  let len = arr.length;
  let blocklen = Math.floor(Math.sqrt(len));
  let temp = arr;

  for (let i = 0; i < len; i + blocklen) {
    if (temp[0] === item) return true;
    let removeBlock = temp.slice(0, blocklen);
    temp = temp.slice(blocklen);
    if (temp[0] > item) {
      return linearSearch(removeBlock, item);
    }
  }
  return false;
}

function linearSearch(arr, item) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(jumpSearch(arr, 9));

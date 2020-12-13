function merge(arr) {
  arr = arr.map((el) => [el]);
  let wrapperArr = [];

  while (wrapperArr.length != 1) { 
    wrapperArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      wrapperArr.push(arrange(arr[i], arr[i + 1]));
    }
    arr = wrapperArr;
  }
  return arr[0];
}

function arrange(arr1, arr2) {
  let arranged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      arranged.push(arr2.shift());
    } else {
      arranged.push(arr1.shift());
    }
  }

  if (arr1.length > 0) arranged.push(...arr1);
  if (arr2.length > 0) arranged.push(...arr2);

  return arranged;
}

let arr = [52, 37, 63, 14, 17, 8, 6, 25];
console.log(merge(arr));




/* 
[52, 37, 63, 14, 17, 8, 6, 25] => [52, 37, 63, 14, 17, 8, [6], [25]]


*/



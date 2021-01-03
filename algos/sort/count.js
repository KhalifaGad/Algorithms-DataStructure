function countSort(arr) {
  let max = arr[0];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let countArr = new Array(max + 1).fill(0);
  let sorted = new Array();

  for (let i = 0; i < len; i++) {
    const item = arr[i];
    countArr[item]++;
  }

  // console.log(countArr)
  for (let i = 1; i <= max; i++) {
    countArr[i] = countArr[i] + countArr[i - 1];
  }

  for (let i = 0; i < len; i++) {
    const item = arr[i];
    // console.log(countArr[item], sorted[countArr[item]])
    sorted[countArr[item]] = item;
    countArr[item] = countArr[item] - 1;
  }

  // console.log(countArr)
  console.log(sorted, sorted.length);
}

countSort([0, 3, 3, 3, 8, 5, 3, 5, 3, 3, 7, 10, 10], 3, 10);

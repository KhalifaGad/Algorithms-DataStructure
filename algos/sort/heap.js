// max heap
function heapify(arr, p) {
  let max = p;
  let l = 2 * p + 1;
  let r = 2 * p + 2;
  let maxLeaf = r;
  const len = arr.length;
  if (l <= len && arr[maxLeaf] < arr[l]) {
    maxLeaf = l;
  }
  if (maxLeaf <= len && arr[max] < arr[maxLeaf]) {
    swap(arr, maxLeaf, max);
    max = maxLeaf;
  }
  if (max != p) {
    return heapify(arr, max);
  }
  return arr;
}
function swap(arr, indexA, indexB) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
function heapSort(arr) {
  let sortedArr = [];
  // create heap
  const lastNonLeafIndex = Math.floor(arr.length / 2) - 1;
  for (let i = lastNonLeafIndex; i >= 0; i--) {
    arr = heapify(arr, i);
  }
  // end of create heap
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    const removed = arr.pop();
    sortedArr.push(removed);
    arr = heapify(arr, 0);
  }
  return sortedArr;
}

let arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];
console.log(heapSort(arr));

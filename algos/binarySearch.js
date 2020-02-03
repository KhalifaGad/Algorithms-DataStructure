/* 
Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
Begin with an interval covering the whole array.
    - If the value of the search key is less than the item in the middle of the interval,
      narrow the interval to the lower half.
    - Otherwise narrow it to the upper half.
    - Repeatedly check until the value is found or the interval is empty.
*/
// arr must be sorted array, it returns -1 if not exist and 1 if exist
function binarySearch(arr, val){
    if(arr.length == 0) return -1
    if(val == arr[Math.floor(arr.length/ 2)]) return 1 
    if(val > arr[Math.floor(arr.length/ 2)]) 
        return binarySearch(arr.slice(Math.floor(arr.length/ 2) + 1), val)
    if(val < arr[Math.floor(arr.length/ 2)]) 
        return binarySearch(arr.slice(0, Math.floor(arr.length/ 2)), val) 
}

console.log(binarySearch([1,2,3,4,5,6,7], 4))

// next step is to track the index
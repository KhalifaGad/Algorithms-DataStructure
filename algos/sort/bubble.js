/* 
  O(n^2)
*/
function bubbleSearch(arr){
  for(let i = 0; i < arr.length; i++) {
    for(j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSearch([2,45,6,1,2,3,6,7,8,9]))

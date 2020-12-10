function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = i; j >= 0; j--) {
      if(arr[j] < arr[j - 1] ){
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp  
      }
    }
  }
  return arr;
}
console.log(insertion([1, 3, 7, 6, 5, 8, 2, 9]));

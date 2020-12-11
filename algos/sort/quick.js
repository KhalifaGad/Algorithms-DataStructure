function quick(arr){
  if(arr.length <= 0) return []

  let len = arr.length
  let pivot = arr.pop()
  let right = [], left = []

  for(let i = 0; i < len - 1; i++){
    if(pivot > arr[i]){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quick(left), pivot, ...quick(right)]
}

let arr = [52, 37, 63, 14, 17, 8, 6, 25]
console.log(quick(arr))

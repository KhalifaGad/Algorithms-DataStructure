/* 
linear search or sequential search is a method for finding an element within a list.
It sequentially checks each element of the list until a match is found 
or the whole list has been searched
*/

// The time complexity is O(n).
// Worst-case space complexity: O(1) iterative
// Best-case performance: O(1)


function linearSearch(arr, searchingKey, index = 0) {
    if (!arr.length) return -1
    const [head, ...tail] = arr
    return head == searchingKey ?
        index : linearSearch(tail, searchingKey, index + 1)
}

console.log(linearSearch('hello world', 'w'))
const readline = require('readline')

/* 
linear search or sequential search is a method for finding an element within a list.
It sequentially checks each element of the list until a match is found 
or the whole list has been searched
*/

// The time complexity is O(n).
// Worst-case space complexity: O(1) iterative
// Best-case performance: O(1)


function linearSearch(arr, searchingVal, index = 0) {
    if (!arr.length) return -1
    const [head, ...tail] = arr
    return head == searchingVal ?
        index : linearSearch(tail, searchingVal, index + 1)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Hey this is linear search \nEnter the array:', (arr) => {
    rl.question('Enter searching value:', (searchingVal) => {
        rl.question('Starting index (default 0)', (index = 0) => {
            if (!index) index = 0
            console.log(linearSearch(JSON.parse(arr), searchingVal, index))
            process.exit()
        })
    })
})
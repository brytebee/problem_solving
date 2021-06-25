function chunkArrayInGroups(arr, size) {
    const output = [];
    for (let i = 0; i < arr.length; i += size) {
        output.push(arr.slice(i, i + size))
    }
    console.log(output);
}

function chunkArrayInGroups2(arr, size) {
    const result = [];
    while (arr.length > 0) {
        result.push(arr.splice(0, size))
    }
    console.log(result);
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 3); //[ [ 'a', 'b', 'c' ], [ 'd' ] ]
chunkArrayInGroups(["a", "b", "c", "d"], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // [[0, 1, 2, 3], [4, 5]]

chunkArrayInGroups2(["a", "b", "c", "d"], 3); // [ [ 'a', 'b', 'c' ], [ 'd' ] ]
chunkArrayInGroups2(["a", "b", "c", "d"], 2); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 2) // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 4) // [[0, 1, 2, 3], [4, 5]]


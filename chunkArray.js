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
  
chunkArrayInGroups(["a", "b", "c", "d"], 3);
chunkArrayInGroups2(["a", "b", "c", "d"], 2);
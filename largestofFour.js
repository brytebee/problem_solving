// Sort an array of arrays
// Separate the biggest number in each 
// array to a new array

function largstofFour(arr) {
    let output = [];
    for (var i = 0; i < arr.length; i++){
        arr[i].sort((a, b) => a - b);
        output.push(arr[i][arr[i].length - 1]);
    }
    console.log(output);
}

function largstofFour2(arr) {
    let output = [];
    for (var i = 0; i < arr.length; i++){
        let largestEach = -10000000;
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > largestEach){
                largestEach = arr[i][j];
            }
        }
        output.push(largestEach);
    }
    console.log(output);
    return (output);
}

largstofFour2([[17, 23, 25, 12], 
    [25, 7, 34, 48], 
    [4, -10, 18, 21], 
    [-72, -3, -17, -10]]);
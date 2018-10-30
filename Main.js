let land = [2, 1, 5, 0, 3, 4, 7, 2, 3, 7, 1, 0];


let volume;
let leftLand;
let rightLand;
let localMax;

function getLastMaxIndex(array) {
    let landMax;
    let maxArrayIndex = [];
    let lastMaxIndex;

    landMax = (Math.max(...array));

    array.forEach(function (item, index) {
        if (item === landMax) {
            maxArrayIndex.push(index)
        }
    });
    lastMaxIndex = maxArrayIndex[maxArrayIndex.length - 1]

    return lastMaxIndex
}

console.log('lastMaxIndex', getLastMaxIndex(land));


/*for (let i = 0; i < land.length; i++) {
    if (land[i] <= land[i + 1]) {
        localMax = land[i + 1]
    }
}


console.log(localMax);*/

let land = [2, 1, 5, 0, 3, 4, 7, 8, 2, 3, 7, 8, 3, 8, 6, 2, 5, 1, 0];


let volume;
let leftLand;
let rightLand;
let localMax;
let summVolume = 0;

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

leftLand = land.slice(0, getLastMaxIndex(land) + 1);
rightLand = land.slice(getLastMaxIndex(land), land.length + 1);
console.log('leftLand', leftLand);
console.log('rightLand', rightLand);


localMax = 0;
for (let i = 0; i < leftLand.length; i++) {
    if (leftLand[i] !== Infinity) {
        if (localMax < leftLand[i])
            localMax = leftLand[i];
        console.log('localMax', localMax);

        if (localMax >= leftLand[i]) {
            volume = localMax - leftLand[i]
        }
        summVolume += volume;
        console.log('volume', volume);
        console.log('summVolume', summVolume)
    }

}


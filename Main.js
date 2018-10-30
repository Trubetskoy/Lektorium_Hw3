
function countingMountRainVolume(land) {
    let volume;
    let leftLand;
    let rightLand;
    let summVolume = 0;
    let leftMax;
    let rightMax;

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
    rightLand.reverse();
    console.log('leftLand', leftLand);
    console.log('rightLand', rightLand);

    leftMax = 0;
    for (let i = 0; i < leftLand.length; i++) {
        if (leftMax < leftLand[i])
            leftMax = leftLand[i];
        console.log('localMax', leftMax);
        if (leftMax >= leftLand[i]) {
            volume = leftMax - leftLand[i]
        }
        summVolume += volume;

    }
    console.log('LeftVolume', summVolume);

    rightMax = 0;
    for (let i = 0; i < rightLand.length; i++) {
        if (rightMax < rightLand[i]) {
            rightMax = rightLand[i]
        }
        console.log('rightMax', rightMax);
        if (rightMax >= rightLand[i]) {
            volume = rightMax - rightLand[i]
        }
        summVolume += volume;


    }
    console.log('summVolume', summVolume);

}

console.log(countingMountRainVolume([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]));
console.log(countingMountRainVolume([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log(countingMountRainVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countingMountRainVolume([7, 0, 1, 3, 4, 1, 2, 1]));
console.log(countingMountRainVolume([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log(countingMountRainVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] ));

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
        lastMaxIndex = maxArrayIndex[maxArrayIndex.length - 1];

        return lastMaxIndex
    }

    leftLand = land.slice(0, getLastMaxIndex(land) + 1);
    rightLand = land.slice(getLastMaxIndex(land), land.length + 1);
    rightLand.reverse();

    leftMax = 0;
    for (let i = 0; i < leftLand.length; i++) {
        if (leftMax < leftLand[i]) {
            leftMax = leftLand[i]
        }
        if (leftMax >= leftLand[i]) {
            volume = leftMax - leftLand[i]
        }
        summVolume += volume;
    }

    rightMax = 0;
    for (let i = 0; i < rightLand.length; i++) {
        if (rightMax < rightLand[i]) {
            rightMax = rightLand[i]
        }
        if (rightMax >= rightLand[i]) {
            volume = rightMax - rightLand[i]
        }
        summVolume += volume;
    }
    return summVolume;
}

console.log('Volume of Rain ', countingMountRainVolume([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]));
console.log('Volume of Rain ', countingMountRainVolume([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log('Volume of Rain ', countingMountRainVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log('Volume of Rain ', countingMountRainVolume([7, 0, 1, 3, 4, 1, 2, 1]));
console.log('Volume of Rain ', countingMountRainVolume([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log('Volume of Rain ', countingMountRainVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));

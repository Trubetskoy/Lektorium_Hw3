function fromArrayToObject(array) {
    let object = {};
    array.forEach(function (element, i) {
        object[i + '-' + element] = i; // without ' i+'-'+ ' we will lose data if there are identical values ​​in the array cause they will rewrite indexis
    });
    return object
}

console.log(fromArrayToObject([1, 8, 6, 2, 2, 7, 'string', 1, 2, 9, 87, 5,]));

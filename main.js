function convertArrayToObject(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] = map[arr[i]] + 1;
        }
    }
    return map;
}

function migratoryBirds(arr) {
    arr = arr.sort();
    let map = convertArrayToObject(arr);

    let maxValue = 0;
    let result = 0;
    for (let x in map) {
        if (map[x] > maxValue) {
            maxValue = map[x];
            result = x;
        }
    }

    return result;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

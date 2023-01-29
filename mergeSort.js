function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const leftPart = array.splice(0, half);
    return merge(mergeSort(leftPart), mergeSort(array));
}

let array = [8,3,5,9,2,1];
console.log(mergeSort(array));
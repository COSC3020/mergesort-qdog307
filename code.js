function mergesort(array) {
    let n = array.length;
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
            let mid = leftStart + size - 1;
            let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
            merge(array, leftStart, mid, rightEnd);
        }
    }
    return array;
}

function merge(array, left, mid, right) {
    let leftArray = array.slice(left, mid + 1);
    let rightArray = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
    }

    while (i < leftArray.length) {
        array[k++] = leftArray[i++];
    }

    while (j < rightArray.length) {
        array[k++] = rightArray[j++];
    }
}

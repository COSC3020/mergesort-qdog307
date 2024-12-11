
function mergeSort(arr) {
    const n = arr.length;

    // temporary array for merging
    const temp = new Array(n);

    // iteratively divide the array into subarrays of size 
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr, temp, left, mid, right) {
    let i = left; // initial index of the left subarray
    let j = mid + 1; // initial index of the right subarray
    let k = left; // initial index of the merged subarray

    // copy the array into temp for merging
    for (let idx = left; idx <= right; idx++) {
        temp[idx] = arr[idx];
    }

    // merging of the two subarrays
    while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) {
            arr[k++] = temp[i++];
        } else {
            arr[k++] = temp[j++];
        }
    }

    // copy remaining elements from the left subarray 
    while (i <= mid) {
        arr[k++] = temp[i++];
    }

    // copy remaining elements from the right subarray 
    while (j <= right) {
        arr[k++] = temp[j++];
    }
}


module.exports = { mergeSort };


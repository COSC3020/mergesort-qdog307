// code.js
function mergesort(array) {
    let n = array.length;

    // Iteratively merge subarrays in bottom-up manner
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
            let mid = leftStart + size - 1;
            let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
            mergeInPlace(array, leftStart, mid, rightEnd);
        }
    }
    return array;
}

function mergeInPlace(array, left, mid, right) {
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (array[mid] <= array[start2]) {
        return;
    }

    // Use two pointers to merge the subarrays in place
    while (left <= mid && start2 <= right) {
        if (array[left] <= array[start2]) {
            left++;
        } else {
            let value = array[start2];
            let index = start2;

            // Shift elements to the right
            while (index !== left) {
                array[index] = array[index - 1];
                index--;
            }
            array[left] = value;

            left++;
            mid++;
            start2++;
        }
    }
}

// Export the mergeSort function
module.exports = mergesort;

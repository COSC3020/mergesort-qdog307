// code.js
function mergesort(array) {
    let n = array.length;

    
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

    
    if (array[mid] <= array[start2]) {
        return;
    }

  
    while (left <= mid && start2 <= right) {
        if (array[left] <= array[start2]) {
            left++;
        } else {
            let value = array[start2];
            let index = start2;

           
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


module.exports = mergesort;

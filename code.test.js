const jsverify = require('jsverify');

const testMergeSort = () => {
    jsverify.assert(jsverify.forall("array nat", (arr) => {
        const sorted = mergeSort([...arr]); // Sort the array
        return sorted.every((val, idx) => idx === 0 || sorted[idx - 1] <= val); // Check if sorted
    }));

    console.log("All tests passed!");
};

// Run the tests
testMergeSort();

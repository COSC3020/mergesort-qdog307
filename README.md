# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


For this merge sort it breaks the input array into subarrays and merges them iteratively until the entire array is sorted.
First looking at the dividing step, the iertaive version does not explicity divide the array but it processes it iteratively. 
This gives us log2(n). Then with the merge time it is O(n). Combong the two get O(n log n). For this we are looking at the 
maxium number of comparisons. 

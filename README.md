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


Iterative, In-Place Merge Sort
This implementation of merge sort is both iterative (no recursive calls) and in-place (does not use additional arrays for temporary storage). It processes the input array by iteratively dividing it into subarrays of increasing size and merging them in place until the entire array is sorted.

Runtime Analysis
The time complexity of this iterative, in-place merge sort is $\Theta(n \log n)$ in the worst case. Here's the reasoning:

Dividing Step:
Unlike the recursive version, the iterative approach does not explicitly divide the array into halves. Instead, it processes subarrays of size $1$, then $2$, then $4$, and so on, doubling the size in each iteration.
The number of iterations required is $\log_2(n)$ because the subarray size doubles each time.

Merging Step:
During each iteration, subarrays are merged in place. This involves iterating through all elements of the array to merge sorted subarrays, which takes $O(n)$ time per iteration.

Combining Both Steps:
Since there are $\log_2(n)$ iterations, and each iteration processes the entire array in $O(n)$ time, the overall time complexity is $\Theta(n \log n)$.

In-Place Overhead:
Merging in place adds additional work to shift elements within the array to maintain the sorted order. While this does not change the overall time complexity ($\Theta(n \log n)$), it introduces a higher constant factor compared to the standard version that uses temporary arrays.

Sources
I referred to the following sources while completing this exercise:
The lecture slides provided as part of this assignment.
GeeksforGeeks: Merge Sort: To understand the iterative merge sort approach. https://www.geeksforgeeks.org/merge-sort/ 
In-place merge sort discussion: To learn about in-place merge strategies.
ChatGPT: For ideas on structuring the in-place merge function and over-explaining things. 
WordDoc to wite this out. 

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

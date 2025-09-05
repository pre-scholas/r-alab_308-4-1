# Objectives

1. Use arrays to store ordered lists of data.
2. Use objects to store keyed lists of data.
3. Use conditional logic to process data.
4. Use loops to handle repetitive tasks.
5. Transform data according to specifications.

## Submission

Submit your completed lab using the { Start Assignment } button on the assignment page in Canvas.
Your submission should include:
. A GitHub link to your completed project repository.

### Part 1: Refactoring Old Code

When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

#### Part 4: Sorting and Manipulating Data

It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
So far, the results should look like this:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

##### Part 5: Full Circle

As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.

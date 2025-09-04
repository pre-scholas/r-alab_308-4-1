/**
Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
*/

// CSV data looks like this:

// let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

/** Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:

ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26 */

// Loop through the characters of a given CSV string.
 let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// let csvData =
// 	'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

// When you encounter the “\r\n” sequence, move to the next “row.”
let csvDataSplit = csvData.split("\n")
for (let i = 0; i < csvDataSplit.length; i++) {
    // Store each “cell” of data in a variable.
    // When you encounter a comma, move to the next cell.
    csvDataSplit[i] = csvDataSplit[i].split(',')
    // console.log(csvDataSplit[i]);
}
// Log each row of data.
console.log(csvDataSplit)

let csvArrColum = [ csvDataSplit[0] ]
// let csvObj = { ['csvDataSplit[1]'] }
// console.log("i'm csvArrColum", csvArrColum)

csvDataSplit.forEach((element, index) => {
    if (index > 0) {
        csvArrColum.push(element)
        console.log("i'm csvArrColum", csvArrColum)
    }
})



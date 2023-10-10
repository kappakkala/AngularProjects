"use strict";
////////////////////////////////////////////////////////////////////////////////////
// STRING
////////////////////////////////////////////////////////////////////////////////////
let fname = 'Tess';
// fname = 9; // results in error, as there is a type mismatch
let lname; // predefining a type 
lname = 'Tess';
lname = lname.toUpperCase(); // string methods can be used directly, since we have predefined datatype 
console.log("Datatype String : " + fname + " " + lname);
////////////////////////////////////////////////////////////////////////////////////
// NUMBER
////////////////////////////////////////////////////////////////////////////////////
let age;
age = 25.5;
let dob = '25';
let result = parseInt(dob) + age;
console.log("\nDatatype Number : " + result);
////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN
////////////////////////////////////////////////////////////////////////////////////
let isValid;
// console.log(isValid); // results in error while compiling and prints undefined upon running
// error occurs because there is no default value defined.(strict is set true inside tsconfig.json)
isValid = true;
console.log("\nDatatype Boolean : " + isValid);
////////////////////////////////////////////////////////////////////////////////////
// ARRAY
////////////////////////////////////////////////////////////////////////////////////
// Refer https://www.w3schools.com/jsref/jsref_obj_array.asp
let empList; // create an array type
let numList; // alternative method to create an array type 
// let numList = new Array(1,4,9); // creates a new array [1, 4, 9]
empList = ["Eenu", "Menu", "Seenu"];
numList = [5, 4, 3, 2, 1];
console.log("\nDatatype Array : " + empList + " & " + numList);
// 1. FILTER()
// to filter the array elements based on a certain condition
let results = numList.filter((num) => num > 2);
console.log("filter() : " + results);
// 2. FIND()
// find a particular object 
let emp = empList.find((emp) => emp === 'Menu');
console.log("find() : " + emp);
// 3. REDUCE()
// using reduce to perform operations on array by going from left to right
// It returns a single value, the functions accumulated result, without changing the original array
// no operation on empty array
let sum_val = numList.reduce((acc, num) => acc + num); // calculate the sum until it reaches at the enc of the array 
console.log("reduce() - sum of " + numList + " : " + sum_val);
// 4. REDUCERIGHT()
// using reduce to perform operations on array by going from right to left
function diff(acc, num) {
    return acc - num;
}
let diff_val = numList.reduceRight(diff);
console.log("reduceRight() - diff of " + numList + " : " + diff_val);
// 5. SORT()
// sort array elements in ascending order
console.log("sort() of " + numList + " : " + numList.sort());
// 5.1 ascending using compare function
console.log("compare function ascending [5,1,2,0] : " + [5, 1, 2, 0].sort(function (a, b) { return a - b; }));
// 5.2 descending using compare function
console.log("compare function descending [5,1,2,0] : " + [5, 1, 2, 0].sort(function (a, b) { return b - a; }));
// 5.3 random sorting
console.log("random sorting [5,1,2,0,4] : " + [5, 1, 2, 0, 4].sort(function () { return 0.5 - Math.random(); }));
// 6. REVERSE()
// reverse the elements of an array
console.log("reverse() of [5,4,1,2] : " + [5, 4, 1, 2].reverse());
// 7. LENGTH
// get length of array
console.log("Length of " + numList + " : " + numList.length);
// 8. TOSTRING()
// convert array to comma separated string values
console.log("toString() : " + empList.toString());
// 9. JOIN()
// convert array to string values separated by user defined separator
console.log("join() : " + empList.join(" - "));
// 10. POP()
// removes the last array element
console.log("pop() " + numList + " : " + "to remove " + numList.pop() + " & new array " + numList);
// 11. PUSH()
// inserts an array element
console.log("push() 2 to " + numList + " : " + "new length " + numList.push(2) + " & new array " + numList);
// 12. SHIFT()
// shift out the first element
console.log("shift() : " + numList + " after shifting " + numList.shift() + " = " + numList);
// 13. UNSHIFT()
// adds a new element to the beginning and returns the new length
console.log("unshift() : " + numList + " with 7 has new length " + numList.unshift(7) + " & new array " + numList);
// 14. CONCAT()
// create a new array by merging two or more arrays
console.log("concat() [1,2,3], [3,4,5] and [1, 2] : " + [1, 2, 3].concat([3, 4, 5], [1, 2]));
// alternatively concat can also be used to attach a new string to an exisiting string array
console.log("concat() Peenu to " + empList + " : " + empList.concat("Peenu"));
// 15. FLAT()
// to reduce the dimensionality of an array
console.log("flat() [[1,2],[3]] : " + [[1, 2], [3]].flat());
// 16. SPLICE()
// changes the current array by adding or removing some elements
// splice(position_to_add_elements, number_of_elements_to_be_removed, add_element1, add_element2, add_element3, ...)
console.log("splice() add Keenu, Deenu to " + empList + ": to remove " + empList.splice(2, 1, "Keenu", "Deenu") + " & new array " + empList);
// splice can also be used only to remove elements from an array
console.log("splice remove " + empList.splice(1, 2) + " & new array " + empList);
// 17. SLICE()
// returns a new array that contains extracted elements from an array
// slice(start_position) or slice(start_position, end_position)
console.log("slice() from 3rd position in " + numList + " : " + numList.slice(2));
console.log("slice() between 2nd and 5th position in " + numList + " : " + numList.slice(2, 4));
// 18. AT()
// returns array element at a position
// default 0. -1 returns the last element
console.log("at() 3rd element in " + numList + " : " + numList.at(2));
// 19. CONSTRUCTOR
// the property returns the function that created the array prototype
console.log("constructor for [1,2,3]: " + [1, 2, 3].constructor);
// 20. COPYWITHIN()
// copies array elements to another position in the same array after overwriting existing values.
// changes the current array
// copyWithin(index_position_to_copy_the_elements, start_index-defalt0, end_index-default_arraylength)
console.log("copyWithin() (2,0) in [0,1,2,3,4,5,6,7,8,9,10] : ", ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(2, 0)); // copies the elements between index 0 and length of array, from position 2 of current array
// console.log(...[]) prints array in a single line. ... is the spread operator.
console.log("copyWithin() (0,3,8) in [0,1,2,3,4,5,6,7,8,9,10] : ", ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(0, 3, 8)); // copies the elements between index 3 and 8, from position 0 of current array 
// 21. ENTRIES()
// returns array iterator object with key/value pairs
console.log("entries() : ");
for (let num of empList.entries()) {
    console.log(num);
}
// 22. SOME()
// returns true if any of the array element pass a condition
// returns false if all array elements fails a condition
function isGreater(num) {
    return num > 2;
}
console.log("some() > 2 in " + numList + " : " + numList.some(isGreater));
// 22. EVERY()
// returns true if all elements pass a condition
console.log("every() > 2 in " + numList + " : " + numList.every(isGreater));
// 23. FILL()
// fill all or part of the array with a certain element by rewriting the original array
// fill(value, start_index_to_fill, stop_index_to_fill)
console.log("fill() all elements in [1,2,3,4,5] with 2 : ", [1, 2, 3, 4, 5].fill(2));
console.log("fill() 0 from 3rd to 5th position in [1,2,3,4,5,6,7] : ", ...[1, 2, 3, 4, 5, 6, 7].fill(0, 2, 5));
// 24. FINDINDEX()
// returns the index of the first element in an array, that passes a certain test
// returns -1 if no match is found
function isEqual(num) {
    return num == 7;
}
console.log("findIndex() 7 appears first in [1,2,7,7,3] at index : " + [1, 2, 7, 7, 3].findIndex(isEqual));
// 25. FLATMAP()
// creates a new array after executing a function on the entire elements of a given array
console.log("flatMap() squaring [1,2,3,4] : ", [1, 2, 3, 4].flatMap((x) => x * x));
// 26. FOREACH() - did not work as expected
// executes a function for each element in an array
/*
function doSquare(num : any, index : any, arr_res : any) {
    arr_res[index] = num*2;
}
console.log(numList);
console.log(numList.forEach(doSquare));
*/
// 27. FROM()
// returns an array from an iterable object
console.log("from() test : ", Array.from("test"));
// 28. INCLUDES()
// returns true if an array includes a specific element starting from particular position (default 0)
// includes(element) or includes(element, start_position)
console.log("includes() 2 in [7,2,8,4] from index 0 : ", [7, 2, 8, 4].includes(2));
console.log("includes() 2 in [7,2,8,4] from index 2 : ", [7, 2, 8, 4].includes(2, 2));
// 29. INDEXOF()
// returns first index of an element starting from particular position (default 0) while searching from left to right
// return -1 if not found
console.log("indexOf() 3 in [1,2,3,4,5,3] from index 0: ", [1, 2, 3, 4, 5, 3].indexOf(3));
console.log("indexOf() 3 in [1,2,3,4,5,3] from index 3 : ", [1, 2, 3, 4, 5, 3].indexOf(3, 3));
// 30. LASTINDEXOF()
// returns first index of an element starting from particular position (default last element) while searching from left to right
// return -1 if not found
console.log("lastindexOf() 3 in [1,2,3,4,5,3] from index -1 : ", [1, 2, 3, 4, 5, 3].lastIndexOf(3));
console.log("lastindexOf() 3 in [1,2,3,4,5,3] from index -2 : ", [1, 2, 3, 4, 5, 3].lastIndexOf(3, -2));
// 31. KEYS()
// returns an array iterator object that contains the keys of the array
function getKeys(arr) {
    let arr_res = new Array;
    for (let x of arr.keys()) {
        var len = arr_res.push(x);
    }
    return arr_res;
}
console.log("keys() of ['a','b','c','d','e'] : ", getKeys(["a", "b", "c", "d", "e"]));
// 32. VALUEOF()
// get the value of array. It is the same as the original array.
console.log("valueOf() ['a','b','c'] : ", ['a', 'b', 'c'].valueOf());
// 33. ISARRAY()
// returns true if an object is an array. 
//  Using x.isArray(), where x is an array will return undefined.
console.log("isArray() ['a','b'] : ", Array.isArray(["a", "b"]));
console.log("isArray() 'ab' : ", Array.isArray("ab"));
////////////////////////////////////////////////////////////////////////////////////
// ENUM
////////////////////////////////////////////////////////////////////////////////////
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
// enums not used once the code is compiled

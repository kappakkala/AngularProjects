//##################################################################################################//
//                                          STRING                                                  //
//##################################################################################################//
let fname = 'Tess';
// fname = 9; // results in error, as there is a type mismatch
let lname : string; // predefining a type 
lname = 'Ruf'
lname = lname.toUpperCase() // string methods can be used directly, since we have predefined datatype 
console.log("Datatype String : " + fname + " "+  lname)
// defining a string object
let strObj = new String("test");
console.log(strObj);
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// List of Methods
//--------------------------------------------------------------------------------------------------
// 1 Conversion
//// toString() 	        Returns a string or a string object as a string
//// toLowerCase() 	        Returns a string converted to lowercase letters
//// toUpperCase() 	        Returns a string converted to uppercase letters
//// toLocaleLowerCase() 	Returns a string converted to lowercase letters, using the host's locale
//// toLocaleUpperCase() 	Returns a string converted to uppercase letters, using the host's locale
//// fromCharCode() 	    Returns Unicode values as characters

// 2 Index based
//// charAt()   	        Returns the character at a specified index (position)
//// charCodeAt() 	        Returns the Unicode of the character at a specified index
//// indexOf() 	            Returns the index (position) of the first occurrence of a value in a string
//// lastIndexOf() 	        Returns the index (position) of the last occurrence of a value in a string

// 3 Value based
//// search()   	        Searches a string for a value, or regular expression, and returns the index (position) of the match
//// match() 	            Searches a string for a value, or a regular expression, and returns the matches
//// includes() 	        Returns if a string contains a specified value
//// valueOf()  	        Returns the primitive value of a string or a string object
//// repeat() 	            Returns a new string with a number of copies of a string
//// replace() 	            Searches a string for a pattern, and returns a string where the first match is replaced
//// replaceAll()        	Searches a string for a pattern and returns a new string where all matches are replaced
//// startsWith() 	        Checks whether a string begins with specified characters
//// endsWith() 	        Returns if a string ends with a specified value
//// localeCompare()    	Compares two strings in the current locale

// 4 Extraction
//// slice() 	            Extracts a part of a string and returns a new string
//// substring()            Extracts characters from a string, between two specified indices (positions) 
//// substr() 	            Extracts a number of characters from a string, from a start index (position)
//// trim() 	            Returns a string with removed whitespaces
//// trimEnd() 	            Returns a string with removed whitespaces from the end
//// trimStart() 	        Returns a string with removed whitespaces from the start
//// split() 	            Splits a string into an array of substrings
//// concat() 	            Returns two or more joined strings
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// List of Properties
//--------------------------------------------------------------------------------------------------
//// length 	            Returns the length of a string
//// constructor   	        Returns the string's constructor function
//// prototype    	        Allows you to add properties and methods to an object
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// 1_1 toString()
// converts the datatype to string
let str_num = 1234;
let str_city : string;
str_city =  " El Dorado "
console.log("toString() 1234 : " + str_num.toString());

// 1_2 toLowerCase()     
// converts string to lowercase without changing the original value in the variable
console.log("toLowerCase() '"+ str_city + "' : " + str_city.toLowerCase());

// 1_3 toUpperCase()	        
// converts string to uppercase without changing the original value in the variable
console.log("toUpperCase() '"+ str_city + "' : " + str_city.toUpperCase());

// 1_4 toLocaleLowerCase()	
// converts string to lowercase using current locale, without changing the original value in the variable
console.log("toLocaleLowerCase() '"+ str_city + "' : " + str_city.toLocaleLowerCase());

// 1_5 toLocaleUpperCase()
// converts string to uppercase using current locale, without changing the original value in the variable
console.log("toLocaleupperCase() '"+ str_city + "' : " + str_city.toLocaleUpperCase());

// 1_6 fromCharCode()
// converts unicode to string characters
console.log("fromCharCode() single character from unicode 73 : ", String.fromCharCode(73));
console.log("fromCharCode() text from unicode 68,79,71 : ", String.fromCharCode(68,79,71));

// 2_1 charAt()
str_city =  "mississippi"
// get the character at an index in a string
console.log("charAt() index 4 in '" + str_city + "' : ", str_city.charAt(4));

// 2_2 charCodeAt()	    
// get the unicode value of a character at an index in a string
console.log("charCodeAt() index 4 in '" + str_city + "' : ", str_city.charCodeAt(4));

// 2_3 indexOf()
// get the first index of the first occurence of a value in a string
console.log("indexOf() 'i' in '" + str_city + "' : ", str_city.indexOf('i'));

// 2_4 lastIndexOf()
// get the last index of the first occurence of a value in a string
console.log("lastIndexOf() 'i' in '" + str_city + "' : ", str_city.lastIndexOf('i'));

// 3_1 search()   	      
// matches the string against a regular expression and returns the index of the first occurence of a value, else -1
// case sensitive
console.log("search() 'o' in '" + str_city + "' : ", str_city.search('o'));

// 3_2 match() 	           
// matches the string against a regular expression and returns an array that contains info of the first occurence of a value, else null
console.log("match() 'ss' in '" + str_city + "' : ", str_city.match('ss'));
console.log("match() 'os' in '" + str_city + "' : ", str_city.match('os'));

// 3_3 includes() 	        
// returns true if the string contains a specific value, else false
console.log("includes() 'os' in '" + str_city + "' : ", str_city.includes('os'));

// 3_4 valueOf()  	        
//
console.log();

// 3_5 repeat() 	           
//
console.log();

// 3_6 replace() 	            
//
console.log();

// 3_7 replaceAll()        
//
console.log();

// 3_8 startsWith() 	       
//
console.log();

// 3_9 endsWith() 	       
//
console.log();

// 3_10 localeCompare()    	
//
console.log();

// 4_1 slice() 	            
//
console.log();

// 4_2 substring()            
//
console.log();

// 4_3 substr() 	        
//
console.log();

// 4_4 trim() 	            
//
console.log();

// 4_5 trimEnd() 	        
//
console.log();

// 4_6 trimStart() 	        
//
console.log();

// 4_7 split() 	            
//
console.log();

// 4_8 concat() 
// 
console.log();
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// length 	            

// constructor   	     

// prototype    	     

//--------------------------------------------------------------------------------------------------



//##################################################################################################//
//                                          NUMBER                                                  //
//##################################################################################################//
let age : number;
age = 25.5;
let dob = '25'
let result = parseInt(dob) + age;
console.log("\nDatatype Number : " + result)
// defining a number object
let numObj = new Number(22);
console.log(numObj);
//--------------------------------------------------------------------------------------------------



//##################################################################################################//
//                                          BOOLEAN                                                 //
//##################################################################################################//
let isValid : boolean;
// console.log(isValid); // results in error while compiling and prints undefined upon running
// error occurs because there is no default value defined.(strict is set true inside tsconfig.json)
isValid = true;
console.log("\nDatatype Boolean : " + isValid + " & " + !isValid);
// defining a boolean object
let boolObj = new Boolean(false);
console.log(boolObj);

//--------------------------------------------------------------------------------------------------
// List of Methods
//--------------------------------------------------------------------------------------------------
//// Boolean()      Checks whether an object is of type boolean
//// toString()     Converts boolean to string
//// valueOf()      Returns the primitive value of a boolean variable
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// List of Properties
//--------------------------------------------------------------------------------------------------
//// constructor    Returns the function that created JavaScript's Boolean prototype
//// prototype      Allows you to add properties and methods to the Boolean prototype
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// 1 Boolean()
// Checks for boolean datatype
// Boolean(condition) or (condition)
console.log("Boolean() 5>6? : " + Boolean(5>6));

// 2 ToString()
// converts a boolean value to string
console.log("toString() true : " + isValid.toString());

// 3 valueOf()
// returns the value of a boolean variable
console.log("valueOf() isValid : " + isValid.valueOf());
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// constructor
// the property returns the function that created the boolean prototype
console.log("constructor for true : " + true.constructor); 

// prototype
// used to create a new method for a boolean
declare global {
    interface Boolean {
      getColor(): String; // myColor returns String instead of boolean
    }
  }
Boolean.prototype.getColor = function() {
    if (this.valueOf() == true) {
      return "green";
    } else {
      return "red";
    }
  };
console.log("prototype - user defined getColor() on true & false : " + true.getColor() + " and " + false.getColor());
//--------------------------------------------------------------------------------------------------



//##################################################################################################//
//                                          ARRAY                                                   //
//##################################################################################################//
// Refer https://www.w3schools.com/jsref/jsref_obj_array.asp
// Declaration
let empList : string[]; // create an array type
let numList : Array<number>; // alternative method to create an array type 
// let numList = new Array(1,4,9); // creates a new array [1, 4, 9]
empList = ["Eenu", "Menu", "Seenu"];
numList = [5,4,3,2,1];
console.log("\nDatatype Array : " + empList + " & " + numList);
// defining an array object
let arrObj = new Array(0,1,2,3);
console.log(arrObj);

//--------------------------------------------------------------------------------------------------
// List of Methods
//--------------------------------------------------------------------------------------------------
// 1 Checking and Conversion 
//// isArray()      Checks whether an object is an array
//// toString()     Converts an array to a string, and returns the result
//// from() 	    Creates an array from an object

// 2 Index based
//// at() 	        Returns an indexed element of an array
//// keys() 	    Returns a Array Iteration Object, containing the keys of the original array
//// findIndex() 	Returns the index of the first element in an array that pass a test
//// indexOf() 	    Search the array for an element and returns its position
//// lastIndexOf() 	Search the array for an element, starting at the end, and returns its position

// 3 Element based
//// fill() 	    Fill the elements in an array with a static value
//// valueOf() 	    Returns the primitive value of an array
//// entries() 	    Returns a key/value pair Array Iteration Object
//// sort() 	    Sorts the elements of an array
//// reverse() 	    Reverses the order of the elements in an array
//// copyWithin() 	Copies array elements within the array, to and from specified positions

// 4 Conditional operations
//// includes()     Check if an array contains the specified element
//// some() 	    Checks if any of the elements in an array pass a test
//// every() 	    Checks if every element in an array pass a test
//// filter() 	    Creates a new array with every element in an array that pass a test
//// find() 	    Returns the value of the first element in an array that pass a test

// 5 Merging
//// flat() 	    Concatenates sub-array elements
//// concat() 	    Joins arrays and returns an array with the joined arrays
//// join() 	    Joins all elements of an array into a string

// 6 Operations
//// map() 	        Creates a new array with the result of calling a function for each array element
//// flatMap() 	    Maps all array elements and creates a new flat array
//// forEach() 	    Calls a function for each array element

// 7 Extraction
//// pop() 	        Removes the last element of an array, and returns that element
//// push() 	    Adds new elements to the end of an array, and returns the new length
//// shift() 	    Removes the first element of an array, and returns that element
//// unshift() 	    Adds new elements to the beginning of an array, and returns the new length
//// slice() 	    Selects a part of an array, and returns the new array
//// splice() 	    Adds/Removes elements from an array
//// reduce() 	    Reduce the values of an array to a single value (going left-to-right)
//// reduceRight()  Reduce the values of an array to a single value (going right-to-left)

//--------------------------------------------------------------------------------------------------
// List of Properties
//--------------------------------------------------------------------------------------------------
//// length 	    Sets or returns the number of elements in an array
//// constructor 	Returns the function that created the Array object's prototype
//// prototype 	    Allows you to add properties and methods to an Array object
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// 1_1 isArray()
// returns true if an object is an array. 
//  Using x.isArray(), where x is an array will return undefined.
console.log("isArray() ['a','b'] : ", Array.isArray(["a","b"]));
console.log("isArray() 'ab' : ", Array.isArray("ab"));

// 1_2 toString()
// convert array to comma separated string values
console.log("toString() : "  + empList.toString());

// 1_3 from()
// returns an array from an iterable object
console.log("from() test : ", Array.from("test"));

// 2_1 at()
// returns array element at a position
// default 0. -1 returns the last element
console.log("at() 3rd element in " + numList + " : " + numList.at(2));

// 2_2 keys()
// returns an array iterator object that contains the keys of the array
function getKeys(arr : any) {
    let arr_res = new Array; 
    for (let x of arr.keys()){
        var len = arr_res.push(x);
    }
    return arr_res;
}
console.log("keys() of ['a','b','c','d','e'] : ", getKeys(["a","b","c","d","e"]));

// 2_3 findIndex()
// returns the index of the first element in an array, that passes a certain test
// returns -1 if no match is found
function isEqual(num : any){
    return num == 7;
}
console.log("findIndex() 7 appears first in [1,2,7,7,3] at index : " + [1,2,7,7,3].findIndex(isEqual));

// 2_4 indexOf()
// returns first index of an element starting from particular position (default 0) while searching from left to right
// return -1 if not found
console.log("indexOf() 3 in [1,2,3,4,5,3] from index 0: ", [1,2,3,4,5,3].indexOf(3));
console.log("indexOf() 3 in [1,2,3,4,5,3] from index 3 : ", [1,2,3,4,5,3].indexOf(3, 3));

// 2_5 lastIndexOf()
// returns first index of an element starting from particular position (default last element) while searching from left to right
// return -1 if not found
console.log("lastindexOf() 3 in [1,2,3,4,5,3] from index -1 : ", [1,2,3,4,5,3].lastIndexOf(3));
console.log("lastindexOf() 3 in [1,2,3,4,5,3] from index -2 : ", [1,2,3,4,5,3].lastIndexOf(3, -2));

// 3_1 fill()
// fill all or part of the array with a certain element by rewriting the original array
// fill(value, start_index_to_fill, stop_index_to_fill)
console.log("fill() all elements in [1,2,3,4,5] with 2 : ", [1,2,3,4,5].fill(2));
console.log("fill() 0 from 3rd to 5th position in [1,2,3,4,5,6,7] : ", ...[1,2,3,4,5,6,7].fill(0,2,5));

// 3_2 valueOf()
// get the value of array. It is the same as the original array.
console.log("valueOf() ['a','b','c'] : ", ['a','b','c'].valueOf());

// 3_3 entries()
// returns array iterator object with key/value pairs
console.log("entries() : ")
for (let num of empList.entries()) {
    console.log(num)
}

// 3_4 sort()
// sort array elements in ascending order
console.log("sort() of " + numList + " : " + numList.sort());
// ascending using compare function
console.log("compare function ascending [5,1,2,0] : " + [5,1,2,0].sort(function(a,b){return a-b}));
// descending using compare function
console.log("compare function descending [5,1,2,0] : " + [5,1,2,0].sort(function(a,b){return b-a}));
// random sorting
console.log("random sorting [5,1,2,0,4] : " + [5,1,2,0,4].sort(function(){return 0.5 - Math.random()}));

// 3_5 reverse()
// reverse the elements of an array
console.log("reverse() of [5,4,1,2] : " + [5,4,1,2].reverse());

// 3_6 copyWithin()
// copies array elements to another position in the same array after overwriting existing values.
// changes the current array
// copyWithin(index_position_to_copy_the_elements, start_index-defalt0, end_index-default_arraylength)
// copy the elements between index 0 and length of array, from position 2 of current array
console.log("copyWithin() (2,0) in [0,1,2,3,4,5,6,7,8,9,10] : ", ...[0,1,2,3,4,5,6,7,8,9,10].copyWithin(2,0)); 
// console.log(...[]) prints array in a single line. ... is the spread operator.
// copy the elements between index 3 and 8, from position 0 of current array 
console.log("copyWithin() (0,3,8) in [0,1,2,3,4,5,6,7,8,9,10] : ", ...[0,1,2,3,4,5,6,7,8,9,10].copyWithin(0,3,8));

// 4_1 includes()
// returns true if an array includes a specific element starting from particular position (default 0)
// includes(element) or includes(element, start_position)
console.log("includes() 2 in [7,2,8,4] from index 0 : ", [7,2,8,4].includes(2));
console.log("includes() 2 in [7,2,8,4] from index 2 : ", [7,2,8,4].includes(2,2));

// 4_2 some()
// returns true if any of the array element pass a condition
// returns false if all array elements fails a condition
function isGreater(num : any){
    return num > 2 
}
console.log("some() > 2 in " + numList + " : " + numList.some(isGreater));

// 4_3 every()
// returns true if all elements pass a condition
console.log("every() > 2 in " + numList + " : " + numList.every(isGreater));

// 4_4 filter()
// to filter the array elements based on a certain condition
let results = numList.filter((num)=>num>2);
console.log("filter() : " + results);

// 4_5 find()
// find a particular object 
let emp = empList.find((emp)=>emp==='Menu');
console.log("find() : "+ emp);

// 5_1 flat()
// to reduce the dimensionality of an array
console.log("flat() [[1,2],[3]] : " + [[1,2],[3]].flat());

// 5_2 concat()
// create a new array by merging two or more arrays
console.log("concat() [1,2,3], [3,4,5] and [1, 2] : " + [1,2,3].concat([3,4,5], [1,2]));
// alternatively concat can also be used to attach a new string to an exisiting string array
console.log("concat() Peenu to " + empList + " : " + empList.concat("Peenu")); 

// 5_3 join()
// convert array to string values separated by user defined separator
console.log("join() : "  + empList.join(" - "));

// 6_1 map()
// creates a new array after executing a function for every array element
// returns a new array containing a modified form of the previous array
// eg : transform the value of each element
console.log("map() cube root [343,8,27,64,125] : " + [343,8,27,64,125].map(Math.cbrt));

// 6_2 flatMap()
// creates a new array after executing one or more functions on the entire elements of a given array
function multiplyTable(num : any){
    return [num*1, num*2, num*3, num*4]
}
console.log("flatMap() multiplication table [1,2,3,4] : ", [1,2,3,4].flatMap(multiplyTable));
// Alternatively the same can be implemented via a single line function
// console.log("flatMap() multiplication table [1,2,3,4] : ", [1,2,3,4].flatMap((x)=>[x*1,x*2,x*3,x*4]));

// 6_3 forEach()
// executes a function on each element in an array after iterating through the list
// returns undefined / does not return anything
// eg: saving/printing each element
function doSquare(num : any) {
    return num*2;
}
console.log("foreach() squaring " + numList + " : ");
let arr_res = new Array;
numList.forEach((num, index, arr) => {
    arr_res.push(arr[index]*2)
});
console.log(arr_res);

// 7_1 pop()
// removes the last array element
console.log("pop() " + numList + " : " + "to remove " + numList.pop() + " & new array " + numList);

// 7_2 push()
// inserts an array element
console.log("push() 2 to " + numList + " : " +  "new length " + numList.push(2) + " & new array " + numList);

// 7_3 shift()
// shift out the first element
console.log("shift() : " + numList + " after shifting " + numList.shift() + " = " + numList);

// 7_4 unshift()
// adds a new element to the beginning and returns the new length
console.log("unshift() : " + numList + " with 7 has new length " + numList.unshift(7) + " & new array " + numList);

// 7_5 slice()
// returns a new array that contains extracted elements from an array
// slice(start_position) or slice(start_position, end_position)
console.log("slice() from 3rd position in " + numList + " : " + numList.slice(2));
console.log("slice() between 2nd and 5th position in " + numList + " : " + numList.slice(2,4));

// 7_6 splice()
// changes the current array by adding or removing some elements
// splice(position_to_add_elements, number_of_elements_to_be_removed, add_element1, add_element2, add_element3, ...)
console.log("splice() add Keenu, Deenu to " + empList + ": to remove " + empList.splice(2,1,"Keenu","Deenu") + " & new array " + empList);
// splice can also be used only to remove elements from an array
console.log("splice remove " + empList.splice(1,2) + " & new array " + empList);

// 7_7 reduce()
// using reduce to perform operations on array by going from left to right
// It returns a single value, the functions accumulated result, without changing the original array
// no operation on empty array
let sum_val = numList.reduce((acc,num) => acc+num); // calculate the sum until it reaches at the enc of the array 
console.log("reduce() - sum of " + numList + " : " + sum_val);

// 7_8 reduceRight()
// using reduce to perform operations on array by going from right to left
function diff(acc: any, num: any) {
    return acc - num;
} 
let diff_val = numList.reduceRight(diff);
console.log("reduceRight() - diff of " + numList + " : " + diff_val);
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// length
// get length of array
console.log("Length of " + numList + " : " + numList.length);

// constructor
// the property returns the function that created the array prototype
console.log("constructor for [1,2,3]: " + [1,2,3].constructor); 

// prototype
// allows creation of new properties and methods to arrays
// https://stackoverflow.com/questions/12802383/extending-array-in-typescript
// Without the export {}, you will get the TS error:
// Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.
export {}
/* If you are within a module, you will need to make it clear that you are referring to the global Array<T>, 
    not creating a local Array<T> interface within your module */
declare global {
    interface Array<T> {
      getFirstChar(): Array<T>;
    }
  }
// creating an array method that returns the first character of each element  
Array.prototype.getFirstChar = function<T>(): T[] {
    let arr_res = new Array;
    for (let i = 0; i < this.length; i++) {
        var len = arr_res.push(this[i][0]);
    }
    return arr_res
  };
console.log("prototype - user defined getFirstChar() on " + empList + " : " + empList.getFirstChar());
//--------------------------------------------------------------------------------------------------



//##################################################################################################//
//                                              ENUM                                                //
//##################################################################################################//
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
// enums not used once the code is compiled

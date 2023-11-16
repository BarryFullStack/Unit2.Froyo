/*Psuedocode planning:
1. Prompt user to enter the frozen yogurt orders they want seperated by commas. Start with input containing
workshop requirement flavors as the example.
2. Have input flavors split into an array.
3. Locate the number of items in the array to reference for later loops
4. Search array with a loop to locate the number of flavors listed and place in holding array
5. Have new array be the source the the objects for each flavor.
6. Search original array for number of instances each flavor appears
7. Have objects contain attribute orderNum for storing the number of times the flavor appears.
8. Output to console a confirmation of the order amounts.
*/

// prompt user for a list of strings seperated by commas.
//referecing the javaScript code from workshop 14
const userOrderString = prompt(
    "Please enter each the Frozen Yogurt flavors in your order seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//Splitting the string into an array of strings
//referecing the javaScript code from workshop 14
const orderArray = userOrderString.split(",");
//check
//console.log(orderArray);
console.log(`You entered: ${orderArray}`);

//Check the number of items in orderArray 
function getLength(orderArray) {
    let orderAmount = orderArray.length;
    return orderAmount;
}
//check
//console.log(getLength(orderArray));

//loop to investigate the array for different flavors
//takes first item in array and compares to nothing > push to new array
//compare second items in array compare to first item, if same move on to 3rd item
//compare second items in array compare to first item, if differnt push to new array

function getFlavors(orderArray) {
    const flavors = [];
    for (let i = 0; i < orderArray.length; i++){
        if (i === 0) {
            flavors.push(orderArray[i]);
        }

        else if (orderArray[i] !== orderArray[i-1]){
            flavors.push(orderArray[i]);
        }
    }
    return flavors;
}
//check
//console.log(getFlavors(orderArray));

//get the number of times the flavor is listed
//found answer on stack overflow post: https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
//also found code on how to count duplicate values in an array by John Au-Yeung on Medium https://javascript.plainenglish.io/how-to-count-duplicate-values-in-an-array-in-javascript-544ca527313
/*my understanding of the code: 
declare an empty object
this method executes a provided function once for each element in an array  -MDN web docs
take the array we want to apply forEach which needs to have condtions like other for loops
can set iteratitce varialbe as 2 options:
    1. function (var) {};
    2. (var) => {};
this is creating a callback where each new array item i is being placed as a property of froyoOrder
loop updates froyoOrder as we find i in each iteration
set a conditon if froyoOrder[i] has nothing in it yet so froyoOrder[i] logical operator || = boolean operator Or 0
then our icrease condition of + 1
*/
//creates empty object
const froyoOrder = {};
//using forEach array method to count each of the array elements
orderArray.forEach(function(i) {froyoOrder[i] = (froyoOrder[i] || 0) +1;});
//check
//console.log(froyoOrder);
//console.log(typeof froyoOrder);
//console.table(froyoOrder);

//inform user of their order amounts
    console.log("You have ordered:");
    console.table(froyoOrder);

//Process notes to self. Would not keep in a shared build.

//Realized I need to just have a single object Order and add properties of each flavor and then value is the count
/*function totalOrder() {
    const froyoOrder = {};
    const froyoCount = {};
    for (let i = 0; i < orderArray.length; i++) {
        for(const key of getFlavors(orderArray)) {
            froyoOrder[key] = null;
        }
    }
    for (let i = 0; i < orderArray.length; i++) {
        for(const ti of getFlavors(orderArray)) {
            froyoOrder[key] = null;
        }
    }
}
/*for (let i = 0; i < flavorCount.length; i++) {
    for(const j of flavorCount(orderArray)) {
        froyoOrder[key] = null;
    }
}*/
//console.log(totalOrder);
/*function createObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}*/
//function createOrder(getFlavors(orderArray), count) {  }

//Use array flavors to generate objects of the same name
//I am going off the script described here on dev.to posted by Aaron: https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4#:~:text=To%20convert%20an%20array%20into%20an%20object%20we%20will%20create,key%20we%20have%20passed%20in.
/*const convertFlavorsToObjects = (array, key) => {
    const firstFlavor = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
}; 
Note to seelf: found confusing and didn't fully understand what was happening in it- searched fro alternatives*/
//looked up MDM oject methods to find a way to create object from the smaller array
//will have it create obj# with properties flavor and amount


//create a count for the flavors
// found code on how to count duplicate values in an array by John Au-Yeung on Medium https://javascript.plainenglish.io/how-to-count-duplicate-values-in-an-array-in-javascript-544ca527313

/*function flavorCount(orderArray) {
    //compare orderArray against getFlavors
    const counts = {};
    orderArray.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
}
console.log(flavorCount(orderArray));*/
console.log("Starting ex2 - finding thr najority number of an array if exist");

//const array of numbers
const arrayNumber = new Array(1,1,3,1,2,3,1,1,3,4,1,1,5);
//const arrayNumber = new Array(1,1,3,1,2,3,1,1,3,4,1,3,5);


//Calculating The array size

let arrSize = arrayNumber.length;
console.log("Array size is: " + arrSize)


//Calculating The majority number size - Rounding the number up if needed
let arrMaj = Math.ceil(arrSize / 2);
console.log("Majority size is: " + arrMaj);

//Creating dictionary for holding the number of times a number appers in the array


//Getting an array of integer numbers and returning a dictionary - number of time an element appers in the arry 
function countElement(arr){
    let dict = new Map();
    arr.forEach(function(num){
    
        if(dict.get(num) == undefined){
            dict.set(num,1);
            console.log("Element " + num + " Was created in the dictionary");
        }else{
            tempNum = parseInt(dict.get(num));
            tempNum = tempNum+1;
            dict.set(num,tempNum); 
            console.log("incrementing " + num + " by one");
        }
    });
    return (dict);
}

//Getting a dictionary of integer elements and the majority size, returning the number of majority or false if does not exist
function searchForMajority(dictArray,maj){
    for(let elm of dictArray){
        if(parseInt(elm[1]) >= maj){
            return elm[0];
        }
    }
    return false;
}


mainOutput = searchForMajority(countElement(arrayNumber),arrMaj)
    if(mainOutput == false){
        console.log("There is no majority number");
    }else{
        console.log("The majority number is: " + mainOutput);
    }





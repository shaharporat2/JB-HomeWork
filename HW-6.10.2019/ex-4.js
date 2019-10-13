//declaration of an array of

let mainArray = new Array(1,2,3,4,5,6,7);


//Number of steps
let k =  5;

//Using 2 temp Array
function rotateWithTempArray(mainArr,steps){

    var tempArray1 = new Array();

    var tempArray2 = new Array();

    tempArray1 = mainArr.slice(steps,mainArr.length);

    tempArray2  = mainArr.slice(0,steps);

    return tempArray1.concat(tempArray2);
}

//valdation of the k index represnting the steps
function validation(mainArr,steps){
    if( !Number.isInteger(steps) || mainArr.length  < steps ){
        return false;
    }else{
        return true;
    }
}

if(validation(mainArray,k)){
    console.log(rotateWithTempArray(mainArray,k));
}else{
    console.log("Invalid K was chosen")
}

// number of rows 

const numOfRows = 5; 
//const numOfRows = 1.1; 
//const numOfRows = "five";
//const numOfRows = -1; 


let pascalTri = new Array();

function newRow(currTri){
    //Checking if it is the first row - if true init the triangle
    let tempArr = new Array();
    if(currTri.length == 0){
        tempArr.push(1);
    }else{
        let prev = currTri.length-1
        for( let j = 0; j < currTri[prev].length ; j++ ){
            if( j == 0){
                tempArr.push(1);
            }else{
                tempArr.push(currTri[prev][j-1] + currTri[prev][j]); 
            }
        }
        tempArr.push(1);
    }
    currTri.push(tempArr);

}

//Checking if number is valid return true if valid false otherwise
function validation(num){
    if(Number.isInteger(num) && parseInt(num) > 0){
        return true;
    }else{
        return false;
    }
}

if(validation(numOfRows) == true){
    for(let i =0; i< numOfRows; i++){
        newRow(pascalTri);
    }
    console.log(pascalTri)
}else{
    console.log("Invalid number of rows")
}



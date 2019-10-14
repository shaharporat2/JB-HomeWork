
//Stub section
//const numArray = [1,2,0];
//const numArray = [3,"sds",4,"sdsd",1,-1];
//const numArray = [-1,-2,-3,-4];
const numArray = ['A', 'B', "shsh"]



let startPos = new Boolean(false);

function ex1(numArray){
    for (i=0;  i < numArray.length -1; i++){
    
        if(  !startPos && Number.isInteger(numArray[i]) && parseInt(numArray[i]) > 0){
            startPos=true;
        }
        
        if(parseInt(numArray[i]) > 0 && startPos && Number.isInteger(numArray[i+1])){
            if(numArray[i]+1 != numArray[i+1]){
                return((numArray[i] + 1));
            }
        }  
    }
    
    if(Number.isInteger(numArray[i]) && startPos == true){
       return(numArray[i]+1);
    }else{
        return("You have entered only negative numbers or text")
    }
}

console.log(ex1(numArray));
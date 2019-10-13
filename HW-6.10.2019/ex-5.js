
matrix = [
    [1,0,1],
    [0,1,1],
    [1,0,0]
]


function validation(matrix){
    //Checking if the matrix is not N*N
    //Checking if  length is empty
    //
}


function initMatrix(matrix){
    var new_matrix = [];
    let matLen = matrix.length;
    for (i = 0 ; i < matLen ; i++){
        new_matrix[i]=[];
        for (j = 0; j < matLen ; j++){
            new_matrix[i][j] = 0;
        }
    }
    return new_matrix;
}
function rotate(matrix,new_matrix){
    let matLen = matrix.length;
    for (i = 0 ; i < matLen ; i++){
        for (j = 0; j < matLen ; j++){
            new_matrix[j][matLen-1-i] = matrix[i][j];
        }
    }
    return new_matrix;
}

function printMatrix(matrix){
    matrix.forEach(element => {
        console.log(element)
    });
}

console.log("##############");
console.log("First Matrix");
console.log("##############");

printMatrix(matrix);
console.log("##############");
console.log("Second Matrix");
console.log("##############");
printMatrix(rotate(matrix,initMatrix(matrix)));

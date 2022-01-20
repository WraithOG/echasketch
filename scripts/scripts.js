const container = document.getElementById("container");
const clear = document.getElementById("clear");


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    cell.addEventListener("mouseenter", function colorCell(){
        cell.style.backgroundColor = "red";
    });
    clear.addEventListener("click", function(){ //at 40 rows this starts to lag
        for(i=0; i<(rows*cols); i++){
            cell.style.backgroundColor = "white";
        }
    })
        
    
    container.appendChild(cell).className = "grid-item";
  };
  
};
let numRow = parseInt(prompt("How many rows?"));
let numCols = parseInt(prompt("How many columns?"));

if(numRow>100){
    alert("Number of rows cannot exceed 100.");
    numRow = parseInt(prompt("How many rows?"));
}
if(numCols>100){
    alert("Number of columns cannot exceed 100.");
    numCols = parseInt(prompt("How many rows?"));
}


makeRows(numRow, numCols);


   
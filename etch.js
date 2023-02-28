

document.addEventListener('DOMContentLoaded',function(){
const header = document.createElement('h1');
header.textContent = "Etch-a-sketch";
this.body.appendChild(header);
const button = document.createElement('button');
button.textContent="Click to Create the matrix";

const diva = document.createElement('div');
diva.className="container";
document.body.appendChild(diva);
document.body.appendChild(button);
button.addEventListener('click', ()=>{
  var input = prompt('How many sides?(nxn)');
  if(input >= 100){
    alert('Enter a lower number');
    input = undefined;
  }

  diva.innerHTML ='';

  createBoxes(input,diva);





});
});

function createBoxes(input,diva){
  const squareSize = `${(100 / input)}%`;

  // Set the grid-template-rows and grid-template-columns properties to create the grid
  diva.style.gridTemplateRows = `repeat(${input}, ${squareSize})`;
  diva.style.gridTemplateColumns = `repeat(${input}, ${squareSize})`;
  

 
  for (let d = 0;d<input;d++){
    for(let c =0;c<input;c++){
      let k = document.createElement('div');
      k.className="box";
      k.addEventListener('mousedown',function() {
        changeColor(k);
      });
      k.addEventListener('mouseover', function(event) {
        if(event.buttons === 1){
          changeColor(k);
        }
      });
      
      k.style.width = '100%' ;
      k.style.height = '100%' ;//Yahoo it solved the problem , i was facing this for a long time 
      //100% did solve, coz it sets the width and heigh of squaresize , initialyy , i set it to squaresize's squaresize , that's why i struggled to fix that , got me a small square 
  
      diva.appendChild(k);
      
    }
  
  
  } 
}




function changeColor(box){   
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  box.style.backgroundColor= `rgb(${red},${green},${blue})`;
}


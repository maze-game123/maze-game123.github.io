let canvas=document.getElementById("mazeCanvas");
let context=canvas.getContext("2d");

let palyer={x: 20, y: 20, size:20 };
let goal={x:360, y:360, size:20, };

let walls= [
  {x:100,  y:0, width:20, height:300},
  {x:200, y:100, width:20, height:300},
  {x:300, y:0, width:20, height:300}
]; 

function drawMaze() {
  context.);
  
  //Draw player
  context.fillStyle= "blue";
  context.fillRect(player.x, player.y, player.size, player.size);
  
  //Draw goal
  context.fillStyle="green";
  
context.fillRect(goal.x, goal.y, goal.size, goal.size);

//Draw walls
context.fillStyle="black"

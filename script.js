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
context.fillStyle="black";
  for (let wall of walls) {
    context.fillRect(wall.x, wall.y, wall.width, wall.height);
  }
}

function isCollision(rect1, rect2) {
  return(
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.size > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.size > rect2.y
    );
}
document.addEventListener("keydown", function(event)
{
  

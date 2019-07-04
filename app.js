// Rover Object Goes Here
// ======================

var Rover = {
  direction:"N",
  travelLog:[[0,0]]
}

var xpos = 0;
var ypos = 0;

var commandStr = "rrffzrffrb" 


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  //console.log(this.direction);
  switch(rover.direction){
    case "N":
      console.log("from N to W");
      rover.direction = "W";
      console.log("now it's "+rover.direction);
      break;
    case "E":
      console.log("from E to N");
      rover.direction = "N";
      console.log("now it's "+rover.direction);
      break;
    case "S":
      console.log("from S to E");
      rover.direction = "E";
      console.log("now it's "+rover.direction);
      break;
    case "W":
      console.log("from W to S");
      rover.direction = "S";
      console.log("now it's "+rover.direction);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      console.log("from N to E");
      rover.direction = "E";
      console.log("now it's "+rover.direction);
      break;
    case "E":
      console.log("from E to S");
      rover.direction = "S";
      console.log("now it's "+rover.direction);
      break;
    case "S":
      console.log("from S to W");
      rover.direction = "W";
      console.log("now it's "+rover.direction);
      break;
    case "W":
      console.log("from W to N");
      rover.direction = "N";
      console.log("now it's "+rover.direction);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  console.log("original x position is: "+xpos);
  console.log("original y position is: "+ypos);
  if(rover.direction == "N"){
    if(ypos > 0){
      ypos--;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "E"){
    if(xpos < 10){
      xpos++;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "S"){
    if(ypos < 10){
      ypos++;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "W"){
    if(xpos > 0){
      xpos--;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    } else{
      console.log("cannot move - reached the edge");
    }
  }
}

function moveBackwards(rover){
  console.log("moveBackwards was called");
  console.log("original x position is: "+xpos);
  console.log("original y position is: "+ypos);
  if(rover.direction == "N"){
    if(ypos < 10){
      ypos++;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "E"){
    if(xpos > 0){
      xpos--;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "S"){
    if(ypos > 0){
      ypos--;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    }else{
      console.log("cannot move - reached the edge");
    }
  }else if(rover.direction == "W"){
    if(xpos < 10){
      xpos++;
      console.log("current x position is: "+xpos);
      console.log("current y position is: "+ypos);
      rover.travelLog.push([[xpos,ypos]]);
    } else{
      console.log("cannot move - reached the edge");
    }
  }
}

function commandRec(str){
  for(var i=0; i<=str.length; i++){
    console.log(str.charAt(i));
    if(str.charAt(i)=="l"){
      turnLeft(Rover);
    }else if (str.charAt(i)=="r"){
      turnRight(Rover);
    }else if (str.charAt(i)=="f"){
      moveForward(Rover);
    }else if (str.charAt(i)=="b"){
      moveBackwards(Rover);
    }else{
      console.log(i+" is ignored. please use either 'l' or 'r' or 'f' or 'b'.");
    }
  }
  console.log(Rover.travelLog);
}

// //interactive version
// document.addEventListener("keydown", function(event){
//   console.log(event.which);
//   if(event.which == 76){
//     turnLeft(Rover);
//   }else if (event.which == 82){
//     turnRight(Rover);
//   }else if (event.which == 70){
//     moveForward(Rover);
//   }
// })
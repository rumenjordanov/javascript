// Creating variables
var myX = 1, myY = 1;
var myX2 = 740, myX3 = 940, myX4 = 940, myX5 = 1500, myX6 = 1500, myX7 = 1600;




function update() {

  
    myX = myX + 1;
    myY = myY + 1;
    myX2 = myX2 - 1;
    myX3 = myX3 - 1;
    myX4 = myX4 - 2;
    myX5 = myX5 - 5;
    myX6 = myX6 - 3;
    myX7 = myX7 - 4;
          
    
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
    context.fillRect(myX2,26,45,125);
    context.fillRect(myX2,250,45,200);
    context.fillRect(myX3,230,100,10);
    context.fillRect(myX4,120,100,10); 
    context.fillRect(myX5,200,100,10);
    context.fillRect(myX6,100,100,10);
    context.fillRect(myX7,230,100,10);
  
};

function keyup(key) {
    myY = myY - 30;
    
    
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    myY = myY - 80
    
    
    
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

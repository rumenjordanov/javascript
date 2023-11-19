// Creating variables
var myX = 0, myY = 0;

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
};

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
    context.fillRect(350,32,45,70); // глава
    context.fillRect(250,100,250,90); // тяло
    context.fillRect(300,190,30,100); // ляв крак
    context.fillRect(425,190,30,100); // десен крак
    context.fillRect(100,120,580,20) // ръце
    context.fillRect(395,70,40,20)
    
  
    
};


function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

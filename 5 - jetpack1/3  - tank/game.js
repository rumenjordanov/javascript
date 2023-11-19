// Creating variables
var myX = 0, myY = 0;

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
     context.fillRect(300,300,100,50)
     context.fillRect(200,350,300,100)
     context.fillRect(400,315,150,20)
     context.fillRect(550,305,40,40)
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

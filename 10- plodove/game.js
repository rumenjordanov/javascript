// Creating variables
var kokoX =300,kokoY = 0;

function update() {
    kokoY=kokoY + 1;
    if(kokoY>600){
        kokoY = 0;
        kokoX= Math.random() * 770;
    }
 }
    

function draw() {
    // This is how you draw a rectangle
    context.fillRect(kokoX, kokoY, 30, 30);
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY,kokoX,kokoY);
    
    if(mouseX>kokoX){
        if(mouseX<kokoX+30){
            if(mouseY>kokoY)
                {
                    if(mouseY<kokoY+30)
                        {
                            console.log("bravo");
                            kokoY = 0;
                            kokoX= Math.random() * 770;
                        }
                }
            
        }
    }
    
}

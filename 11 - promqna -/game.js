// Creating variables
var kokoX = 0, kokoY = 0 , kokoW = 0;

function update() {
    if(kokoW > 0)
        {    
            if(kokoX + kokoW < 800)
                {
                    if(kokoY + kokoW < 600)
                        {
                            kokoY = kokoY - 2;
                            kokoX = kokoX - 2;
                            kokoW = kokoW + 4;
                        }
                }
        }
}

function draw() {
    // This is how you draw a rectangle
    if(kokoW > 0)
        {
        if(kokoX + kokoW < 800)
            {
                if(kokoY + kokoW < 600)
                    {
                        context.fillRect(kokoX, kokoY, kokoW, kokoW);
                    }
            }
        }
     
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
     kokoX = mouseX;
     kokoY = mouseY;
     kokoW = 20;
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

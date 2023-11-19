// Creating variables
var kokoX = 0 , kokoY = 0;
var myX = 770 , myY = 0 ;
var tocki = 0;
var leave = 5;


function update() {
   
    kokoX = kokoX + 3;
    ;
    kokoY = kokoY + 1;
   // myX = myX + (mouseX-myX)/10;
    myY = myY + (mouseY-myY)/10;
    
    if(kokoY>600){
        kokoY = 0;
        
    }
   
    if(kokoX+20>=myX){
        if(kokoY>=myY){
            if(kokoY<=myY+100){
                console.log("Bravooooo ")
                kokoX=0;
                 tocki = tocki + 1;
                 console.log("tocki: " + tocki);
            }
        }
    
    }
    
    
    if(kokoX>800){
        if(kokoY>=0){
            if(kokoY<=800){
                leave = leave - 1;
                console.log("leave:" + leave)
            }
        }
    }
    
    if(kokoX>800){
        kokoX = 0
    }
       
    
}


    
    

function draw() {
    // This is how you draw a rectangle
    context.fillRect(kokoX, kokoY, 20, 20);
     context.fillRect(myX, myY, 30, 100);
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

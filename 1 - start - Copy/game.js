// Creating variables
var myX = 0, myY = 0;kokoX=0,kokoY=50,posoka=2
// 
function update() {
    if(posoka==2){
    
   kokoX = kokoX+ 5;
    kokoY = kokoY + 4
    }
     if(posoka==1){
         kokoX=kokoX-5
         kokoY=kokoY-4
     }
    if(posoka==0){
        kokoX=kokoX+5;
        kokoY=kokoY-4;
     }
    
    if(posoka==3){
        kokoX = kokoX-5;
        kokoY = kokoY+4
    }
    if(kokoY>=570){
        posoka=0;
    }
    if(kokoX>=770){
        posoka=1
    }
    
    if(kokoY<=0){
        posoka=3
    }
  
    if(kokoX<0){
        posoka=2
    }
       
    }
  
 

function draw() {
    // This is how you draw a rectangle
    context.fillRect(kokoX, kokoY, 30, 30);
};

function keyup(key) {
    posoka=0
  
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

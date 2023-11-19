// Creating variables
var myX = 0, myY = 0;
var pb = 64;
var moveok = false;
function update() {
    if(myY>=200+30){
        if(myY<=300){
            if(myX>=770){
                console.log("nova igra F5")
            }
        }
    }
        
    
  //  myX = myX+(mouseX-myX)/10;
   // myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
     context.fillRect(770,200, 30, 30);
    context.fillRect(770,300, 30, 30);
        

        

};

function keyup(key) {
    
    if(key==pb+1){
        moveok = true;
        pb = key;
        console.log("Bravo. Sega natisni strelka");
        
    }
      
    if(moveok==true)
        {
            if(key == key_up){
                myY = myY - 50;
                moveok=false;
            }
        if(key == key_down){
            myY = myY + 50;
            moveok=false;
        }
            if(key == key_left){
                myX = myX - 50;
                moveok=false;
            }
            if(key == key_right){
                myX = myX + 50;
                moveok=false;
            }
        }
    
   // console.log("Pressed ", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

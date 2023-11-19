// Creating variables
var myX = 0, myY = 550;
var vr1X = 100,vr1Y = 0,vr1speed = 1;
var vr2X = 500,vr2Y = 0,vr2speed = 2;
var to4ki = 0;
var lives = 10;
var pr1X=0,pr1Y = 550,pr1show=false;


function update() {
    if(lives > 0){
    myX = myX + (mouseX-myX)/10;
    vr1Y = vr1Y + vr1speed;
     vr2Y = vr2Y + vr2speed;
    if(vr1Y > 600){
        vr1Y = 0;
        lives = lives - 1;
        console.log("lives="+ lives);
        vr1X = 800 * Math.random();
        vr1speed = vr1speed +1;
        if(vr1speed > 3){
            vr1speed = 1
        }
    }
    if(vr2Y > 600){
        vr2Y = 0;
        lives = lives - 1;
        console.log("lives="+ lives);
        vr2X = 800 * Math.random();
        vr2speed = vr2speed +1;
        if(vr2speed > 3){
            vr2speed = 1
        }
    }
    if(pr1show==true){
        pr1Y = pr1Y - 6;
        if(pr1Y < 0){
            pr1show = false;
            pr1Y = 550;
            
        }
    }
    if(pr1X>=vr1X){
        if(pr1X<=vr1X+40){
            if(pr1Y<=vr1Y+40){
                pr1show = false;
                vr1Y = 0;
                to4ki = to4ki + 1;
                console.log("to4ki="+ to4ki);
                vr1X = 800 * Math.random();
                vr1speed = vr1speed +1;
                if(vr1speed > 3){
                    vr1speed = 1
                }
            }
         }
    }
    if(pr1X>=vr2X){
        if(pr1X<=vr2X+40){
            if(pr1Y<=vr2Y+40){
                pr1show = false;
                vr2Y = 0;
                to4ki = to4ki + 1;
                console.log("to4ki="+ to4ki);
                vr2X = 800 * Math.random();
                vr2speed = vr2speed +1;
                if(vr2speed > 3){
                    vr2speed = 1
                }
            }
         }
    }
    }
    
       
}
  
 

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 100, 30);
    context.fillRect(vr1X, vr1Y, 40, 40);
    context.fillRect(vr2X, vr2Y, 40, 40);
    if(pr1show == true){
      context.fillRect(pr1X, pr1Y, 10, 30);  
    }
    
};

function keyup(key) {
      
 
    
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

function mouseup() {
    
        pr1show = true;
        pr1X = myX+45;
        pr1Y = 550;
    
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};

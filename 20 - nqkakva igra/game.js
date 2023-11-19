// Creating variables
var myX = 0, myY = 0, nagore=false,nadolo=true;
var vr6X = 760, vr6Y = 30;
var vr1X = 760,vr1Y = 100;
var vr2X = 760, vr2Y = 200;
var vr3X = 760, vr3Y = 300;
var vr4X = 760, vr4Y = 400;
var vr5X = 760, vr5Y = 460;
var gameover = false

function update() {
    if(gameover==false){
    vr1X=vr1X-4;
    vr2X=vr2X-4;
    vr3X=vr3X-4;
    vr4X=vr4X-4;
    vr5X=vr5X-4;
    vr6X=vr6X-4;
    
    
    if(nadolo){
        myY=myY+2
    }else{
        myY=myY-2
    }


if(myY>470){
        myY=470
}
    if(myY<0){
        myY=0
    }
    if(vr1X<0){
        vr1X=760
        vr1Y=vr1Y+50
    }
     if(vr2X<0){
        vr2X=760
        vr2Y=vr2Y+50
    }
    if(vr3X<0){
        vr3X=760
        vr3Y=vr3Y+50
    }
   if(vr4X<0){
        vr4X=760
        vr4Y=vr4Y+50
    }
    if(vr5X<0){
        vr5X=760
        vr5Y=vr5Y+150
    }
    if(vr6X<0){
        vr6X=760
        vr6Y=vr6Y+50
    }
    if(myX+30>=vr6X){
     if(myY>=vr6Y){
         if(myY<=vr6Y + 30){
           console.log("ha ha F5 restart")
        gameover = true
         }
      }
    }
    if(myX+30>=vr1X){
     if(myY>=vr1Y){
         if(myY<=vr1Y + 30){
        console.log("ha ha F5 restart")
         gameover =true
         }
      }
    }
    if(myX+30>=vr2X){
     if(myY>=vr2Y){
         if(myY<=vr2Y + 30){
        console.log("ha ha F5 restart")
         gameover = true
         }
      }
    }
    if(myX+30>=vr3X){
     if(myY>=vr3Y){
         if(myY<=vr3Y + 30){
        console.log("ha ha F5 restart")
         gameover = true
         }
      }
    }
    if(myX+30>=vr4X){
     if(myY>=vr4Y){
         if(myY<=vr4Y + 30){
        console.log("ha ha F5 restart")
         gameover = true
         }
      }
    }
    if(myX+30>=vr5X){
     if(myY>=vr5Y){
         if(myY<=vr5Y + 30){
        console.log("ha ha F5 restart")
         gameover = true
         }
      }
    }
   
    
    }
    
}
  
  //  myX = myX+(mouseX-myX)/10;
//    myY = myY+(mouseY-myY)/10;


function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
     context.fillRect(vr1X, vr1Y, 40, 30);
     context.fillRect(vr2X, vr2Y, 40, 30);
     context.fillRect(vr3X, vr3Y, 40, 30);
    context.fillRect(vr4X, vr4Y, 40, 30);
    context.fillRect(vr5X, vr5Y, 40, 30);
     context.fillRect(vr6X, vr6Y, 40, 30);
};

function keyup(key) {
    if(key==87){
        nagore=true
        nadolo=false
    }
     if(key==83){
         nagore=false
         nadolo=true
     }
    
    
    // Show the pressed keycode in the console
  //  console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

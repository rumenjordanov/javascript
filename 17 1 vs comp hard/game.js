// Creating variables
var myX = 0, myY = 0;
var bX = 760, bY = 540;
var gameover = false;
var p=0;

function update() {
    if(gameover==false){
    if(myX>=320){
        context.fillStyle="#FF0000" 
    }
    if(myX>=490){
        context.fillStyle="#00FF00" 
    }
    if(myY>=380){
        context.fillStyle="#0FF" 
    }
    if(myX+30>=bX){
        if(myX<=bX+40){
           if(myY+30>=bY){
               if(myY<=bY+40){
                   gameover = true;
                   console.log("bravo F5-restart" )
               }
           } 
        }
    }
     
   
        //console.log(p)
        
 if(myX<0){
        myX=0
    }
    if(myX>800){
        myX=770
    }
    if(myY<0){
        myY=0
    }
    if(myY>600){
        myY=570
    }
    
        
    }
    
    
}

function comp(){
    
        if(bX<myX){
           myX = myX - 70  
        }
        else
        if(bX>myX){
              myX = myX + 70  
        }
        if(bY<myY){
              myY = myY - 70  
        }
        if(bY>myY){
           
               myY = myY + 70 
           }
}
function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
    context.fillRect(bX, bY, 40, 40);
};

function keyup(key) {
    
    if(gameover==false){
        comp()
    if(key == key_up){myY = myY - 60}
    if(key == key_down){myY = myY + 60}
    if(key == key_left){myX = myX - 60}
    if(key == key_right){myX = myX + 60}
   
 if(myX<0){
        myX=0
    }
    if(myX>800){
        myX=770
    }
    if(myY<0){
        myY=0
    }
    if(myY>600){
        myY=570
    }
    
    // 87-w , 83-s, 65-a, 68-d
    if(key==65){
        bX=bX - 60;
    }
    if(key==68){
        bX=bX + 60;
    }
    if(key==87){
        bY=bY - 60;
    }
    if(key==83){
        bY=bY + 60;
    }
    
    if(bX<0){
        bX=0
    }
    if(bX>800){
        bX=760
    }
    if(bY<0){
        bY=0
    }
    if(bY>600){
        bY=560
    }
    }
    // Show the pressed keycode in the console
   // console.log("Pressed", key);
    
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

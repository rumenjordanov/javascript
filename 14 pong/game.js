// Creating variables
var myX = 0, myY = 0;kokoX=0,kokoY=50,posoka=2,jijiX = 0,jijiY=0,jiji2X=770,jiji2Y=0;
var to4ki = 0,to4ki2 =0;
// jiji= tate jiji2=rumbata
function update() {
    
    
     jiji2Y = jiji2Y + (mouseY-jiji2Y)/10;
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
    
    if(kokoY>=jiji2Y){
      if(kokoY<=jiji2Y+100){
          if(kokoX+30>=jiji2X){
              posoka=1
          }
      }
    }
     if(kokoY>=jijiY){
      if(kokoY<=jijiY+100){
          if(kokoX<=jijiX+30){
              posoka=2
          }
      }
    }
              
              
    
    if(kokoY>=570){
        posoka=0;
    }
    
    if(kokoX>=800){
        posoka=2
        kokoX=0
        to4ki = to4ki + 1
        console.log("to4ki=" + to4ki)
    }
    
    if(kokoY<=0){
        posoka=3
    }
  
    if(kokoX<0){
        posoka=1
        kokoX=800
        to4ki2 = to4ki2 + 1
        console.log("to4ki2=" + to4ki2)
        
    }
       
}
  
 

function draw() {
    // This is how you draw a rectangle
    context.fillRect(kokoX, kokoY, 30, 30);
    context.fillRect(jijiX, jijiY, 30, 100);
    context.fillRect(jiji2X, jiji2Y, 30, 100);
};

function keyup(key) {
   if(key == key_up){jijiY = jijiY - 60}
     if(key == key_down){jijiY = jijiY + 60}
     if(key == key_left){jijiY = jijiY - 120}
    if(key == key_right){jijiY = jijiY + 120}
    
    
  
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

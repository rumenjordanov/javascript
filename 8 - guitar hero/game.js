// Creating variables
var gamerX = 0,gamerY = 0;
var notaX =  800, notaY = 0;
var notaX2 = 800 , notaY2 = 200 ;
var notaX3 = 800 , notaY3 = 400;
var to4ki = 0;
var gameover = false;
function update(){
    if (gameover == false)
    {
        notaX = notaX - 1;
        notaX2 = notaX2 - 8;
        notaX3 = notaX3 - 3;

        if(gamerY == notaY)
            {
                if(notaX <= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX=800;
                    }
            }
         if(gamerY == notaY2)
            {
                if(notaX2 <= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX2=800;
                    }
            }
           if(gamerY == notaY3)
            {
                if(notaX3<= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX3=800;
                    }
            }

        if(mouseY<200)
        {
            gamerY=0;
        }
         if(mouseY>200)
         {
            gamerY=200;
        }
        if(mouseY>400)
         {
            gamerY=400;
        }

        if(notaX<0)
        {
            
            gameover = true;
            console.log("game over1 noob" + notaX + "/" + notaX2 + "/" + notaX3);
        }
        
        if(notaX2<0)
        {
            
            gameover = true;
            console.log("game over2 noob "+ notaX + "/" + notaX2 + "/" + notaX3);

        }
        
        if(notaX3<0)
        {
            
            gameover = true;
            console.log("game over3 noob  "+ notaX + "/" + notaX2 + "/" + notaX3);

        }
    }
     
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(gamerX,gamerY,30, 200);
    context.fillRect(notaX,notaY,30,200);
    context.fillRect(notaX2,notaY2,30,200);
    context.fillRect(notaX3,notaY3,30,200);
    
};

function keyup (){
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY)
    
    
    
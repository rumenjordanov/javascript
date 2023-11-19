// Creating variables
var gamerX = 0,gamerY = 0;
var notaX =  800, notaY = 0;
var notaX2 = 800 , notaY2 = 150 ;
var notaX3 = 800 , notaY3 = 300;
var notaX4 = 800, notaY4 = 450;

var to4ki = 0;
var gameover = false;
var speed = 1, speed2 = 3, speed3 = 4, speed4 = 2;
var lives = 10;
var pos;

function update(){

    if (gameover == false)
    {
       notaX = notaX - speed;
       notaX2 = notaX2 - speed2;
       notaX3 = notaX3 - speed3;
       notaX4 = notaX4 - speed4;
        

        if(gamerY == notaY)
            {
                if(notaX <= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX=800;
                        pos = Math.random();
                        console.log("pos:" + pos);
                    if(pos>=0)
                      {
                       notaY = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY = 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY = 450;
                       }
                        speed =  speed + 1;
                        if(speed>5)
                            {
                                speed = 1;
                            }
                            
                    }
            }
         if(gamerY == notaY2)
            {
                if(notaX2 <= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX2=800;
                         pos = Math.random();
                        console.log("pos:" + pos);

                    if(pos>=0)
                      {
                       notaY2 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY2= 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY2 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY2 = 450;
                       }
                    
                        speed2 = speed2 + 1;
                         if(speed2>5)
                            {
                                speed2 = 1;
                            }
                    }
            }
           if(gamerY == notaY3)
            {
                if(notaX3<= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX3=800;
                         pos = Math.random();
                         console.log("pos:" + pos);

                    if(pos>=0)
                      {
                       notaY3 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY3= 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY3 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY3 = 450;
                       }
                        speed3 = speed3 + 1;
                         if(speed3>5)
                            {
                                speed3 = 1;
                            }
                    }
            }
            if(gamerY == notaY4)
            {
                if(notaX4<= 30)
                    {
                        to4ki = to4ki + 1;
                        console.log("to4ki: " + to4ki);
                        notaX4=800;
                        pos = Math.random();
                        console.log("pos:" + pos);

                    if(pos>=0)
                      {
                       notaY4 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY4 = 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY4 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY4 = 450;
                       }
                        speed4 = speed4 + 1;
                         if(speed4>5)
                            {
                                speed4 =  1;
                            }
                    }
            }
        
        if(mouseY<150)
        {
            gamerY=0;
        }
         if(mouseY>150)
         {
            gamerY=150;
        }
        if(mouseY>300)
         {
            gamerY=300;
        }
        if(mouseY>450)
        {
            gamerY=450;
        }
        

        if(notaX<0)
        {
            lives = lives - 1;
            if(lives == 0)
            {
            gameover = true;
            }
            if(lives > 0)
                
                {
                    notaX = 800;
                    pos = Math.random();
                    if(pos>=0)
                      {
                       notaY = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY = 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY = 450;
                       }
                    console.log("lives:" + lives);
                }
            console.log("game over1 nob" + notaX + "/" + notaX2 + "/" + notaX3);
        }
        
        if(notaX2<0)
        {
            
            lives = lives - 1;
            if(lives == 0)
            {
            gameover = true;
            }
            if(lives > 0)
                {
                    notaX2 = 800;
                    pos = Math.random();
                    if(pos>=0)
                      {
                       notaY2 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY2= 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY2 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY2 = 450;
                       }
                    
                    console.log("lives:" + lives);
                }
            console.log("game over2 nob "+ notaX + "/" + notaX2 + "/" + notaX3);

        }
        
        if(notaX3<0)
        {
            
            lives = lives - 1;
            if(lives == 0)
            {
            gameover = true;
            }
            if(lives > 0)
                {
                    notaX3 = 800;
                    pos = Math.random();
                    if(pos>=0)
                      {
                       notaY3 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY3= 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY3 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY3 = 450;
                       }
                    
                    console.log("lives:" + lives);
                }
        }
        if(notaX4<0)
        {
            
            lives = lives - 1;
            if(lives == 0)
            {
            gameover = true;
            }
            if(lives > 0)
                {
                    notaX4= 800;
                    pos = Math.random();
                    if(pos>=0)
                      {
                       notaY4 = 0;
                       }
                      if(pos>=0.250)
                      {
                       notaY4 = 150;
                       } 
                    if(pos>=0.500)
                      {
                       notaY4 =300;
                       }
                    if(pos>=0.750)
                      {
                       notaY4 = 450;
                       }
                    console.log("lives:" + lives);
                }
            console.log("game over4 nob  "+ notaX + "/" + notaX2 + "/" + notaX3);

        }
    }
     
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(gamerX,gamerY,30, 150);
    context.fillRect(notaX,notaY,30,150)
    context.fillRect(notaX2,notaY2,30,150)
    context.fillRect(notaX3,notaY3,30,150)
    context.fillRect(notaX4,notaY4,30,150)
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
}
    
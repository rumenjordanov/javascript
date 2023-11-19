// Creating variables
var myX = 1, myY = 1;
var stenaX = 740, vragX1 = 840, vragX2 = 940, vragX3 = 1500;
var points = 0, speed1 = 1, speed2  = 2, speed3 = 2;
var gameover = false;
var lives = 5;


function beep() 
    {
    }

function update() {
        
    if(gameover == false)    
        {
         
            myX = myX + 1;

            if(myY < 420)
            {
                myY = myY + 1;
            }

            if(myY == 420)
            {
               
                lives = lives - 1;
                console.log("lives " + lives)
                if(lives == 0) 
                {
                console.log("game over");
                gameover = true;
                }
                beep();
               

            }

            if(myX == 830)
            {
                myX = 0;
                points = points +1;
                console.log("points ",points)
                console.log("ti si pro")
            }

            if(vragX1 < -100)
            {
                vragX1 = 840;
                speed1 = speed1 + 1;
            }

            if(vragX2 < - 100)
                {
                    vragX2 = 940;
                    speed2 = speed2 + 1;
                }
            if(vragX3 < - 100)
                {
                    vragX3 = 1500;
                    speed3 = speed3 + 1;
                }

            if(myX + 30 >= vragX1)
             if(myX + 30 <= vragX1 + 100)
              if(myY >= 230)
                if(myY <= 260)
                    {
                        console.log("boom!!! vrag1 win!");
                        lives = lives - 1;
                        if(lives == 0) 
                         {
                         console.log("game over");
                         gameover = true;
                         }
         

            if(myX + 30 >= vragX2)
             if(myX + 30 <= vragX2 + 100)
              if(myY >= 120)
                if(myY <= 150)
                    
                        console.log("boom!!! vrag2 win!");
                        lives = lives - 1;
                        console.log("lives " + lives)
                        if(lives == 0) 
                            {
                             console.log("game over");
                             gameover = true;
                            }
                
                        beep();
                    }

            if(myX + 30 >= vragX3)
             if(myX + 30 <= vragX3 + 100)
              if(myY >= 200)
                if(myY <= 230)
                    {
                        console.log("boom!!! vrag3 win!");
                        lives = lives - 1;
                        console.log("lives " + lives)
                        if(lives == 0) 
                            {
                             console.log("game over");
                             gameover = true;
                            }
                        
                        
                        beep();
                    }

            stenaX = stenaX - 1;

            vragX1 = vragX1 - speed1;
            vragX2 = vragX2 - speed2;
            vragX3 = vragX3 - speed3;

             if(myY < 0)
             {
                 lives = lives - 1;
                 console.log("lives " + lives)
                 if(lives == 0) 
                      {
                       console.log("game over");
                       gameover = true;
                      }
                 beep();
                 myY = 1;
             }
             
             
            
        }
   
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30); // gamer
    context.fillRect(1,450,800,250); // pod
    
    context.fillRect(stenaX,0,50,125); // stena gore
    context.fillRect(stenaX,250,50,200); // stena dolu
    
    context.fillRect(vragX1,230,100,30); // vrag1
    context.fillRect(vragX2,120,100,30); // vrag2
    context.fillRect(vragX3,200,100,30); // vrag3
   
};

function keyup(key) {
    myY = myY - 40;
    
    
   // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    myY = myY - 80
    
        
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

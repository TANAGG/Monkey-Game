    var monkey,monkeyImage;
    function preload()
    {

    monkeyImage = loadImage("restart.png");
    }




    function setup()
    {
      createCanvas(600,300);
    monkey = createSprite(50,180,20,50);
    monkey.addImage("r",monkeyImage);
    //monkey.scale = 0.5;

    
      
    }

    function draw() {
      background(220);
      drawSprites();
    }
var ball;
var database, position;

function setup(){

    database=firebase.database();
    
    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballposition=database.ref('Ball/Position')
    ballposition.on("value", ReadPosition,ShowError);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){ 
        
    database.ref('Ball/Position').set({

        x:position.x+x,
        y:position.y+y
    }); 
    
  

}

function ReadPosition(data){

    position=data.val();

    ball.x=position.x
    ball.y=position.y

}



    function ShowError(){

        console.log("hello...you have made a mistake here.. kindly check the code again")

            

        
    }



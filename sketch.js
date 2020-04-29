var ball;
var database;
var position;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();

    var ballRef = database.ref('ball/position')

    ballRef.on("value" , readPosition);

}

function draw(){
    background("white");

    if (position !== undefined) {
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
    }
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;

    database.ref ('ball/position').set({
        x: position.x + x , 
        y: position.y + y  
    });
}

function readPosition (data) {
position = data.val();
 
console.log (position);

ball.x = position.x;
ball.y = position.y;
}



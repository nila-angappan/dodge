var player
var enemy
function setup(){
        createCanvas (500,500)
        player = createSprite(width / 2, height - 25, 50, 50)
        enemy = createSprite(width / 2, 0, 10, 30)
}

function draw(){
    background(71, 126, 214)

    if(keyDown(RIGHT_ARROW) && player.position.x < width - 25){
        player.position.x = player.position.x + 11
    }
    
    if(keyDown(LEFT_ARROW) && player.position.x > 25){
        player.position.x = player.position.x - 11
    }

    enemy.position.y = enemy.position.y + 9

    if(enemy.position.y > height){
        enemy.position.y = 0
        enemy.position.x = random(5, width - 5)
    }

    drawSprites()
}
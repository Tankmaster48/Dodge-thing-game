// Variables
let c = document.getElementById('canvas');
let ctx = c.getContext("2d");
let x = 245;
let y = 245;
let prevx;
let prevy;

// Key Pressed
document.onkeypress = function(e) {
    e = e || window.event;
    let charCode = e.keyCode || e.which;
    let charStr = String.fromCharCode(charCode);
    prevx=x;
    prevy=y;
    if(charStr === 'w' && prevy !== 0) {
        y-=5
        createBlock();
    } else if(charStr === 's' && prevy !== 480) {
        y+=5
        createBlock();
    } else if(charStr === 'a' && prevx !== 0) {
        x-=5
        createBlock();
    } else if(charStr === 'd' && prevx !== 480) {
        x+=5
        createBlock();
    }
};

createBlock();

// Create block
function createBlock() {
    ctx.clearRect(prevx, prevy, 20, 20);
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 20, 20);
    ctx.stroke();
}

createObstacle()
// Create obstacle
function createObstacle() {
    let obstacleX = Math.floor(Math.random()*486);
    let obstacleY = 0
    let prevoy = obstacleY;
    ctx.beginPath();
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(obstacleX, obstacleY, 20, 20);
    ctx.stroke();

    window.setInterval(function() {
        prevoy = obstacleY
        ctx.clearRect(obstacleX, prevoy, 20, 20);
        obstacleY+=1;
        ctx.beginPath();
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(obstacleX, obstacleY, 20, 20);
        ctx.stroke();

        if(obstacleX >= x && obstacleX <= x+20 && obstacleY >= y && obstacleY <= y+20) {
            alert('You lose')
            location.reload()
        }
    }, 10)
}

window.setInterval(createObstacle, 200)

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.height = 576
canvas.width = 1024

const gravity = 0.2;
function uppdate_screen(){
    c.fillStyle = "gray"; 
    c.fillRect(0, 0, canvas.width, canvas.height);
}

class Player {
    constructor(){
        this.postion = {
            x: 0,
            y: 0,
        },
        this.velocity = {
            x:0,
            y:1,
        }
        this.width = 100;
        this.height = 100; 
    }

    draw() {
        c.fillStyle = "green";
        c.fillRect(this.postion.x, this.postion.y, this.width, this.height);
    }

    uppdate_player(){
        this.postion.y += this.velocity.y;

        if(this.postion.y + this.velocity.y + this.height < canvas.height){ // Denna kollar att om själva 
            this.velocity.y += gravity;
        }
        else{
            this.velocity.y = 0;
        }
    }
}

const player1 = new Player();

function animate(){ // animation or gameloop
    window.requestAnimationFrame(animate)
    uppdate_screen();
    player1.draw();
    player1.uppdate_player();
    console.log("animate");
}
animate();
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.height = 576
canvas.width = 1024
const gravity = 0.09;

class Player {
    constructor(postion){
        this.postion = postion;
        this.velocity = {
            x:0,
            y:1,
        }
        this.height = 100;
    }

    draw(){
        c.fillStyle = "red";
        c.fillRect(this.postion.x, this.postion.y, 100, this.height);
    }

    uppdate(){
        this.postion.y += this.velocity.y;
        this.postion.x += this.velocity.x;
        if(this.postion.y + this.height + this.velocity.y < canvas.height){
            this.velocity.y += gravity;
        }
        else{
            this.velocity.y = 0
        }
    }
}


const player = new Player({x:0, y:0});

const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false
    },
}


function animate(){
    window.requestAnimationFrame(animate)
    console.log("animate")

    c.fillStyle = "gray";
    c.fillRect(0,0, canvas.width, canvas.height);
    player.draw();
    player.uppdate();

    player.velocity.x = 0;
    if(keys.d.pressed){
        player.velocity.x = 2;
        
    } 
    else if(keys.a.pressed){
        player.velocity.x = -2
    }
}
animate();

window.addEventListener("keydown", (event) => {
    switch(event.key){
        case "d":
            keys.d.pressed = true;
            
        break;
        case "a":
            keys.a.pressed = true;
        break;
        case " ":
            player.velocity.y = -8;
        break;

    }
})


window.addEventListener("keyup", (event) => {
    switch(event.key){
        case "d":
            keys.d.pressed = false;
            
        break;
        case "a":
            keys.a.pressed = false;
        break;
    }
})





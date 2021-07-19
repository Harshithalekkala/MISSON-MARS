var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var background_image="mars.jpg";
var rover_image="rover.png";
var rover_x=10;
var rover_y=10;
var rover_width=100;
var rover_height=90;

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    console.log(e);
    keypressed=e.keyCode;
    if (keypressed=='39') {
      right();
    }

    if(keypressed=='37'){
        left();
    }

    if (keypressed=='38') {
        up();
    }

    if (keypressed=='40') {
        down();
    }
}

var socket;


function setup(){
    createCanvas(1296,612);
    background(51);

    socket = io.connect('http://localhost:3000')
    socket.on('mouse',function(data){

        
        noStroke(255);
        colorMode(HSB);
        fill(255, 204, 100);
        ellipse(data.x,data.y,20,20);
       
    })
}



function mouseDragged(){
    // console.log(mouseX +' , '+mouseY);

    var data = {
        x:mouseX,
        y:mouseY
    }

    socket.emit('mouse',data);


    noStroke(255);
    fill(255);
    ellipse(mouseX,mouseY,20,20);
}

var lastX, lastY;
color = "black";
lineWidth = 1;
var mouseEvent = "empty";

var canvas = document.getElementById("myCanvas").value;
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    //color = document.getElementById("color").value;
    //OTHER ADDITIONAL ACTIVITY
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        console.log("Last position of x and y coordinates are =");
        console.log("lastX = " + lastX + " lastY = " + lastY);
        ctx.moveTo(lastX, lastY);

        console.log("Current position of x and y coordinates are =");
        console.log("currentX = " + currentX + " currentY = " + currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;
}
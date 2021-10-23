var speed=document.getElementById("speed").value
var marqueeScrolling=document.getElementsByTagName("marquee");
console.log(speed)  

function changeTheValue(speedvalue){
    console.log(speedvalue);
    marqueeScrolling[0].setAttribute("scrollamount",speedvalue);
    document.getElementById("mymarquee").start();
}


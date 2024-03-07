function change(block){
    block.style.backgroundColor="rgba(255, 255, 0, 0.29)";
    block.innerHTML="X";
    block.style.boxShadow="0px 0px 20px yellow";
    block.style.color="yellow";
    document.getElementById("1").onclick = color1O();
    document.getElementById("2").onclick = color2O();
    document.getElementById("3").onclick = color3O();
    document.getElementById("4").onclick = color4O();
    document.getElementById("5").onclick = color5O();
    document.getElementById("6").onclick = color6O();
    document.getElementById("7").onclick = color7O();
    document.getElementById("8").onclick = color8O();
    document.getElementById("9").onclick = color9O();
}
function change2(block2){
    block2.style.backgroundColor="rgba(0, 255, 4, 0.311)";
    block2.innerHTML="O";
    block2.style.boxShadow="0px 0px 20px limegreen";
    block2.style.color="limegreen";
    document.getElementById("1").onclick = color1X();
    document.getElementById("2").onclick = color2X();
    document.getElementById("3").onclick = color3X();
    document.getElementById("4").onclick = color4X();
    document.getElementById("5").onclick = color5X();
    document.getElementById("6").onclick = color6X();
    document.getElementById("7").onclick = color7X();
    document.getElementById("8").onclick = color8X();
    document.getElementById("9").onclick = color9X();
}

function color1X(){
    var block=document.getElementById("1");
    change(block);
}
function color2X(){
    var block=document.getElementById("2");
    change(block);
}
function color3X(){
    var block=document.getElementById("3");
    change(block);
}
function color4X(){
    var block=document.getElementById("4");
    change(block);
}
function color5X(){
    var block=document.getElementById("5");
    change(block);
}
function color6X(){
    var block=document.getElementById("6");
    change(block);
}
function color7X(){
    var block=document.getElementById("7");
    change(block);
}
function color8X(){
    var block=document.getElementById("8");
    change(block);
}
function color9X(){
    var block=document.getElementById("9");
    change(block);
}


function color1O(){
    var block2=document.getElementById("1");
    change2(block2);
}
function color2O(){
    var block2=document.getElementById("2");
    change2(block2);
}
function color3O(){
    var block2=document.getElementById("3");
    change2(block2);
}
function color4O(){
    var block2=document.getElementById("4");
    change2(block2);
}
function color5O(){
    var block2=document.getElementById("5");
    change2(block2);
}
function color6O(){
    var block2=document.getElementById("6");
    change2(block2);
}
function color7O(){
    var block2=document.getElementById("7");
    change2(block2);
}
function color8O(){
    var block2=document.getElementById("8");
    change2(block2);
}
function color9O(){
    var block2=document.getElementById("9");
    change2(block2);
}


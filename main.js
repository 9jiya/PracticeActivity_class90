var x = 0;
function score(){
    x = x+1;
    document.getElementById("score_answer").innerHTML = "Score ="+ x;
}
function Next(){
    window.location="index1.html";
}
function save(){
    localStorage.setItem("save",x);
}
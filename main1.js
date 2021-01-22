item = localStorage.getItem("save");
function score(){
    document.getElementById("score_answer").innerHTML = save;
}
function previous(){
    window.location = "index.html";
}
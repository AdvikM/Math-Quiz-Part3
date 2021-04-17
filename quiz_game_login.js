var player1, player2;
function start(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "quiz_game_page.html";
}
player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
var highScores = localStorage.getItem("userScores") ? JSON.parse(localStorage.getItem("userScores")): [];
var tBody = document.getElementById("tBody");


for (const score of highScores) {
    var tr = document.createElement("tr");
    var tdScore = document.createElement("td");
    var tdInitials = document.createElement("td");
    tdScore.textContent = score.score;
    tdInitials.textContent = score.initials;
    tr.appendChild(tdInitials);
    tr.appendChild(tdScore);
    tBody.appendChild(tr);
    
}


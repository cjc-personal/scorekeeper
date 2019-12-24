class Team {
  constructor(name, score=0){
    this.name=name;
    this.score=score;
  }
}
function changeName(team){
  let team1Name=document.getElementById("team1Name");
  let team2Name=document.getElementById("team2Name");
  if(team===team1){
    team1Name.innerHTML="<input type='text'/><button>Submit</button>";
  }
}



let team1Score=document.getElementById("team1Score");
let team2Score=document.getElementById("team2Score");
function returnScores(){
  team1Score.innerHTML=team1.score;
  team2Score.innerHTML=team2.score;
}
function scoreUp(team){
  team.score++
  returnScores();
}
function scoreDown(team){
  if(team.score>0){
    team.score--;
  }
  returnScores();
}
function resetScores(){
  team1.score=0;
  team2.score=0;
  returnScores();
}
function resetScreen(){
  resetScores();
  team1.name="team1";
  team2.name="team2";
}
window.addEventListener('load', function(){
  let team1=new Team('team1');
  let team2=new Team('team2');
  resetScreen();

  





});

let newarr = ['Yuvi','Kuldeep','Bumbra','Bhuvi','Chahal','Pant'];
let players = ['Rohit Sharma','Shikhar Dhawan','Virat Kholi','MS Dhoni','Hardik Pandya'];


let textArea = document.getElementById('text-area');
let gameButton = document.getElementById('game-button');
let modifyButton = document.getElementById('modify-button');
let teamButton = document.getElementById('team-button');

/* Initially these button should not be visible...so hide it*/
modifyButton.style.display='none';
teamButton.style.display='none';

/*After click the start button 
*/
gameButton.addEventListener('click',function() 
{
gameButton.style.display='none';
//modifyButton.style.display='inline';
//teamButton.style.display='inline';
show();
});


function show(){
    textArea.innerText +='\n';
    textArea.innerText +='\n'+'The Players in the List to play the Game are'+'\n';
    for(var i=0;i<players.length;i++){
        textArea.innerText +='\n'+players[i];
    }
    textArea.innerText +='\n';
   /* to get the number of players available */
   
    var a=players.length;
    textArea.innerText +='\n';
    textArea.innerText +='The total number of Available players is '+a;
    textArea.innerText +='\n';

    if(a>6){                         //this is for modify button
      textArea.innerText +='\n';
      textArea.innerText +='\n'+' Using modify button Remove the player to start the game!!!'+'\n';
      modifyButton.style.display='inline';
      var count=a-6;
      textArea.innerText +='The total players  to remove is '+count;
            for(var i=0;i<count;i++){
              players.pop();//use math.random
            }      
        }


        else if(a<6){               //This is for Add button
          textArea.innerText +='\n';
          textArea.innerText +='\n'+'usind Add button, Introduce  the new player to start the game!!!'+'\n';
          teamButton.style.display='inline';
          var count=6-count;
          for(var i=count;i<=6;i++){
            players.push(newarr[i]);// Gettting a new player form existing Array
          }
      }


    if(a===2){
      let  Team_A=[players[0]];
      let  Team_B=[players[1]];
      textArea.innerText +='\n'+'Team A';
      textArea.innerText +='\n'+Team_A[0];
      textArea.innerText +='\n';
      textArea.innerText +='\n'+'Team B';
      textArea.innerText +='\n'+Team_B[0];
    }
    else if(a===4){
        let  Team_A=[players[0],players[2]];
      let  Team_B=[players[1],players[3]];
      textArea.innerText +='\n'+'Team A';
      for(var i=0;i<Team_A.length;i++){
              textArea.innerText +='\n'+Team_A[i];
      }
      textArea.innerText +='\n';
      textArea.innerText +='\n'+'Team B';
      for(var i=0;i<Team_B.length;i++){
               textArea.innerText +='\n'+Team_B[i];
      }
    }
    else if(a===6){
        let  Team_A=[players[0],players[2],players[4]];
        let  Team_B=[players[1],players[3],players[5]];
        textArea.innerText +='\n'+'Team A';
        for(var i=0;i<Team_A.length;i++){
                textArea.innerText +='\n'+Team_A[i];
        }
        textArea.innerText +='\n';
        textArea.innerText +='\n'+'Team B';
        for(var i=0;i<Team_B.length;i++){
                 textArea.innerText +='\n'+Team_B[i];
        }
    }
        }

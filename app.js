//Prevent animation on load
setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  
  //Variables
  const buttons = document.querySelectorAll('.pick');
  const playerScore = document.getElementById('player_score');
  const computerScore = document.getElementById('computer_score');
  const choices = ['paper', 'scissors', 'rock'];
  const main = document.getElementById('main');
  const selection = document.getElementById('selection');
  const resetBtn = document.getElementById('reset');
  const result = document.getElementById('win');
  const player_select = document.getElementById('player_select');
  const computer_select = document.getElementById('computer_select');
  const btnRules = document.querySelector('.btn-rules');
  const btnClose = document.querySelector('.btn-close');
  const modalRules = document.querySelector('.modal');
  const player = document.querySelector('lottie-player'); //animation
  
  //Initialize scores & player choice
  let pScore = 0;
  let cScore = 0;
  let playerChoice = undefined;
  
  //Game logic
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
  
      playerChoice = button.getAttribute('data-choice');
      main.style.display = 'none';
      selection.style.display = 'grid';
      playRound();
  
    })
  });
  
  //Play again button
  resetBtn.addEventListener('click',()=>{
  
        main.style.display = 'flex';
        selection.style.display = 'none';
        
  });
  
  //Function for a single round game
  function playRound()
  {
  
      //Store computer choice
      const computerChoice = pickRandomChoice();
  
      //Update selection (image) of player & computer
      updateSelection(player_select, playerChoice);
      updateSelection(computer_select, computerChoice);
  
      if (playerChoice === computerChoice)
      {
  
          //Draw
          result.innerText= "It's a Draw";
  
  
      }else if(playerChoice === 'paper' && computerChoice === 'rock'
       || playerChoice === 'rock' && computerChoice === 'scissors'
       || playerChoice === 'scissors' && computerChoice === 'paper')
      {
  
          //User won
          playerScoreUpdate();
          result.innerText= "You Win";
          
       }else
       {
  
          //Computer won
          computerScoreUpdate();
          result.innerText= "You Lose";
  
       }
     
      whoWon();
  
  }
  
  //Update player score
  function playerScoreUpdate()
  {
  
    pScore++;
    playerScore.innerText = pScore;
  
  }
  
  //Update computer score
  function computerScoreUpdate()
  {
  
    cScore++;
    computerScore.innerText = cScore;
  
  }
  
  //Function to end the game
  function endGame() 
  {
  
    if (pScore === 5 || cScore === 5)
    {
  
      return true;
  
    }
    return false;
  }
  
  //Function to check who won
  function whoWon()
  {
  
    if (endGame()) 
    {
  
        if (pScore === 5)
        {
  
          result.innerText = "Player is the Winner! Congratulations!";
  
        } else
        {
  
          result.innerText = "Computer is the Winner! You Lose!";
       
        }
  
        //When winner is won then display the each scores 0
        pScore = 0;
        cScore = 0;
  
        playerScore.innerText = pScore;
        computerScore.innerText = cScore;
      
    }
  
  }
  
  //Function to pick computer choice
  function pickRandomChoice()
  {
  
    return choices[Math.floor(Math.random()*choices.length)];
  
  }
  
  //Update player selection
  function updateSelection(selectionEl, choice,idx)
  {
    setTimeout(() => {
  
      selectionEl.classList.remove('btn-paper');
      selectionEl.classList.remove('btn-scissors');
      selectionEl.classList.remove('btn-rock');
  
      //Update selection image
      const img = selectionEl.querySelector('img');
      selectionEl.classList.add('btn-'+choice);
      img.src='images/icon-'+choice+'.svg';
      img.alt = choice; 
    
    }, idx * 1000);
  }
  
  
  //Show game's rules
  btnRules.addEventListener('click', () => {
  
    modalRules.classList.toggle('show-modal');
  
  });
  
  //Hide game's rules
  btnClose.addEventListener('click', () => {
  
    modalRules.classList.toggle('show-modal');
  
  });
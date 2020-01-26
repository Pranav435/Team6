window.onload = function () {
  var introAudio = new Audio('./audio-alphabet/welcometohangman.wav');
  if(introAudio){
    introAudio.play();
  }
  var earliarKeySelected ='';
  
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul 
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.tabIndex= i+2;
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  var playSound = function(i) {
    alert(i);
  }
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Guess the Game";
      
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Guess the Subject";
     
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Guess the Language";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if(lives == 9){
      var introAudio4 = new Audio('./audio-alphabet/lives9.mp3')
      if(introAudio4)
      introAudio4.play();}
    else if(lives == 8){
    	var introAudio4 = new Audio('./audio-alphabet/lives8.mp3');
      if(introAudio4)
      introAudio4.play();}
    else if(lives == 7){
              var introAudio4 = new Audio('./audio-alphabet/lives7.mp3');
              if(introAudio4)
              introAudio4.play();}
    else if(lives == 6){
              var introAudio4 = new Audio('./audio-alphabet/lives6.mp3');
              if(introAudio4)
              introAudio4.play();}
    else if(lives == 5){
                var introAudio4 = new Audio('./audio-alphabet/lives5.mp3');
                if(introAudio4)
                introAudio4.play();}
    else if(lives == 4){
                var introAudio4 = new Audio('./audio-alphabet/lives4.mp3');
                if(introAudio4)
                introAudio4.play();
             }
    else if(lives == 3){
                var introAudio4 = new Audio('./audio-alphabet/lives3.mp3');
                if(introAudio4)
                introAudio4.play();
             }
    else if(lives == 2){
                var introAudio4 = new Audio('./audio-alphabet/lives2.mp3');
                if(introAudio4)
                introAudio4.play();
              	}
    else if(lives == 1){
                var introAudio4 = new Audio('./audio-alphabet/lives1.mp3');
                if(introAudio4)
                introAudio4.play();;
        
          }
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      var introAudio4 = new Audio('./audio-alphabet/lose2.ogg');
      if(introAudio4)
      introAudio4.play();
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        var introAudio4 = new Audio('./audio-alphabet/win2.ogg');
        if(introAudio4)
        introAudio4.play();
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onfocus = function(){
      var audio = new Audio('./audio-alphabet/'+this.innerHTML+'.wav');
        audio.play();
    }
    list.onkeypress = function(event){
      if (event.keyCode === 13) {
           
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }

      }
    }
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    } 
  }
  
  
  // Play
  play = function () {
    categories = [
        ["cricket", "badminton", "swimming", "football", "volleyball"],
        ["history", "geography", "economics", "physics", "chemistry", "biology"],
        ["english", "sanskrit", "chinese", "japanese", "spanish", "bengali", "malayalam", "kannada", "italian"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    //
    switch(chosenCategory){
      case categories[0]:{
          switch (word.length){
            case 9:
              var introAudio4 = new Audio('./audio-alphabet/game9.mp3');
                  if(introAudio4)
                  introAudio4.play();
                break;
            case 8:
              var introAudio4 = new Audio('./audio-alphabet/game8.mp3');
                if(introAudio4)
                introAudio4.play();
                break;
            case 7:
              var introAudio4 = new Audio('./audio-alphabet/game7.mp3');
              if(introAudio4)
              introAudio4.play();
              break;
          }
      }
      break;
      case categories[1]:{
        switch (word.length){
            case 9:
              var introAudio4 = new Audio('./audio-alphabet/subject9.mp3');
              if(introAudio4)
              introAudio4.play();
              break;
            case 8:
                var introAudio4 = new Audio('./audio-alphabet/subject8.mp3');
                if(introAudio4)
                introAudio4.play();
                break;
            case 7:
                var introAudio4 = new Audio('./audio-alphabet/subject7.mp3');
                if(introAudio4)
                introAudio4.play();
                break;
          }
      }
      break;
      case categories[2]:{
        switch (word.length){
            case 9:
                var introAudio4 = new Audio('./audio-alphabet/lang9.mp3');
                if(introAudio4)
                introAudio4.play();
                break;
            case 8:
                var introAudio4 = new Audio('./audio-alphabet/lang8.mp3');
                if(introAudio4)
                introAudio4.play();
            break;
            case 7:
                var introAudio4 = new Audio('./audio-alphabet/lang7.mp3');
                if(introAudio4)
                introAudio4.play();
                break;
          }
      }
      break;
      default://sorry couldn't get u
    }
    var introAudio2 = new Audio('./audio-alphabet/h.wav');
      if(introAudio2)
      introAudio2.play();
    //
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

   /* hint.onclick = function() {

      hints = [
        ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
        ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
    ]; 

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };*/
  document.addEventListener('keydown', function(event) {
  		var index= alphabet.findIndex(function(element){
  				return event.key == element;
  		})
    	if(index> -1 || event.key =='Tab' || event.key =='Enter'){
    	if(event.key !='Tab' && event.key !='Enter'){
      var audio = new Audio('./audio-alphabet/'+event.key+'.wav');
      if(audio)
        audio.play();
    	
       var geuss = event.key;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    	}
      }
      else{
      	var introAudio4 = new Audio('./audio-alphabet/alphabet.mp3');
          if(introAudio4)
          introAudio4.play();
      }
    });
   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}



//Make it so that you don't repeat sides...
//-------------------------------------------------------print random pic depending upon which button pushed---------------
const unitNum = 1;
const chapNum = 1;

function calculate (sectionVar) {
  
  let secNum;
//.........................................determine what section the user wants from button selected
  if (typeof sectionVar == 'undefined') {
    // the variable is notdefined
    let randomSection = Math.floor((Math.random() * 2));

      if (randomSection == 0) {
        secNum = unitNum + "-" + chapNum + ".1";
      } else {
        secNum = unitNum + "-" + chapNum + ".2";
      }
    } else {
    secNum = sectionVar;
  }

  let arrayLength = library[secNum].length;
  let randompic = Math.floor((Math.random() * arrayLength));
  
  //...................................................get html elements
  let prompt = document.getElementById("prompt");
  let pic = document.getElementById("pic");
  let answer = document.getElementById("hideAnswersLine");
  let credit = document.getElementById("credit");

//......................................................get card info
  let current_prompt = library[secNum][randompic].prompt;
  let current_image = library[secNum][randompic].image;
  let current_alt = library[secNum][randompic].alt;
  let current_answer = library[secNum][randompic].answer;
  let current_credit = library[secNum][randompic].credit;

  //..............................................insert card info into html elements
  prompt.innerHTML = current_prompt;
  pic.src = "images/" + current_image;
  pic.alt = current_alt;
  answer.innerHTML = current_answer;
  credit.innerHTML = current_credit;
};

//------------------------------------------------------Chap 1-1--------------------------------------------

function knownSentencesLine () {
  calculate (unitNum + "-" + chapNum + ".1");
}
  
function unknownSentencesLine () {
  calculate (unitNum + "-" + chapNum + ".2");
}

function chapSentencesLine () {
  calculate();
}

function hideAnswersLine() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("hideAnswersLine");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const knownSentencesbutton = document.getElementById("knownSentencesbutton").addEventListener("click", knownSentencesLine); 
const unknownSentencesbutton = document.getElementById("unknownSentencesbutton").addEventListener("click", unknownSentencesLine); 
const chapSentencesbutton = document.getElementById("chapSentencesbutton").addEventListener("click", chapSentencesLine); 
const hideAnswers = document.getElementById("myCheck").addEventListener("click", hideAnswersLine); 

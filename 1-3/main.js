//-------------------------------------------------------print random pic depending upon which button pushed---------------
const unitNum = 1;
const chapNum = 3;

function calculate (sectionVar) {
  
  let secNum;
//.........................................determine what section the user wants from button selected
  if (typeof sectionVar == 'undefined') {
    // the variable is notdefined
    let random1or2 = Math.floor((Math.random() * 2));

      if (random1or2 == 0) {
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
  pic.src = "../images/" + current_image;
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

function masterSentencesLine () {
  
  
  let secNum;

  let randomSectionUnitNum = Math.floor((Math.random() * unitNum + 1));
  let randomSectionChapNum = Math.floor((Math.random() * chapNum + 1));
  let random1or2Max = Math.floor((Math.random() * 2 + 1));

  
    secNum = randomSectionUnitNum + "-" + randomSectionChapNum + "." + random1or2Max;
    console.log(secNum);

    let arrayLength = library[secNum].length;
    let randompic = Math.floor((Math.random() * arrayLength));
      
    //...................................................get html elements
    let prompt = document.getElementById("prompt");
    let pic = document.getElementById("pic");
    let answer = document.getElementById("hideAnswersLine");
    let credit = document.getElementById("credit");

//  ......................................................get card info
    let current_prompt = library[secNum][randompic].prompt;
    let current_image = library[secNum][randompic].image;
    let current_alt = library[secNum][randompic].alt;
    let current_answer = library[secNum][randompic].answer;
    let current_credit = library[secNum][randompic].credit;

    //..............................................insert card info into html elements
    prompt.innerHTML = current_prompt;
    pic.src = "../images/" + current_image;
    pic.alt = current_alt;
    answer.innerHTML = current_answer;
    credit.innerHTML = current_credit;
  
}
//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const knownSentencesbutton = document.getElementById("knownSentencesbutton").addEventListener("click", knownSentencesLine); 
const unknownSentencesbutton = document.getElementById("unknownSentencesbutton").addEventListener("click", unknownSentencesLine); 
const chapSentencesbutton = document.getElementById("chapSentencesbutton").addEventListener("click", chapSentencesLine); 
const masterSentencesbutton = document.getElementById("masterSentencesbutton").addEventListener("click", masterSentencesLine); 
const hideAnswers = document.getElementById("myCheck").addEventListener("click", hideAnswersLine);

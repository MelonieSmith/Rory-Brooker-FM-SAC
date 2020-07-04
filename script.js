function start()  {
  openPage.classList.toggle('hide');
  puzzleOne.classList.toggle('hide');
}
begin.onclick = start;

//Name question = payment amount (361.16)
//Age question = starting value (6000)
//Shoe Size question = months after investment doubled for each banks (5 5 5 5)
//four question = value after 1 year with Take (25476.84)

function checkIfLinedUp() {

  if (nameAnswer.value.toLowerCase() === '361.16' && ageAnswer.value.toLowerCase() ===  "6000" && shoesizeAnswer.value.toLowerCase() === "5 5 5 5" && fourAnswer.value.toLowerCase() === "25476.84") {
      finishPuzzleOne.classList.toggle('hide');
      window.scrollTo(0,document.body.scrollHeight); //if they are all correct show the next button
    }
  }
nameAnswer.oninput = checkIfLinedUp;
ageAnswer.oninput = checkIfLinedUp;
shoesizeAnswer.oninput = checkIfLinedUp;
fourAnswer.oninput = checkIfLinedUp;

//bank question = call back should be selected
function onAnswerOne()  {
  var ddl = document.getElementById("myList");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "Select a bank")
   {
    alert("Please select a bank.");
   }
    resultOne.textContent = 'Nope!';
    if (myList.value == 'Call Back') {
        congratesMoveOnPuzzleOne.classList.toggle('hide');
        window.scrollTo(0,document.body.scrollHeight);
        resultOne.textContent = "Good Job!";
        }

  }


function movePuzzleTwo()  {
  puzzleOne.classList.toggle('hide');
  puzzleTwo.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
moveToPuzzleTwo.onclick = movePuzzleTwo;

function submitAnswerTwo() {
  var radios = document.getElementsByName("choice");
  var len = radios.length;
  var checked = false;
  var userAnswer;
  for(i=0; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  }
  var radiosA = document.getElementsByName("choicA");
  var lenA = radiosA.length;
  var checkedA = false;
  var userAnswerA;
  for(k=0; k < lenA; k++ ) {
     if(radiosA[k].checked) {
       checkedA = true;
       userAnswerA = radiosA[k].value;
     }
  }
  // if user click submit button without selecting any option, alert box
  //should be say "please select choice answer".


  if(!checked) {
    alert("Please select choice answer");
    return;
  }
  if(!checkedA) {
    alert("Please select choice answer");
    return;
  }

  // Correct answer
//question 1 = 540000
//question 2 = Number 4
//question 3 = 461043.73
//question 4 = 3504.24
//question 5 = 242
//question 6 = 38924.29
//question 7 = 3161.62
//second multiple choice question = first one
  if(userAnswer === "Dis Tress" && InterestAnswerA.value.toLowerCase() === '540000' && CompoundAnswerA.value.toLowerCase() === "461043.73" && CompoundAnswerC.value.toLowerCase() === '3504.24' && CompoundAnswerD.value.toLowerCase() === '242' &&
  CompoundAnswerE.value.toLowerCase() === '38924.29' && CompoundAnswerF.value.toLowerCase() === '3161.62' && userAnswerA === "right") {
     finishPuzzleTwoButton.classList.toggle('hide');
     submitAnswerTwoButton.classList.toggle('hide');
     completePuzzleTwoButton.classList.toggle('hide');
     window.scrollTo(0,document.body.scrollHeight);
  }
  // incorrect answer
  else {
     alert("Answer is wrong!");
  }
}

submitAnswerTwoButton.onclick = submitAnswerTwo;

function onCompletionPuzzleTwo()  {

  puzzleTwo.classList.toggle('hide')
  puzzleThree.classList.toggle('hide')
  document.documentElement.scrollTop = 0;

}
finishPuzzleTwoButton.onclick = onCompletionPuzzleTwo;
//Average distance per month
function onCompletionPuzzleThreeA()  {
  resultThree.textContent = 'Nope! Try again.';
  if (puzzleThreeAInput.value === '1250') {
    //puzzleThreeAInput.classList.toggle('hide');
    resultThree.textContent = "Correct!";
    setTimeout(function(){puzzle3AQuestion.classList.toggle('hide')
                          puzzleThreeBtn.classList.toggle('hide');
                          }, 1000);
}
}
//Price depreciation per year
function onCompletionPuzzleThreeB()  {
  resultThree.textContent = 'Nope! Try again.'
  if (puzzleThreeBInput.value === '450' ) {
    resultThree.textContent = "Correct Again!";
    setTimeout(function(){puzzle3BQuestion.classList.toggle('hide')
                          puzzleThreeCtn.classList.toggle('hide');
                          window.scrollTo(0,document.body.scrollHeight);
                          }, 1000);
  }
}
//current price of car
function onCompletionPuzzleThreeC()  {
  resultThree.textContent = 'Nope! Try again.'
  if (puzzleThreeCInput.value === '15000' ) {
    resultThree.textContent = "Correct Again!";
    setTimeout(function(){puzzle3CQuestion.classList.toggle('hide')
                          puzzleThreeDtn.classList.toggle('hide');
                          window.scrollTo(0,document.body.scrollHeight);
                          }, 1000);
  }
}
//future price if rate increases to 5 cents per km
function onCompletionPuzzleThreeD()  {
  resultThree.textContent = 'Nope! Try again.'
  if (puzzleThreeDInput.value === '11250' ) {
    resultThree.textContent = "Correct Again!";
    setTimeout(function(){puzzle3DQuestion.classList.toggle('hide')
                          puzzleThreeBBtn.classList.toggle('hide');
                          window.scrollTo(0,document.body.scrollHeight);
                          }, 1000);
  }
}

puzzleThreeAInput.oninput = onCompletionPuzzleThreeA;
puzzleThreeBInput.oninput = onCompletionPuzzleThreeB;
puzzleThreeCInput.oninput = onCompletionPuzzleThreeC;
puzzleThreeDInput.oninput = onCompletionPuzzleThreeD;


function moveToPuzzleFour()  {
  puzzleThree.classList.toggle('hide');
  puzzleFour.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
finishPuzzleThreePartBButton.onclick = moveToPuzzleFour;


//puzzle four
//the 3 values are 1490 82.00 1572.00
//question 2 = 12500
//question 3 = 6.3
//question 4 = 271628.27
//question 5 = 602
//question 6 = 1800.25
function checkPuzzleFour()  {
  resultFour.textContent = 'Nope! Try again.'
  if (puzzleFourInputPartOne.value == '1490.00 82.00 1572.00' &&
  puzzleFourInputPartTwo.value == '12500' && puzzleFourInputPartThree.value == '6.3' &&
  puzzleFourInputPartFour.value == '271628.27' && puzzleFourInputPartTwo1.value == '602' &&
  puzzleFourInputPartTwo2.value == '1800.25')  {
    finishPuzzleFourButton.classList.toggle('hide');
    puzzleFourBtn.classList.toggle('hide');
    window.scrollTo(0,document.body.scrollHeight);
    resultFour.textContent = "Good Job!";
  }
}
checkPuzzleFourAnswers.onclick = checkPuzzleFour;

function changeToPuzzleFive()  {
  puzzleFour.classList.toggle('hide');
  puzzleFive.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
finishPuzzleFourButton.onclick = changeToPuzzleFive;

//puzzle 5
//question 1 = 1545934.54
//question 2 = 1545934.54
//question 3 = 129858.50
//question 4 = 103577.61
//question 5 = number 3
function checkPuzzleFive()  {
  resultFive.textContent = 'Nope! Try again.';
  var radiosB = document.getElementsByName("choiceA");
  var lenB = radiosB.length;
  var checkedB = false;
  var userAnswerB;
  for(j=0; j < lenB; j++ ) {
     if(radiosB[j].checked) {
       checkedB = true;
       userAnswerB = radiosB[j].value;
     }
  }
  if (puzzleFiveInputPartOne.value === '1545934.54' &&
  puzzleFiveInputPartTwo.value === '1545934.54' && puzzleFiveInputPartThree.value === '129858.50' &&
  puzzleFiveInputPartFour.value === '103577.61' && userAnswerB === "right")  {
    finishPuzzleFive.classList.toggle('hide');
    puzzleFiveButtons.classList.toggle('hide');
    window.scrollTo(0,document.body.scrollHeight);
    resultFive.textContent = "Good Job!";
  }
}
checkPuzzleFiveAnswers.onclick = checkPuzzleFive;

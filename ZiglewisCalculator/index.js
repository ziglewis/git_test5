//Jesus saves me and keeps me safe

// below I interacted with the Dom to get all elements I needed to modify
const display = document.getElementById("screen-letters");
const answer = document.getElementById("Answer");
const deleteBtn = document.getElementById("delete-btn");
const percentBtn = document.getElementById("percentage");
const powerBtn = document.getElementById("raise-to-power");
const clearBtn = document.getElementById("clear");
const oneBtn = document.getElementById("key-1");
const twoBtn = document.getElementById("key-2");
const threeBtn = document.getElementById("key-3");
const fourBtn = document.getElementById("key-4");
const fiveBtn = document.getElementById("key-5");
const sixBtn = document.getElementById("key-6");
const sevenBtn = document.getElementById("key-7");
const eightBtn = document.getElementById("key-8");
const nineBtn = document.getElementById("key-9");
const zeroBtn = document.getElementById("key-0");
const pointBtn = document.getElementById("point");
const equalsBtn = document.getElementById("equal-to");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const subtractBtn = document.getElementById("subtract");
const additionBtn = document.getElementById("addition");

//below I made declarations of all the variables I intend to use for this calculator
let a = "";             //this will take the first augment for each calculation
let b = "";              //this will take the second augment for each calculation
let origin = "";         //this ensures everything initializes from a start
let ans = "";            // this is the actual answer js will give me, it has no commas
let ansWithComma = "";   // I used this to convert all answers to add comma via regex
let saveOrigin = "";       //This will play roles in displays on the screen
let saveCalcOrigin = "";   //This will play roles in displays on the screen


// I am using booleans to initialize all functions to false, so they kind of remain dormant when not called
let divisionX = false;
let multiplicationX = false;
let additionX = false;
let subtractionX = false;
let powerX = false;
let percentageX = false;
let operand = false;
let equalsX = false;

// I am creating a function I intend that whenever it is called, it will strictly disable all functions, so I don't have to repeat codes bearing in mind DRY(Don't repeat yourself)

function disableAllFunctions() {
  divisionX = false;
  multiplicationX = false;
  additionX = false;
  subtractionX = false;
  powerX = false;
  percentageX = false;
  operand = false;
  equalsX = false;
}

// Here I am actually writing what I want from each function
// just note or ignore this.... I found it from google....toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   adds comma to a number by regex

function multiply() {
  ans = (a * b).toFixed(3); // to.fixed will give me three decimal places as I set it to 3
  console.log(ans);
  a = ans;
  disableAllFunctions();  // I meant this line to disable all functions after an operation has been done, this time multiply. I am disabling all at once as I don't want errors for forgetting to disable the right function. Therefore let everything go back to original state.
}

function division() {
  ans = (a / b).toFixed(3);
  console.log(ans);
  a = ans;
  disableAllFunctions();
}

function addition() {
  ans = (a + b).toFixed(3);
  console.log(ans);
  a = ans;
  disableAllFunctions();
}

function raiseToPower() {
  ans = (a ** b).toFixed(3);
  console.log(ans);
  a = ans;
  disableAllFunctions();
}

function percent() {
  step1 = b / 100;
  ans = (step1 * a).toFixed(3);
  console.log(ans);
  a = ans;
  disableAllFunctions();
}

function subtraction() {
  ans = (a - b).toFixed(3);
  console.log(ans);
  a = ans;
  disableAllFunctions();
}


//this function main() is the mother function of this whole project, it decides which operation or function to call.

function main() {
  origin = "stop";  //I am setting origin to stop to help me have an if statement that will combine with  operand = true ("see line 141") to stop any function button to call a function when a second augment is not given yet. The functions will just not work. Un till the user inputs a second augment.
  saveOrigin = "";
  if (a === "") {
    a = display.innerText.replace(/\,/g, ""); // this converts the obtained data to a string, so in the next line I will convert it to a number Js can work with mathematically.
    a = Number(a);
  } else {
    b = display.innerText.replace(/\,/g, "");
    b = Number(b);


    // After a and b values are obtained from the upper half of my code, these if statements below now determines which function is true and calls for it. This is the essence of the initial booleans I set to false and the disable all function.(see line 38 to 58)
    if (multiplicationX === true) {
      multiply();
    } else if (additionX === true) {
      addition();
    } else if (subtractionX === true) {
      subtraction();
    } else if (powerX === true) {
      raiseToPower();
    } else if (percentageX === true) {
      percent();
    } else {
      division();
    }
  }
} //my main function ends here


// below I am adding event listeners to all my function buttons first, so they could trigger a function when clicked... I tried calling all the buttons at once but i ws not familiar with the "querryselectall", but definitely next time I will.

multiplyBtn.addEventListener("click", function () {
  if (operand === true && origin === "stop") {
    return; //writing return statements as only it "return;" makes an operation to do absolutely nothing. That means all things remains as they were.
  }
  if (origin === "") {
    return;
  } else {
    main();
    multiplicationX = true;
    operand = true;

    if (ans === "") {
      answer.textContent += " * ";
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma;
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " * ";
      display.textContent = ansWithComma;
    }
  }
});

divideBtn.addEventListener("click", function () {
  if (operand === true && origin === "stop") {
    return;  // This code ensures that when an operand is true and no second augment is given yet, then the user decides to click on any other function key again, nothing will happen. I used it through out all my function button keys.
  }
  if (origin === "") { 
    return;  //This code ensures that the user just cant start a calculation with a function key e.g *2 or ^2 or %2 etc. I used over all function button.
  } else {
    main();
    divisionX = true; // this code keeps a selected operation true so when "b" the second augment is passed, my  "main()" function considering her second half will be able to choose what will be done by finding which operation is true. I set this over all functions, but making it respective to each i.e if it is divide, divideX operation should be true, if it is multiply, multiplyX operation should be true and so on.
    operand = true;

    if (ans === "") {
      answer.textContent += " ÷ "; // this appends  the symbol of your operand to the lower screen where the user get to see their expression the computer will execute. I used it all over function keys but making it respective to each operation.
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma; //These two lines of codes adds comma to the values you see on the bigger screen
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " ÷ ";      //Observe the difference between these if and else statement is on "answer.textcontent" if I don't have an answer yet, the if statement simply appends the operation symbol to what we have on display, but else an answer is now given and its showing on the upper screen, then the user clicks on a function, JS please take what you see as answer and append the operation symbol to it. I used this over all functions respectively.
      display.textContent = ansWithComma;
    }
  }
});
subtractBtn.addEventListener("click", function () {
  if (operand === true && origin === "stop") {
    return;
  }

  if (origin === "") {
    return;
  } else {
    main();
    subtractionX = true;
    operand = true;

    if (ans === "") {
      answer.textContent += " - ";
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma;
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " - ";
      display.textContent = ansWithComma;
    }
  }
});
additionBtn.addEventListener("click", function () {
  if (operand === true && origin === "stop") {
    return;
  }

  if (origin === "") {
    return;
  } else {
    main();
    additionX = true;
    operand = true;

    if (ans === "") {
      answer.textContent += " + ";
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma;
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " + ";
      display.textContent = ansWithComma;
    }
  }
});

deleteBtn.addEventListener("click", function () {
  display.textContent = "";
  answer.textContent = "New Calc: ";
  disableAllFunctions();
  a = "";
  b = "";
  origin = "";
  ans = "";
  origin = "";
  ansWithComma = "";
  saveOrigin = "";
});
percentBtn.addEventListener("click", function () {
  if (operand === true && origin === "stop") {
    return;
  }

  if (origin === "") {
    return;
  } else {
    main();
    percentageX = true;
    operand = true;

    if (ans === "") {
      answer.textContent += " % ";
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma;
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " % ";
      display.textContent = ansWithComma;
    }
  }
});

powerBtn.addEventListener("click", function () {
  
  if (operand === true && origin === "stop") {
    return;
  }

  if (origin === "") {
    return;
  } else {
    main();
    powerX = true;
    operand = true;

    if (ans === "") {
      answer.textContent += " ^ ";
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      display.textContent = ansWithComma;
    } else {
      ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      answer.textContent = ansWithComma + " ^ ";
      display.textContent = ansWithComma;
    }
  }
});
clearBtn.addEventListener("click", function () {
  if (display.textContent === "") {
    return;
  } else if (display.textContent === ansWithComma) {
    display.textContent = "";
    answer.textContent = "New Calc: ";
    disableAllFunctions();
    a = "";
    b = "";
    origin = "";
    ans = "";
    origin = "";
    ansWithComma = "";
    saveOrigin = "";
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
    saveOrigin = saveOrigin.substring(0, saveOrigin.length - 1);
    display.textContent = saveOrigin;
    answer.textContent = answer.textContent.substring(
      0,
      answer.textContent.length - 1
    );
  }
});

clearBtn.addEventListener("dblclick", function () {
  display.textContent = "";
  answer.textContent = "New Calc: ";
  disableAllFunctions();
  a = "";
  b = "";
  origin = "";
  ans = "";
  origin = "";
  ansWithComma = "";
  saveOrigin = "";
});

equalsBtn.addEventListener("click", function () {
  
  if (operand === true && origin === "stop") {
    return; // This code ensures that when an operand is true and no second augment is given then the user decides to click equals button, nothing will happen.
  }else{ 
  main();}

  if (ans === "") {
    answer.textContent = answer.textContent;
    display.textContent = display.textContent;
  } else {
    ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    answer.textContent = ansWithComma;
    display.textContent = ansWithComma;
  }

  disableAllFunctions();
  ans = "";
  a = "";
  equalsX = true;
});

/* below I will be adding event listeners to all my number buttons, so they could give of a value when clicked... I tried calling all the number buttons at once but I was not familiar with the "querryselectall", but definitely next time I will. Also I should have used ".value property" but I don't want to take any chances, so i declared a value for all the number buttons

this function "answerDisplay()" controls  what you see  on the screen part, it's a reusable function. I used it to convert to string and then remove the commas for JS to be able to work with the values from the screen as numbers. This function is very vital as well. */

function answerDisplay() {
  if (display.textContent === answer.textContent && equalsX === true) {
    saveCalcOrigin = "";
    saveCalcOrigin = origin;
    answer.textContent = saveCalcOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    equalsX = false;
  } else if (ans === "") {
    saveCalcOrigin = "";
    saveCalcOrigin += origin;
    answer.textContent += saveCalcOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
 //I know my code can be shorter at this point, had I grabbed hold of all the number buttons using 'document.querySelectorAll("");' dom selector then implementing 'dot value'. Well, I will still do this and if it works, I will update this code again, but of course it should work.

//This function button operator will control the actions of each number button when they are called. Its a reusable function.
function buttonOperator(){
  if (ans === "") {
    answerDisplay();
    saveOrigin += origin;
    display.textContent = saveOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    ans = "";
    answerDisplay();
    saveOrigin += origin;
    display.textContent = saveOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

//The number buttons event listeners starts here.
oneBtn.addEventListener("click", function () {
    origin = 1;
    buttonOperator();
});

twoBtn.addEventListener("click", function () {
  origin = 2;
    buttonOperator();
});

threeBtn.addEventListener("click", function () {
  origin = 3;
    buttonOperator();
});
 
fourBtn.addEventListener("click", function () {
origin = 4
buttonOperator();  
});

fiveBtn.addEventListener("click", function () {
origin = 5
buttonOperator(); 
});

sixBtn.addEventListener("click", function () {
  origin = 6
  buttonOperator();
});

sevenBtn.addEventListener("click", function () {
  origin = 7
  buttonOperator();
});

eightBtn.addEventListener("click", function () {
  origin = 8
  buttonOperator();
  });

nineBtn.addEventListener("click", function () {
origin = 9
buttonOperator(); 
});

zeroBtn.addEventListener("click", function () {
  origin = 0
  buttonOperator(); 
});

pointBtn.addEventListener("click", function () {

  if (display.textContent.includes(".")) {
    return;
  }

  if (a === "" && origin === "") {
    origin = "0.";
    answerDisplay();
    saveOrigin += origin;
    display.textContent = saveOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else if (a != "" && origin === "") {
    origin = "0.";
    answerDisplay();
    saveOrigin += origin;
    display.textContent = saveOrigin
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    if (ans === "") {
      origin = ".";
      answerDisplay();
      saveOrigin += origin;
      display.textContent = saveOrigin
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
});
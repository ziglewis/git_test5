
//Jesus save me and keep me saved
let display = document.getElementById("screen-letters")
//console.log(display)
let answer = document.getElementById("Answer")

let deleteBtn = document.getElementById("delete-btn")
let percentBtn = document.getElementById("percentage")
let powerBtn = document.getElementById("raise-to-power")
let clearBtn = document.getElementById("clear")
let oneBtn = document.getElementById("key-1")
let twoBtn = document.getElementById("key-2")
let threeBtn = document.getElementById ("key-3")
let fourBtn = document.getElementById ("key-4")
let fiveBtn = document.getElementById ("key-5")
let sixBtn = document.getElementById ("key-6")
let sevenBtn = document.getElementById ("key-7")
let eightBtn = document.getElementById ("key-8")
let nineBtn = document.getElementById ("key-9")
let zeroBtn = document.getElementById ("key-0")
let pointBtn = document.getElementById ("point")
let equalsBtn = document.getElementById("equal-to")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")
let subtractBtn = document.getElementById("subtract")
let additionBtn = document.getElementById("addition")
//let Btn = document.getElementById
//let Btn = document.getElementById

//console.log(rootBtn + percentBtn + powerBtn + clearBtn + oneBtn + twoBtn + threeBtn + fourBtn)
//console.log(fiveBtn+sixBtn+sevenBtn+eightBtn+nineBtn+zeroBtn+ additionBtn)
//console.log(pointBtn+equalsBtn+multiplyBtn+divideBtn+subtractBtn)

let a = ""
let b = ""
let origin = ""
let ans = ""
let ansWithComma = "" 
let saveOrigin = ""
let saveCalcOrigin = ""

 let divisionX = false
 let multiplicationX = false
 let additionX = false
 let subtractionX = false
 let  powerX = false
 let  percentageX = false
 let operand = false
 let equalsX = false
 
 function disableAllFunctions() {
      divisionX = false
 multiplicationX = false
 additionX = false
 subtractionX = false
  powerX = false
  percentageX = false
  operand = false
  equalsX = false
  
     
 }
 
 //toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   adds comma to a number by regex
function multiply() {
    
    
    ans = (a * b).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}

function division() {
    
    
    ans = (a / b).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}

function addition() {
    
    
    ans= (a + b).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}

function raiseToPower() {
    
    
    ans = (a ** b).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}

function percent() {
    
    
    step1 = b/100 
    ans = (step1 * a).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}


function subtraction() {
    
    
    ans = (a - b).toFixed(3)
    console.log(ans)
    a = ans
    disableAllFunctions()
}





function main(){
    origin = "stop"
    saveOrigin = ""
    if (a=== ""){
        
        a = display.innerText.replace(/\,/g,''); // this converts to a string, so convert it to number
        a = Number(a)
    
      }
      
      else{ 
          
           b = display.innerText.replace(/\,/g,'');
           b = Number(b)

        // b = Number(display.innerText) 
        
         
         if (multiplicationX === true){
             multiply()
         }
         else if (additionX === true) {
             addition()
         }
         
         else if (subtractionX === true) {
             subtraction()
             
         }
          else if (powerX === true){
             raiseToPower()
         }
         
          else if (percentageX === true) {
             percent()
             
         }
         
         else  {division()
         }
         
          }
          
}



multiplyBtn.addEventListener("click", function(){
    
    if (operand === true &&  origin === "stop"){return}
    if (origin === ""){
        return
    }
    
    else{
 
    main() 
     multiplicationX = true
     operand = true
    
    if ( ans === ""){
    answer.textContent += " * "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " * "
    display.textContent = ansWithComma
         
     }
    
    }
    
 })
 
  

 divideBtn.addEventListener("click", function(){
    if (operand === true &&  origin === "stop"){return}
    if (origin === ""){
        return
    }
    
    else{
    main() 
      divisionX = true
      operand = true
    
    
    if ( ans === ""){
    answer.textContent += " ÷ "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " ÷ "
    display.textContent = ansWithComma
         
         
     }
     
    }
    
 }) 
 subtractBtn.addEventListener("click", function(){
    if (operand === true &&  origin === "stop"){return}
      
    if (origin === ""){
        return
    }
    
    else{
    main() 
    subtractionX = true
    operand = true
   
   if ( ans === ""){
    answer.textContent += " - "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " - "
    display.textContent = ansWithComma
         
     }
     
    }

 }) 
 additionBtn.addEventListener("click", function(){
    if (operand === true &&  origin === "stop"){return}

    if (origin === ""){
        return
    }
    
    else{
    main() 
    additionX = true
    operand = true
    
    if ( ans === ""){
    answer.textContent += " + "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " + "
    display.textContent = ansWithComma
         
     }
     
    }
 }) 


 deleteBtn.addEventListener("click", function(){

    display.textContent = ""
    answer.textContent = "New Calc: "
    disableAllFunctions()
    a = ""
    b = ""
    origin = ""
    ans = ""
     origin = ""
    ansWithComma = "" 
    saveOrigin = ""

 
 
     
    
 })
 percentBtn.addEventListener("click", function(){
    if (operand === true &&  origin === "stop"){return}

    if (origin === ""){
        return
    }
    
    else{
            main() 
    percentageX = true
    operand = true
    
   if ( ans === ""){
    answer.textContent += " % "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " % "
    display.textContent = ansWithComma
     }   
    
    }

 }) 
 
 
 powerBtn.addEventListener("click", function(){
   // if (answer.textContent.includes("^") &&  origin === "stop"){return}
   if (operand === true &&  origin === "stop"){return}

     if (origin === ""){
         return
     }
     
     else{
        main() 
    powerX = true
    operand = true

  if ( ans === ""){
    answer.textContent += " ^ "
     ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = ansWithComma
     }
     else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma + " ^ "
    display.textContent = ansWithComma
     }
     
     }
     
    
 }) 
 clearBtn.addEventListener("click", function(){
     
    if (display.textContent === "") {return}
    else if (display.textContent === ansWithComma){
        display.textContent = ""
    answer.textContent = "New Calc: "
    disableAllFunctions()
    a = ""
    b = ""
    origin = ""
    ans = ""
     origin = ""
    ansWithComma = "" 
    saveOrigin = ""

    }

    else{
    display.textContent = display.textContent.substring(0, display.textContent.length-1)
    saveOrigin = saveOrigin.substring(0, saveOrigin.length-1)
    display.textContent = saveOrigin
    answer.textContent = answer.textContent.substring(0, answer.textContent.length-1)
    }

 })

 clearBtn.addEventListener("dblclick", function(){ 
    display.textContent = ""
    answer.textContent = "New Calc: "
    disableAllFunctions()
    a = ""
    b = ""
    origin = ""
    ans = ""
    origin = ""
    ansWithComma = "" 
    saveOrigin = ""


 })
 
 
 equalsBtn.addEventListener("click", function(){
      
      main()
      
        if ( ans === ""){
    answer.textContent = answer.textContent
    display.textContent = display.textContent
     }
    else {
           ansWithComma = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          answer.textContent = ansWithComma
    display.textContent = ansWithComma
          
         
     }
    
      
         disableAllFunctions()
     ans = ""
     a = ""
     equalsX = true
 })
 
  //numbers
  function answerDisplay(){
   
    if (display.textContent === answer.textContent && equalsX === true ) { 
        saveCalcOrigin = ""
        saveCalcOrigin = origin
        answer.textContent = saveCalcOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        equalsX = false
    }
    else if (ans === ""){ 
        saveCalcOrigin = ""
        saveCalcOrigin += origin
        answer.textContent += saveCalcOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    }

  
 oneBtn.addEventListener("click", function(){
   // saveCalcOrigin = ""
    if (ans === ""){ 
     origin = 1
     answerDisplay()
     saveOrigin += origin
     //saveCalcOrigin += origin
      //answer.textContent += saveCalcOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // console.log(typeof(origin))
      } 
     
     else {

       
         ans = ""
     origin = 1
     answerDisplay()
     saveOrigin += origin
      //answer.textContent += saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
 }) 
 twoBtn.addEventListener("click", function(){
     
   // saveCalcOrigin = ""
    if (ans === ""){ 
     origin = 2
     answerDisplay()
     saveOrigin += origin
     //saveCalcOrigin += origin
     // answer.textContent += saveCalcOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 2
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }

    //  origin = twoBtn.textContent //textContent returns everything in a text both script, css , hidden characters etc.
     }) 
     
    

 threeBtn.addEventListener("click", function(){
     
   
    if (ans === ""){ 
     origin = 3
     answerDisplay()
     saveOrigin += origin
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");} 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 3
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
     // origin = threeBtn.innerText  // innerText only returns human readable contents and avoids other contents like scripts and hidden contents

 }) 
 fourBtn.addEventListener("click", function(){
     if (ans === ""){ 
     origin = 4
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 4
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
 }) 
 fiveBtn.addEventListener("click", function(){
       if (ans === ""){ 
     origin = 5
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 5
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
 }) 
 sixBtn.addEventListener("click", function(){
      if (ans === ""){ 
     origin = 6
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 6
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
    
 }) 
 sevenBtn.addEventListener("click", function(){
    if (ans === ""){ 
     origin = 7
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 7
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
    
 })
 eightBtn.addEventListener("click", function(){
      if (ans === ""){ 
     origin = 8
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 8
     answerDisplay()
    saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
    
 }) 
 nineBtn.addEventListener("click", function(){
      if (ans === ""){ 
     origin = 9
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 9
     answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
    
 }) 
 zeroBtn.addEventListener("click", function(){
      if (ans === ""){ 
     origin = 0
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } 
     
     else {
         display.textContent = ""
         ans = ""
     origin = 0
     answerDisplay()
     saveOrigin += origin
     // answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
    
    
 }) 
 pointBtn.addEventListener("click", function(){
//for (i <= 1; i > 1; i++)
     
        if ( display.textContent.includes(".")){
            return 
        }

    if (a === "" && origin === ""){
        origin = "0."
        answerDisplay()
       saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
   else if (a != "" && origin === ""){
        origin = "0."
        answerDisplay()
     saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    else{
    
    
     if (ans === ""){ 
    origin = "."
    answerDisplay()
   saveOrigin += origin
      //answer.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     display.textContent = saveOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } 

     }
 }
 )


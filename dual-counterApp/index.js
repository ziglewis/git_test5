

let mc = document.getElementById("men-count")
let pmc = document.getElementById("previous-men-count")
let wc = document.getElementById("women-count")
let pwc = document.getElementById("previous-women-count")
let mtc = document.getElementById("men-total-count")
let wtc = document.getElementById("women-total-count")
let mawtc = document.getElementById("men-and-women-total-count")


let menCount = 0
let womenCount = 0
let totalMenCount = 0
let totalWomenCount = 0



function incrementMen(){
    menCount += 1
    totalMenCount += 1
    mc.textContent = menCount
    

}

function incrementWomen(){
    
    womenCount += 1
    totalWomenCount += 1 
    wc.textContent = womenCount
    
    }
    

function save(){
    //men count handled here
    let menCountPrevious = menCount + "-"
    pmc.textContent += menCountPrevious
    
    
    //women count handled here
    let womenCountPrevious = womenCount + "-"
    pwc.textContent += womenCountPrevious
    

    //men total count, women total count and combined count of men and women handled here
    mtc.textContent = totalMenCount
    wtc.textContent = totalWomenCount
    let grandTotal = totalMenCount + totalWomenCount
     mawtc.textContent = grandTotal

   
   // ensuring count is restored back to zero upon every save was done here
    menCount = 0
    womenCount = 0
    mc.textContent = menCount
    wc.textContent = womenCount 

}

// attempting to handle the decrease button for men

function decreaseMen(){
    menCount -= 1
    totalMenCount -= 1
    mc.textContent = menCount

}


function decreaseWomen(){
    
    womenCount -= 1
    totalWomenCount -= 1
    wc.textContent = womenCount
}



let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment(){
   count += 2
   countEl.innerText = count
}


function save(){
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}
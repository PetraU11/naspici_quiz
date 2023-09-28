
let quizEntry = [
 {  question: "Která planeta je nejbližší Slunci?",
    answer1: "Mars",
    answer2:"Jupiter",
    answer3:"Země", 
    answer4:"Saturn",
    correct:"Země",
},
{ 
    question:"Kdo napsal knihu Válka světů?",
    answer1: "George Orwell",
    answer2:"H.G. Wells",
    answer3:"Jules Verne",
    answer4:"Mary Shelley",
    correct:"H.G. Wells",

}, {
    question:"Jaký je nejvyšší vrchol na světě?",
    answer1: "Mount Everest",
    answer2:"Mount Kilimanjaro",
    answer3:"Mount McKinley (Denali)",
    answer4:"Mount Fuji",
    correct:"Mount Everest"
    
}
]
//LANDING PAGE

let participant = [""]


  

question = document.querySelector("#question")
question.style.display = "none"

button = document.querySelector(".button")
button.style.display = "none"

buttonStart = document.querySelector("#form")
buttonStart.addEventListener("submit", (e) => {
    e.preventDefault()
    question.style.display = "block"
    button.style.display = "block"
    buttonStart.style.display = "none"
    participant.push = e.target.elements.alias.value  
}
)

console.log(participant)


// VYPISOVANÍ OBJEKTU DO STRANKY 
let index = 0
let objekt = quizEntry[index]

let otazka = objekt.question
let odpoved1 = objekt.answer1;
let odpoved2 = objekt.answer2;
let odpoved3 = objekt.answer3;
let odpoved4 = objekt.answer4;

let otazkaDiv = document.querySelector("#question")
let header = document.createElement("h2")
header.innerHTML = objekt.question
otazkaDiv.appendChild(header)

let odpovedDiv = document.querySelector("#answer")
let para1 = document.createElement("p")
para1.innerHTML = objekt.answer1
otazkaDiv.appendChild(para1)

let para2 = document.createElement("p")
para2.innerHTML = objekt.answer2
otazkaDiv.appendChild(para2)

let para3 = document.createElement("p")
para3.innerHTML = objekt.answer3
otazkaDiv.appendChild(para3)

let para4 = document.createElement("p")
para4.innerHTML = objekt.answer4
otazkaDiv.appendChild(para4)

// PO STISKNUTÍ TLAČÍTKA SE ZMĚNÍ ZOBRAZENÉ POLE OBJEKTŮ

let btn = document.querySelector("#btn")
btn.addEventListener("click", (e) => {
    if(index <= 1){
    newIndex =  index + 1
    objekt = quizEntry[newIndex]
    console.log(index++)
    
    header.innerHTML = objekt.question
    otazkaDiv.appendChild(header)
    para1.innerHTML = objekt.answer1
    otazkaDiv.appendChild(para1)
    para2.innerHTML = objekt.answer2
    otazkaDiv.appendChild(para2) 
    para3.innerHTML = objekt.answer3
    otazkaDiv.appendChild(para3)
    para4.innerHTML = objekt.answer4
    otazkaDiv.appendChild(para4) }
    else{
        otazkaDiv.innerHTML = "A máš hotovo!"
        button.style.display = "none"
        

    }
})
    

    
    

   

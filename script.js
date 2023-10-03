
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
    
},
{  question: "Která planeta je nejbližší Slunci?",
    answer1: "Mars",
    answer2:"Jupiter",
    answer3:"Země", 
    answer4:"Saturn",
    correct:"Země",
},
{
    question: "Kolik planet má sluneční soustava?",
    answer1: "7",
    answer2: "8",
    answer3: "9",
    answer4: "10",
    correct: "8",
  },
  {
    question: "Kdo napsal knihu 'Válka a mír'?",
    answer1: "Fyodor Dostoevsky",
    answer2: "Charles Dickens",
    answer3: "Leo Tolstoy",
    answer4: "Jane Austen",
    correct: "Leo Tolstoy",
  },
  {
    question: "Který prvek je značen symbolem 'H' v periodické tabulce?",
    answer1: "Helium",
    answer2: "Hydrogen",
    answer3: "Lithium",
    answer4: "Carbon",
    correct: "Hydrogen",
  },
  {
    question: "Kde se nachází Taj Mahal?",
    answer1: "New Delhi, Indie",
    answer2: "Káhira, Egypt",
    answer3: "Peking, Čína",
    answer4: "Rím, Itálie",
    correct: "New Delhi, Indie",
  },
  {
    question: "Která řeka protéká skrz Paříž?",
    answer1: "Rýn",
    answer2: "Dunaj",
    answer3: "Temže",
    answer4: "Seina",
    correct: "Seina",
  },
  {
    question: "Kdo je autorem obrazu 'Mona Lisa'?",
    answer1: "Vincent van Gogh",
    answer2: "Pablo Picasso",
    answer3: "Leonardo da Vinci",
    answer4: "Michelangelo",
    correct: "Leonardo da Vinci",
  },
  {
    question: "Jaký je největší kontinent na světě?",
    answer1: "Austrálie",
    answer2: "Severní Amerika",
    answer3: "Afrika",
    answer4: "Asie",
    correct: "Asie",
  },
  {
    question: "Který plyn tvoří největší složku Zemské atmosféry?",
    answer1: "Kyslík",
    answer2: "Ozon",
    answer3: "Dusík",
    answer4: "Uhličitan",
    correct: "Dusík",
  },
  {
    question: "Který objekt v kosmu je nejblíže Zemi?",
    answer1: "Měsíc",
    answer2: "Mars",
    answer3: "Venuše",
    answer4: "Jupiter",
    correct: "Měsíc",
  },
  {
    question: "Které hory jsou nejvyšší na světě?",
    answer1: "Himaláje",
    answer2: "Andy",
    answer3: "Alpy",
    answer4: "Rocky Mountains",
    correct: "Himaláje",
  },
]


//LANDING PAGE


// Definice promměných

let participant = [""]

let homeDiv = document.querySelector("#section1") 
let quizDiv = document.querySelector("#section2") 
quizDiv.style.display = "none"
let resultDiv = document.querySelector("#section3")
resultDiv.style.display = "none"
let resultWrapper = document.querySelector("#section3__wrapper") 

min = 0
max = 13
let index = (Math.floor(Math.random()*(max-min + 1)) + min);
console.log(index)
let objekt = quizEntry[index]

let otazka = objekt.question
let odpoved1 = objekt.answer1;
let odpoved2 = objekt.answer2;
let odpoved3 = objekt.answer3;
let odpoved4 = objekt.answer4;
let spravnaOdpoved = objekt.correct

let otazkaDiv = document.querySelector("#question")
let header = document.createElement("h2")
let odpovedDiv = document.querySelector("#answer")
let para1 = document.createElement("p")
let para2 = document.createElement("p")
let para3 = document.createElement("p")
let para4 = document.createElement("p")



let count = 0
countPara = document.createElement("p")
quizDiv.appendChild(countPara)



// VYGENERUJE 5 NAHODNYCH OBJEKTU 

// Funkce pro náhodný výběr 5 položek z pole
function getRandomItems(array, count) {
    const shuffledArray = array.slice(); // Vytvoříme kopii pole, abychom nepoškodili původní pole
    const result = [];
    let remaining = shuffledArray.length;
    
    while (remaining > 0 && result.length < count) {
      const randomIndex = Math.floor(Math.random() * remaining);
      const item = shuffledArray.splice(randomIndex, 1)[0];
      result.push(item);
      remaining--;
      console.log(result)
    }
    
    return result;
  }
  
  // Volání funkce pro náhodný výběr 5 položek
  const randomItems = getRandomItems(quizEntry, 5);
  objekt = randomItems
  console.log(randomItems[0].correct)

  

  // Vypsání otázek do html


  let questionShown = () => {
    let currentQuestionIndex = 0;
    let objekt = randomItems[currentQuestionIndex]
    header.innerHTML = objekt.question
    otazkaDiv.appendChild(header)
    para1.innerHTML = objekt.answer1
    odpovedDiv.appendChild(para1)
    para2.innerHTML = objekt.answer2
    odpovedDiv.appendChild(para2)
    para3.innerHTML = objekt.answer3
    odpovedDiv.appendChild(para3)
    para4.innerHTML = objekt.answer4
    odpovedDiv.appendChild(para4)
    console.log(`Správná odpověď: ${objekt.correct}`)

    }

    
let currentQuestionIndex = 0
let showNext = () => {
    currentQuestionIndex++
    let objekt = randomItems[currentQuestionIndex]
    if(currentQuestionIndex <=  4 ){
    header.innerHTML = objekt.question
    otazkaDiv.appendChild(header)
    para1.innerHTML = objekt.answer1
    odpovedDiv.appendChild(para1)
    para2.innerHTML = objekt.answer2
    odpovedDiv.appendChild(para2) 
    para3.innerHTML = objekt.answer3
    odpovedDiv.appendChild(para3)
    para4.innerHTML = objekt.answer4
    odpovedDiv.appendChild(para4)
    console.log(`Správná odpověď: ${objekt.correct}`)

} else {
    resultWrapper.innerHTML = "<h2>A máš hotovo!</h2> "
        resultDiv.style.display = "grid"
        quizDiv.style.display = "none"
}

}


   
// FCE VYBRANI SPRAVNE ODPOVĚDI 


let answerFc = () => {

    para1.addEventListener("click", (e) => {
        if (e.target.innerHTML === randomItems[0].correct){
            console.log("Správně") 
           
        } else {
            console.log("Špatně")
    
            }
        })
       
       para2.addEventListener("click", (e) => {
        if (e.target.innerHTML === randomItems[0].correct){
            console.log("Správně")
        }else {
            console.log("Špatně")
           }
       })
       
       para3.addEventListener("click", (e) => {
        if (e.target.innerHTML === randomItems[0].correct){
            console.log("Správně")
            }else {
            console.log("Špatně")
            }
       })
       
       para4.addEventListener("click", (e) => {
        if (e.target.innerHTML === randomItems[0].correct){
            console.log("Správně")
        }else {
            console.log("Špatně")
        }
       })
     

  }





buttonStart = document.querySelector("#form")
buttonStart.addEventListener("submit", (e) => {
    // zabranuje defaultnímu chování
    e.preventDefault()
    //odpočítavá otázky
    count += 1
    countPara.innerHTML = `${count} / 5`
    //zobrazí kvíz, skryje btn z homeDivu
    homeDiv.style.display = "none"
    quizDiv.style.display = "grid"
    buttonStart.style.display = "none"
    // ukládá hodnotu do pole
    participant.push = e.target.elements.alias.value  
    console.log(participant)
    // Zobrazí první otázku kvízu
    questionShown()
    answerFc()

})



confirmationBtn = document.querySelector("#btn")
confirmationBtn.addEventListener("click", () => {
    //odpočítává 1 k 5
    count += 1
    countPara.classList.add = "section3__counting"
    countPara.innerHTML = `${count} / 5`

    //zvyšuje index a generuje otázky
    showNext()
     
   })
   
   

  
  









  



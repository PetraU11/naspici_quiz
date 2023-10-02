
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

let otazkaDiv = document.querySelector("#question")
let header = document.createElement("h2")
let odpovedDiv = document.querySelector("#answer")
let para1 = document.createElement("p")
let para2 = document.createElement("p")
let para3 = document.createElement("p")
let para4 = document.createElement("p")




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
  
  // Výsledek (randomItems) bude obsahovat 5 náhodně vybraných položek z pole quizEntry
  console.log(randomItems);
  console.log(randomItems[0].question);
  console.log(randomItems[0].answer1);
  console.log(randomItems[0].answer2);
  console.log(randomItems[0].answer3);
  console.log(randomItems[0].answer4);

  let num = [1 , 2, 3, 4, 5]
    count = 0


buttonStart = document.querySelector("#form")
buttonStart.addEventListener("submit", (e) => {
    // zabranuje defaultnímu chování
    e.preventDefault()
    //zobrazí kvíz, skryje btn z homeDivu
    homeDiv.style.display = "none"
    quizDiv.style.display = "block"
    buttonStart.style.display = "none"
    // ukládá hodnotu do pole
    participant.push = e.target.elements.alias.value  
    console.log(participant)
    // zobrazí první otázku kvízu - random
    let objekt = randomItems[0]

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

   
    countPara = document.createElement("p")
    countPara.innerHTML = `${num[count]} / 5`
    quizDiv.appendChild(countPara)

})



let currentQuestionIndex = 0;
confirmationBtn = document.querySelector("#btn")
confirmationBtn.addEventListener("click", () => {
    currentQuestionIndex++
    objekt = randomItems[currentQuestionIndex]
    if(currentQuestionIndex < 5){
    header.innerHTML = objekt.question
    otazkaDiv.appendChild(header)
    para1.innerHTML = objekt.answer1
    otazkaDiv.appendChild(para1)
    para2.innerHTML = objekt.answer2
    otazkaDiv.appendChild(para2) 
    para3.innerHTML = objekt.answer3
    otazkaDiv.appendChild(para3)
    para4.innerHTML = objekt.answer4
    otazkaDiv.appendChild(para4)
} else {
    resultDiv.innerHTML = "A máš hotovo!"
        quizDiv.style.display = "none"
}



count += 1
countPara = document.createElement("p")
countPara.innerHTML = `${num[count]} / 5`
quizDiv.appendChild(countPara)
 

})

// začne počítat 1 až 5 










  



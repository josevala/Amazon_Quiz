

      const Question1 = {
        question: "When do I mark a package as missing (Choose 1 only)?",
        answers :[   
           "A).When I go to a stop and have the package but it is torn on 1 side of the box",
            "B).When I go to a stop and have the package but it is in a different tote then it was supposed to be",
            "C).When I go to a stop and have the package",
            "D).When I go to a stop and the package is missing",
            "E).All of the above",
            "F).None of the above"
        ],
        correctAnswer : "D).When I go to a stop and the package is missing",

    }

    const Question2 = {
        question: "When do I mark a package as damaged? (Choose 1 only)",
        answers :[   
           "A).Never",

            "B).When I can here stuff rattling inside",

            "C).When there is obvious damage to the package (such as liquid that has leaked all over the package)",

            "D).When I see a box that has some small damages but everything appears to be OK with the contents",

            "E).All of the above",

            "F).None of the above"
        ],
        correctAnswer : "C).When there is obvious damage to the package (such as liquid that has leaked all over the package)"
    }
       
    const Question3 = {
        question: "When is a package considered Out of Delivery Time? (Choose 1 only)",
        answers :[   
           "A).When a business is closed",

            "B).When I am running late and need to go home early due to a personal situation",

            "C).If I go to deliver and the customer says they do not have time to accept my delivery",

            "D).When I am at the end of my shift and need to go back to debrief",

            "E).All of the above",

            "F).None of the above"
        ],
        correctAnswer: "D).When I am at the end of my shift and need to go back to debrief"   
    } 

//console.log(QuestionOne)

let WelCont = document.getElementById('welcome')
let QuizCont = document.getElementById('quiz')
let questCont = document.getElementById('question')
let answerCont = document.getElementById(`answers`)
let correct;

let start = document.getElementById('start')
 start.addEventListener('click',function(){
        QuizCont.style.display = 'grid'
        WelCont.style.display = 'none'
        scoreC.style.display = 'grid'
 })
 
let score =0 ;

function display(Obj){
    let score = 0 ;
    let selAns = "";
    let newAns = '';
    questCont.innerHTML = `${Obj.question}`;
    Obj.answers.forEach((answer) => {
        correct = Obj.answer
       let btn = document.createElement('button')
       btn.classList.add('Btn')
       btn.textContent = `${answer}`
       answerCont.append(btn)
       btn.style.border = '1px solid black'
       btn.style.textAlign = 'left'
       btn.style.padding = '10px'
       btn.style.width = '80%'
       btn.style.borderRadius = '10px'
       btn.style.placeSelf = 'center'
       btn.addEventListener('click',()=>{
         
        btn.style.background = '#272343'
        btn.style.color = 'white'
        selAns = btn.innerText
        console.log(`${Obj.correctAnswer}`.trim(' '))
        console.log(`${selAns}`.trim(' '))
          if(selAns != `${Obj.correctAnswer}`){
            btn.style.border= '1px solid red'
            
          }else if(selAns == `${Obj.correctAnswer}`){
            score += 1
            btn.style.border = " 2px solid green"
          }
        
          let scoreC = document.getElementById('logo')
          scoreC.innerHTML = `Score: ${score}`
          scoreC.style.color ="black"
          scoreC.style.fontSize= '40px'
          scoreC.style.placeSelf = 'center'
          scoreC.style.display= 'none'
       })
        
        
    });
}
     let scoreC = document.getElementById('logo')
     scoreC.innerHTML = `Score: ${score}`
     scoreC.style.color ="black"
     scoreC.style.fontSize= '40px'
     scoreC.style.placeSelf = 'center'
     scoreC.style.display= 'none'
 
    display(Question1)
let index = 1;
let next = document.getElementById('next')
next.addEventListener('click',()=>{
    
    index ++;
  
    if(index == 1){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question1)
    }  if (index == 2){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question2)
    }  if( index == 3 ){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question3)
    }else if(index >= 4){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        index = 1
        display(Question1)
    }
})

let prev = document.getElementById('perv')
      
prev.addEventListener('click',()=>{
    index -= 1
    if(index == 1){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question1)
    }  if (index == 2){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question2)
    }  if( index == 3 ){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question3)
    }else if(index <= 0){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        index = 3
        display(Question3)
    }
    
     


})

console.log(index)




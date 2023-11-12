

      const Question1 = {
        question: "Question 1: When do I mark a package as missing? (Choose 1 only)",
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
        question: "Question 2: When do I mark a package as damaged? (Choose 1 only)",
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
        question: " Question 3: When is a package considered Out of Delivery Time? (Choose 1 only)",
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
            btn.style.border= '7px solid red'
                let message = document.createElement('div')
                message.classList.add('message')
                message.innerHTML = 'Incorrect! <br> Please try again<br>Click here to try again!'
                message.style.background = '#272343'
                message.style.position = 'absolute'
                message.style.placeSelf = 'center'
                message.style.color = 'white'
                message.style.width = '40%'
                message.style.height = "40%"
                message.style.fontSize = "50px"
                message.style.textAlign = "center"
                message.style.placeContent = 'center'
                message.style.paddingTop = '30px'
                message.style.borderRadius = '10px'
                next.addEventListener('click',()=>{
                    message.style.display = 'none'
         })
      
                message.addEventListener('click',()=>{
                           message.style.display = 'none'
                })
                btn.addEventListener('click',()=>{
                    message.style.display = 'none'})
                QuizCont.append(message)

      
          }else if(selAns == `${Obj.correctAnswer}`){
            let message = document.createElement('div')
            message.classList.add('message')
            message.innerHTML = 'Correct<br> Good Job!<br>Click next to continue!'
            message.style.background = '#272343'
            message.style.position = 'absolute'
            message.style.placeSelf = 'center'
            message.style.color = 'white'
            message.style.width = '40%'
            message.style.height = "40%"
            message.style.fontSize = "50px"
            message.style.textAlign = "center"
            message.style.placeContent = 'center'
            message.style.paddingTop = '30px'
            message.style.borderRadius = '10px'
            message.addEventListener('click',()=>{
                       message.style.display = 'none'
            })
            btn.addEventListener('click',()=>{
                message.style.display = 'none'})
            QuizCont.append(message)
             next.addEventListener('click',()=>{
                message.style.display = 'none'
     })
    
            next.style.display = 'block'
            next.style.placeSelf = 'center'
            next.style.textAlign = 'center'
            btn.style.border = " 7px solid green"
          }
        
        
       })
        
        
    });
}

    
 




    display(Question1)
let index = 1;
let next = document.getElementById('next')
next.style.display = 'none'
next.addEventListener('click',()=>{
    
    index ++;
  
    if(index == 1){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question1)
        next.style.display = 'none'
    }  if (index == 2){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question2)
        next.style.display = 'none'
    }  if( index == 3 ){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
        display(Question3)
        next.style.display = 'none'
    }else if(index >= 4){
        for(let i =0; i<= 5; i++){
            answerCont.removeChild(answerCont.firstElementChild)
        }
           questCont.innerHTML = 'Great Job!'
           questCont.style.fontSize = '40px'
           let logoI= document.createElement('img')
           logoI.classList.add('myImg')
           logoI.src= './Amazon Logo.png'
           logoI.style.width = "100%"
           logoI.style.height = "60%"
           answerCont.append(logoI)
           answerCont.style.marginBottom = '0'
           answerCont.style.paddingBottom = '5px'
           next.style.display = 'none'
           prev.style.display = 'none'
    }
})

//let prev = document.getElementById('perv')
      
        //prev.addEventListener('click',()=>{
   // index -= 1
  //  if(index == 1){
   //     for(let i =0; i<= 5; i++){
   //         answerCont.removeChild(answerCont.firstElementChild)
   //     }
   //     display(Question1)
   // }  if (index == 2){
  //      for(let i =0; i<= 5; i++){
   //         answerCont.removeChild(answerCont.firstElementChild)
   //     }
    //    display(Question2)
    //}  if( index == 3 ){
        //for(let i =0; i<= 5; i++){
         //   answerCont.removeChild(answerCont.firstElementChild)
       // }
      //  display(Question3)
    //}else if(index <= 0){
    //    for(let i =0; i<= 5; i++){
  //          answerCont.removeChild(answerCont.firstElementChild)
        //}
      //  index = 3
    //    display(Question3)
  //  }
    
     


//})

console.log(index)




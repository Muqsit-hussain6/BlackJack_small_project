
let cards = []
let sum = 0
let hasBlackJack =false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("card-el")


function startGame(){
    isAlive=true
    let firstcard = getRandomCard() 
    let secondcard =getRandomCard()
    cards = [firstcard,secondcard]
    renderGame()
}

function getRandomCard(){
 let rand = Math.floor( Math.random()*13 ) + 1
 if(rand == 1 )
 return 11
 else if(rand>=11 && rand<=13)
 return 10
 else
 return rand
}
function renderGame(){
    cardsEl.textContent = "Cards: "
     sum=0
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum+= cards[i]
    }
    
    sumEl.textContent = "Sum : "+ sum

    if(sum<=20){
        message="do you want to draw a new card"
    }else if(sum===21)
    {
        message="You've got BlackJack"
        hasBlackJack=true
    }else{
    message="You are out of the game"
        isAlive=false
    }
          messageEl.textContent=message
}
function newCard(){
    
    if(isAlive=== true && hasBlackJack===false){
    let card =getRandomCard()
    cards.push(card)
    renderGame()
}

}

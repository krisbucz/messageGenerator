const messages = ["You can do it", "I believe in you", "Don't give you", "You are smashing it", "Outstanding!"]

function messageGenerator(){
    let randomNumber = Math.floor(Math.random() * 5);
    for(let i = 0; i < messages.length; i++){
        return `Your inspirational message is: ${messages[randomNumber]}.`
    }
}

messageGenerator();
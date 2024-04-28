function information(text) {
    let numbers = text.replace(/[^0-9]/g,"").length;
    let spaces=0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            spaces= spaces+1
        }
    }
    let length=(text.length)-(numbers)-(spaces)
    
    return "amount letters:"+length+" amount numbers:"+numbers+" amount spaces:"+spaces

}

console.log(information("Edwin"))
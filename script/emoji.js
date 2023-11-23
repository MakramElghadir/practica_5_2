function random_emoji(){
    // console.log("hols")
    const emoji = ["🕵️​","🚴","🤺","🤾","​🧛​","🧑‍🚒​","🧠​​","🦻​", "🤞​", "🤳"]
    // Generar un numero aleatorio entre 0 y la longitud del array de emoji
    const randomNumeber = Math.floor (Math.random()* emoji.length)  //0.0~longitud del array
    const emoji_aleatorio= emoji[randomNumeber]
    document.querySelector("#emoji").innerHTML = emoji_aleatorio
}
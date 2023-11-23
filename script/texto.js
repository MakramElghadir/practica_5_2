function textInput(){
    const texto_usuario = document.querySelector("#input_text")
    console.log(texto_usuario.value)
    document.querySelector("#texto").innerHTML = texto_usuario.value
    if(texto_usuario.value === ""){
        document.querySelector("#texto").innerHTML = "Escibe de nuevo por fi"
    }
    const R = Math.floor (Math.random() *255)
    const G = Math.floor (Math.random() *255)
    const B = Math.floor (Math.random() *255)
    document.querySelector("#texto").style.color = `rgb(${R}, ${G}, ${B})`
   
}




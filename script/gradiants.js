function newGradient(){
    const R0 = document.querySelector("#R0input").value
    const G0 = document.querySelector("#G0input").value
    const B0 = document.querySelector("#B0input").value
    const R1 = document.querySelector("#R0input").value
    const G1 = document.querySelector("#G0input").value
    const B1 = document.querySelector("#B0input").value
    const degree = document.querySelector("#degree").value
    let seccion = document.querySelector("#gradient")
    console.log(R0,G0,B0,R1,G1,B1, typeof degree)

    seccion.Style.background = `linear-Gradient(90degree, rgb(${R0}, ${B0}, ${G0}), rgb({${1}, ${1}, ${1}}));`

}
const divTarjetasMadrijim = document.getElementById('tarjetas-madrijim')
const divTarjetasMadrijimCpu = document.getElementById('tarjetas-madrijim-cpu')
const botonSelectMadrij = document.getElementById('boton-select-madrij')
const botonSelectMadrijCpu = document.getElementById('boton-select-madrij-cpu')
const divMadrijJugador = document.getElementById('madrij-jugador')
const divMadrijCpu = document.getElementById('madrij-cpu')
const sectionSelectMadrij = document.getElementById('select-madrij')
const sectionSelectMadrijCpu = document.getElementById('select-madrij-cpu')
const sectionSelectAtacks = document.getElementById('select-atacks')
const sectionRuleta = document.getElementById('ruleta')
const imgJugador = document.getElementById('img-jugador')
const imgCpu = document.getElementById('img-cpu')
const divAtaques = document.getElementById('ataques')
const divVictoriasJugador = document.getElementById('victorias-jugador')
const divVictoriasCpu = document.getElementById('victorias-cpu')
const divResultadoCombate = document.getElementById('resultado-combate')
const divListaPremios = document.getElementById('lista-premios')
const listaPremios = ['Un Caramelo', 'Una Siesta', 'Un masaje de 2min', 'Un mimo', 'Una patada en el culo', 'Una lloradita', 'Algo rico', 'Nada']
const botonGirarRuleta = document.getElementById('girar')
const divPremio = document.getElementById('premio')
const listaAtaquesJugador = document.getElementById('ataques-jugador')
const listaAtaquesCpu = document.getElementById('ataques-cpu')
const divVerMadrij = document.getElementById('ver-madrij')
const divVerMadrijCpu = document.getElementById('ver-madrij-cpu')
const divIntroduccion = document.getElementById('intro')
const divCirculoDeLaMuerte = document.getElementById('circulo-de-la-muerte')
const botonIniciarJuego = document.getElementById('iniciar-juego')

let indexVictoriasJugador = []
let indexVictoriasCpu = []

const ataquesMadrijim = [
    [
        {tipo:'🔥',texto:'Proactividad',id:'btnF'},
        {tipo:'🔥',texto:'Confianza',id:'btnF'},
        {tipo:'🔥',texto:'Detallismo',id:'btnF'},
        {tipo:'🌱',texto:'Pasión',id:'btnT'},
        {tipo:'🌊',texto:'Lloradita',id:'btnA'}
    ],
    [
        {tipo:'🌱',texto:'Ganas',id:'btnT'},
        {tipo:'🌱',texto:'Energía',id:'btnT'},
        {tipo:'🌱',texto:'Lealtad',id:'btnT'},
        {tipo:'🔥',texto:'Tenacidad',id:'btnF'},
        {tipo:'🌊',texto:'Respeto',id:'btnA'}
    ],
    [
        {tipo:'🌊',texto:'Risas',id:'btnA'},
        {tipo:'🌊',texto:'Felicidad',id:'btnA'},
        {tipo:'🌱',texto:'Bondad',id:'btnT'},
        {tipo:'🌱',texto:'Tolerancia',id:'btnT'},
        {tipo:'🔥',texto:'Amabilidad',id:'btnF'}
    ],
    [
        {tipo:'🔥',texto:'Rencor',id:'btnF'},
        {tipo:'🔥',texto:'Amor',id:'btnF'},
        {tipo:'🌊',texto:'Optimismo',id:'btnA'},
        {tipo:'🌊',texto:'Detallismo',id:'btnA'},
        {tipo:'🌱',texto:'Ingenio',id:'btnT'}
    ],
    [
        {tipo:'🌊',texto:'Proactividad',id:'btnA'},
        {tipo:'🌊',texto:'Locura',id:'btnA'},
        {tipo:'🌊',texto:'Ganas',id:'btnA'},
        {tipo:'🔥',texto:'Firmeza',id:'btnF'},
        {tipo:'🌱',texto:'Autonomía',id:'btnT'}
    ],
    [
        {tipo:'🌱',texto:'Bondad',id:'btnT'},
        {tipo:'🌱',texto:'Liderazgo',id:'btnT'},
        {tipo:'🌊',texto:'Valentía',id:'btnA'},
        {tipo:'🌊',texto:'Proactividad',id:'btnA'},
        {tipo:'🔥',texto:'Paciencia',id:'btnF'}
    ],
    [
        {tipo:'🔥',texto:'Anécdotas',id:'btnF'},
        {tipo:'🌊',texto:'Risas',id:'btnA'},
        {tipo:'🌱',texto:'Felicidad',id:'btnT'},
        {tipo:'🌱',texto:'Encanto',id:'btnT'},
        {tipo:'🌊',texto:'Amabilidad',id:'btnA'}
    ],
    [
        {tipo:'🌱',texto:'Pedir la cuenta',id:'btnT'},
        {tipo:'🌱',texto:'Amor',id:'btnT'},
        {tipo:'🌱',texto:'Confianza',id:'btnT'},
        {tipo:'🌊',texto:'Optimista',id:'btnA'},
        {tipo:'🔥',texto:'Paciencia',id:'btnF'}
    ],
    [
        {tipo:'🔥',texto:'Caracter',id:'btnF'},
        {tipo:'🔥',texto:'Gritos',id:'btnF'},
        {tipo:'🌱',texto:'Amor',id:'btnT'},
        {tipo:'🌱',texto:'Autonomía',id:'btnT'},
        {tipo:'🌊',texto:'Tenacidad',id:'btnA'}
    ],
    [
        {tipo:'🔥',texto:'Quejas',id:'btnF'},
        {tipo:'🌊',texto:'Locura',id:'btnA'},
        {tipo:'🔥',texto:'Encanto',id:'btnF'},
        {tipo:'🌱',texto:'Tolerancia',id:'btnT'},
        {tipo:'🔥',texto:'Detallismo',id:'btnF'}
    ],
    [
        {tipo:'🌊',texto:'Vejez',id:'btnA'},
        {tipo:'🌊',texto:'Liderazgo',id:'btnA'},
        {tipo:'🔥',texto:'Detallismo',id:'btnF'},
        {tipo:'🔥',texto:'Valentía',id:'btnF'},
        {tipo:'🌱',texto:'Ingenio',id:'btnT'}
    ],
    [
        {tipo:'🌱',texto:'Pasión',id:'btnT'},
        {tipo:'🌱',texto:'Firmeza',id:'btnT'},
        {tipo:'🌱',texto:'Lealtad',id:'btnT'},
        {tipo:'🌊',texto:'Gritos',id:'btnA'},
        {tipo:'🔥',texto:'Furia',id:'btnF'}
    ]
]


let madrijim = []
let madrijimCpu = []
let opcionMadrij
let opcionAtaque
let madrijElegido = ''
let madrijCpu = ''
let madrijElegidoObjeto = []
let madrijCpuObjeto = []
let botones = []
let ataquesJugador = []
let ataquesCpu = []
let ataquesJugadorTipo =[]
let ataquesCpuTipo = []
let victoriasJugador = 0
let victoriasCpu = 0
let madrijBorrar

class Madrij {
    constructor(nombre, imgS, imgC) {
        this.nombre = nombre
        this.imgS = imgS
        this.imgC = imgC
        this.ataques = []
    }
    crearAtaque(tipo, texto, id){
        this.ataques.push({tipo: tipo, texto: texto, id: id})
    }
}

let lara = new Madrij("Lara", "../fotitos/laraS.png", "../fotitos/laraC.png")
let tommy = new Madrij("Tommy", "../fotitos/tommyS.png", "../fotitos/tommyC.png")
let mags = new Madrij("Mags", "../fotitos/magsS.png", "../fotitos/magsC.png")
let perucha = new Madrij("Perucha", "../fotitos/peruchaS.png", "../fotitos/peruchaC.png")
let guido = new Madrij("Guido", "../fotitos/guidoS.png", "../fotitos/guidoC.png")
let pepe = new Madrij("Pepe", "../fotitos/pepeS.png", "../fotitos/pepeC.png")
let kantor = new Madrij("Kantor", "../fotitos/kantorS.png", "../fotitos/kantorC.png")
let solcha = new Madrij("Solcha", "../fotitos/solchaS.png", "../fotitos/solchaC.png")
let lula = new Madrij("Lula", "../fotitos/lulaS.png", "../fotitos/lulaC.png")
let wile = new Madrij("Wile", "../fotitos/wileS.png", "../fotitos/wileC.png")
let maga = new Madrij("Maga", "../fotitos/magaS.png", "../fotitos/magaC.png")
let emi = new Madrij("Emi", "../fotitos/emiS.png", "../fotitos/emiC.png")


madrijim.push(lara, tommy, mags, perucha, guido, pepe, kantor, solcha, lula, wile, maga, emi)
for (let i = 0; i < madrijim.length; i++) {
    const madrij = madrijim[i];
    const ataquesMadrij = ataquesMadrijim[i]
    ataquesMadrij.forEach((ataque)=>{
        madrij.crearAtaque(ataque.tipo,ataque.texto, ataque.id)
    })
}
function jugar() {
    sectionSelectMadrijCpu.style.display = 'none'
    sectionSelectAtacks.style.display = 'none'
    sectionRuleta.style.display = 'none'
    divResultadoCombate.style.display = 'none'

    madrijim.forEach((madrij) => {

        opcionMadrij = `
        <button class="madrijCard" onclick="verMadrij('${madrij.nombre}')">
            <img src=${madrij.imgS} alt="" class="imgMadrij" >
        </button>
        `
        divTarjetasMadrijim.innerHTML += opcionMadrij
    })
    
    botonSelectMadrij.addEventListener('click', elegirMadrijJugador)
}
function nombreAObjeto(x) {
    for (let i = 0; i < madrijim.length; i++) {
        if (x === madrijim[i].nombre) {
            return madrijim[i]
        }
    }
}
function verMadrij(madrij){
    madrijElegido = madrij
    madrijElegidoObjeto = nombreAObjeto(madrijElegido)
    divVerMadrij.innerHTML = `
    <div class='tarjeta-ver-madrij'>
        <h3>${madrijElegidoObjeto.nombre}</h3>
        <img src='${madrijElegidoObjeto.imgC}' alt='foto combate'>
    </div>
    <ul id='ver-ataques-jugador'>Ataques: \n</ul>
    `
    const verAtaquesJugador = document.getElementById('ver-ataques-jugador')
    madrijElegidoObjeto.ataques.forEach((ataque)=>{
        verAtaquesJugador.innerHTML += `<li id='${ataque.id}'>${ataque.texto}</li>`
    })
}

function elegirMadrijJugador() {
            divMadrijJugador.innerHTML = madrijElegido
            imgJugador.src = madrijElegidoObjeto.imgC
            madrijBorrar = madrijElegido
            madrijimCpu = [...madrijim]
            for (let i = 0; i < madrijimCpu.length; i++) {
                if (madrijimCpu[i].nombre == madrijBorrar) {
                    madrijimCpu.splice(i, 1)
                    elegirMadrijCpu()
                }
            }
}
function elegirMadrijCpu() {
    sectionSelectMadrij.style.display = 'none'
    sectionSelectMadrijCpu.style.display = 'flex'

    madrijimCpu.forEach((madrij) => {
        opcionMadrij = `
        
        <button class="madrijCard" onclick="verMadrijCpu('${madrij.nombre}')">
            <img src=${madrij.imgS} alt="" class="imgMadrij" >

        </button>
        `
        divTarjetasMadrijimCpu.innerHTML += opcionMadrij

    
    })
    

    botonSelectMadrijCpu.addEventListener('click', () => {
        divMadrijCpu.innerHTML = madrijCpu
        imgCpu.src = madrijCpuObjeto.imgC
        elegirAtaques()
    })
}
function verMadrijCpu(madrij){
    madrijCpu = madrij
    madrijCpuObjeto = nombreAObjeto(madrijCpu)
    divVerMadrijCpu.innerHTML = `
    <div class='tarjeta-ver-madrij'>
        <h3>${madrijCpuObjeto.nombre}</h3>
        <img src='${madrijCpuObjeto.imgC}' alt='foto combate'>
        <ul id='ver-ataques-cpu'>Ataques: \n</ul>
    </div>
    `
    const verAtaquesCpu = document.getElementById('ver-ataques-cpu')
    madrijCpuObjeto.ataques.forEach((ataque)=>{
        verAtaquesCpu.innerHTML += `<li id='${ataque.id}'>${ataque.texto}</li>`
    })
}


function elegirAtaques() {
    sectionSelectMadrijCpu.style.display = 'none'
    sectionSelectAtacks.style.display = 'flex'

    madrijElegidoObjeto.ataques.forEach((ataque) => {
        opcionAtaque = `
        <button id=${ataque.id} class="btnAtaque">${ataque.texto}</button>
        `
        divAtaques.innerHTML += opcionAtaque
    })
    botones = document.querySelectorAll('.btnAtaque')
    secuenciaAtaque()
}
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            boton.disabled = true
            boton.style.color = "#B5E3F7"
            if (e.target.id === 'btnF') {
                ataquesJugador.push(e.target.innerText)
                ataquesJugadorTipo.push('🔥')
            } else if (e.target.id === 'btnA') {
                ataquesJugador.push(e.target.innerText)
                ataquesJugadorTipo.push('🌊')
            } else {
                ataquesJugador.push(e.target.innerText)
                ataquesJugadorTipo.push('🌱')
            }
            if (ataquesJugador.length === 5) {
                ataquesAleatoriosCpu()
            }
        })
    })

}
function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function ataquesAleatoriosCpu() {
    let copiaAtaques = [...madrijCpuObjeto.ataques]
    while (ataquesCpu.length < 5) {
        let aleatorio = randomNumberInRange(0, copiaAtaques.length - 1)
        ataquesCpu.push(copiaAtaques[aleatorio].texto)
        ataquesCpuTipo.push(copiaAtaques[aleatorio].tipo)
        removeItemOnce(copiaAtaques, aleatorio)
    }
    combate()
    mostrarAtaques()
}

function removeItemOnce(arr, index) {
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function mostrarAtaques() {
    for (let i = 0; i < ataquesJugador.length; i++) {
        listaAtaquesJugador.innerHTML += `<li id='ataqueJ${i}'>${ataquesJugador[i]}</li>`
    }
    for (let i = 0; i < ataquesCpu.length; i++) {
        listaAtaquesCpu.innerHTML += `<li id='ataqueC${i}'>${ataquesCpu[i]}</li>`
    }
    indexVictoriasJugador.forEach((w)=>{
        const itemWin = document.getElementById(`ataqueJ${w}`)
        itemWin.style.color = 'green'
    })
    indexVictoriasCpu.forEach((w)=>{
        const itemWin = document.getElementById(`ataqueC${w}`)
        itemWin.style.color = 'green'
    })
}

function combate() {
    for (let i = 0; i < ataquesCpu.length; i++) {
        if (ataquesJugadorTipo[i] === ataquesCpuTipo[i]) {
            null
        } else if ((ataquesJugadorTipo[i] == "🔥" && ataquesCpuTipo[i] == "🌱") || (ataquesJugadorTipo[i] == "🌊" && ataquesCpuTipo[i] == "🔥") || (ataquesJugadorTipo[i] == "🌱" && ataquesCpuTipo[i] == "🌊")) {
            victoriasJugador++
            indexVictoriasJugador.push(i)
        } else {
            victoriasCpu++
            indexVictoriasCpu.push(i)
        }
    }
    resultadoFinal()
}

function resultadoFinal() {
    if (victoriasCpu === victoriasJugador) {
        mensajeFinalCombate('Empate');
    } else if (victoriasJugador > victoriasCpu) {
        mensajeFinalCombate('Victoria');
    } else {
        mensajeFinalCombate('Derrota');
    }
}
function mensajeFinalCombate(resultado) {
    divResultadoCombate.style.display = 'flex'
    divVictoriasCpu.innerHTML = `Victorias: ${victoriasCpu}`
    divVictoriasJugador.innerHTML = `Victorias: ${victoriasJugador}`
    divResultadoCombate.innerHTML = resultado
    if (resultado == 'Victoria') {
        divResultadoCombate.innerHTML += `
        <button class="continuar" onclick="ruleta()">Girar ruleta de premios</button>
        `
    } else {
        divResultadoCombate.innerHTML += `
        <button class="continuar" onclick="reiniciarJuego()">Vuelve a intentarlo!</button>
        `
    }
}
function reiniciarJuego() {
    location.reload()
}
function ruleta() {
    sectionSelectAtacks.style.display = 'none'
    divResultadoCombate.style.display = 'none'
    sectionRuleta.style.display = 'flex'
    listaPremios.forEach((premio) => {
        divListaPremios.innerHTML += `<li>${premio}</li>`
    })
    botonGirarRuleta.addEventListener('click', girarRuleta)
}
function girarRuleta() {
    let aleatorio = randomNumberInRange(0, listaPremios.length - 1)
    divPremio.innerHTML = `Ganaste ${listaPremios[aleatorio]}`
    botonGirarRuleta.disabled = true
    sectionRuleta.innerHTML += `<button class="continuar" id="reiniciar" onclick="reiniciarJuego()">Volver a jugar</button>`
}
function introduccion(){
    divCirculoDeLaMuerte.style.display = 'none'
    botonIniciarJuego.addEventListener('click',()=>{
        divIntroduccion.style.display = 'none'
        divCirculoDeLaMuerte.style.display = 'flex'
        jugar()
    })
    
}
window.addEventListener('load', introduccion)
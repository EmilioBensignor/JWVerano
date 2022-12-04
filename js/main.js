const sectionSeleccionar = document.getElementById('seleccionar')

const botonJavaMaasim = document.getElementById('botonJM')
const botonJavaTik = document.getElementById('botonJT')
const botonJavaKava = document.getElementById('botonJK')
const botonJavaJalo = document.getElementById('botonJJ')

const sectionDia = document.getElementById('dia')
const sectionDiasJM = document.getElementById('diasJM')
const sectionDiasJT = document.getElementById('diasJT')
const sectionDiasJK = document.getElementById('diasJK')
const sectionDiasJJ = document.getElementById('diasJJ')



const sectionCohadraja = document.getElementById('cohadraja')
const sectionJava = document.getElementById('java')


function iniciar() {
    sectionDia.style.display = 'none'
    sectionCohadraja.style.display = 'none'

    botonJavaMaasim.addEventListener('click', diasJM)
    botonJavaTik.addEventListener('click', diasJT)
    botonJavaKava.addEventListener('click', diasJK)
    botonJavaJalo.addEventListener('click', diasJJ)
}

function diasJM() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    sectionDiasJT.style.display = 'none'
    sectionDiasJK.style.display = 'none'
    sectionDiasJJ.style.display = 'none'
}

function diasJT() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    sectionDiasJM.style.display = 'none'
    sectionDiasJK.style.display = 'none'
    sectionDiasJJ.style.display = 'none'
}

function diasJK() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    sectionDiasJT.style.display = 'none'
    sectionDiasJM.style.display = 'none'
    sectionDiasJJ.style.display = 'none'
}

function diasJJ() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    sectionDiasJT.style.display = 'none'
    sectionDiasJK.style.display = 'none'
    sectionDiasJM.style.display = 'none'
}

window.addEventListener('load', iniciar)
const contenedorTarjetas = document.getElementById('tarjetas')
const sectionSeleccionar = document.getElementById('seleccionar')
const botonJavaMaasim = document.getElementById('botonJM')
const botonJavaTik = document.getElementById('botonJT')
const botonJavaKava = document.getElementById('botonJK')
const botonJavaJalo = document.getElementById('botonJJ')
const sectionDia = document.getElementById('dia')
const sectionCohadraja = document.getElementById('cohadraja')
const sectionJava = document.getElementById('java')


function iniciar() {
    sectionDia.style.display = 'none'
    sectionCohadraja.style.display = 'none'

    botonJavaMaasim.addEventListener('click', selecionarCohadraja)
    botonJavaTik.addEventListener('click', selecionarCohadraja)
    botonJavaKava.addEventListener('click', selecionarCohadraja)
    botonJavaJalo.addEventListener('click', selecionarCohadraja)
}

function selecionarCohadraja() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
}

window.addEventListener('load', iniciar)
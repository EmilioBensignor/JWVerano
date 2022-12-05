const sectionSeleccionar = document.getElementById('seleccionar')

const botonJavaMaasim = document.getElementById('botonJM')
const botonJavaTik = document.getElementById('botonJT')
const botonJavaKava = document.getElementById('botonJK')
const botonJavaJalo = document.getElementById('botonJJ')

const sectionDia = document.getElementById('dia')
const dia18 = document.getElementById('18')
const dia19 = document.getElementById('19')
const dia20 = document.getElementById('20')
const dia21 = document.getElementById('21')
const dia22 = document.getElementById('22')
const dia23 = document.getElementById('23')
const dia24 = document.getElementById('24')
const dia25 = document.getElementById('25')
const dia26 = document.getElementById('26')
const dia27 = document.getElementById('27')

const sectionCohadraja = document.getElementById('cohadraja')
const nombre = document.getElementById('nombre')
const crono = document.getElementById('crono')

const sectionJava = document.getElementById('java')

botonJavaMaasim.addEventListener('click', diasJM)
botonJavaTik.addEventListener('click', diasJT)
botonJavaKava.addEventListener('click', diasJK)
botonJavaJalo.addEventListener('click', diasJJ)

var seccion = document.getElementById("seccion");
seccion.style.display = 'none'

let cohadraja

function iniciar() {
    sectionDia.style.display = 'none'
    sectionCohadraja.style.display = 'none'
}

function diasJM() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    dia18.style.display = 'none'
    dia19.style.display = 'none'
    dia20.style.display = 'none'
    cohadraja = 'Maasim'
}

function diasJT() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    dia18.style.display = 'none'
    dia19.style.display = 'none'
    dia20.style.display = 'none'
    cohadraja = 'Tik'
}

function diasJK() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    dia21.style.display = 'none'
    dia22.style.display = 'none'
    dia27.style.display = 'none'
    cohadraja = 'Kava'
}

function diasJJ() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    dia21.style.display = 'none'
    dia22.style.display = 'none'
    dia23.style.display = 'none'
    dia24.style.display = 'none'
    dia25.style.display = 'none'
    dia26.style.display = 'none'
    dia27.style.display = 'none'
    cohadraja = 'Jalo'
}

function variantes (dia) {
    sectionDia.style.display = 'none'
    sectionCohadraja.style.display = 'flex'
    nombre.innerHTML = `Javaia ${cohadraja}`
    crono.innerHTML = `Crono ${cohadraja} - Día ${dia} `
}

function mostrarOcultar() {
    if (seccion.style.display === "none") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

window.addEventListener('load', iniciar)
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
const subtitulo = document.getElementById('h2Peula')
const listado = document.getElementById('listado')

const sectionJava = document.getElementById('java')

botonJavaMaasim.addEventListener('click', diasJM)
botonJavaTik.addEventListener('click', diasJT)
botonJavaKava.addEventListener('click', diasJK)
botonJavaJalo.addEventListener('click', diasJJ)

const sectionPeula = document.getElementById('items')

var seccion = document.getElementById("seccion");
seccion.style.display = 'none'

let cohadraja
let cronograma

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
    cronograma = './fotitos/cronoJM.png'
}

function diasJT() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
    dia18.style.display = 'none'
    dia19.style.display = 'none'
    dia20.style.display = 'none'
    cohadraja = 'Tik'
    cronograma = './fotitos/cronoJT.png'
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
    cronograma = './fotitos/cronoJJ.png'
}

function variantes (dia) {
    sectionDia.style.display = 'none'
    sectionCohadraja.style.display = 'flex'
    if (cohadraja == 'Kava') {
        if (dia == 18 || dia == 19 || dia == 20) {
            cronograma = './fotitos/cronoJKcorto.png'
        } else {
            cronograma = './fotitos/cronoJKlargo.png'
        }
        
    }
    if (dia == 18) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 1 Nitsim</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 19) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 1 Bala</a>
                <a href="#">Peula 2 Nitsim</a>
                <a href="#">Peula 2 Bala</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula Sala de 4</a>
                <a href="#">General Java</a>
                <a href="#">Laila tov Sala de 5</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 20) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula de Cierre</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula Sala de 5</a>
                <a href="#">Peula Sala de 3</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 21) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 1 Kofim-Barda</a>
                <a href="#">Laila tov Iotza</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 1 5to</a>
                <a href="#">Peula 2 Jaza</a>
                <a href="#">Laila tov Amor</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 22) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 2 Iotza-Keisa</a>
                <a href="#">Peula 3 Loja-Jibu</a>
                <a href="#">Laila tov Barda</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 3 Amor</a>
                <a href="#">Peula 4 Ofek</a>
                <a href="#">Laila tov Kosmim</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 23) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 1</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 4 Kofim-Loja</a>
                <a href="#">Peula 5 Barda-Iotza</a>
                <a href="#">Laila tov Loja</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 5 Kosmim</a>
                <a href="#">Peula 6 5to</a>
                <a href="#">Laila tov Ofek</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 24) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 2</a>
                <a href="#">Laila toc</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 6 Jibu-Keisa</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Boker tov 5to</a>
                <a href="#">Peula 7 6to</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 25) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 3</a>
                <a href="#">Momento Java</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 7 Tercero</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 8 5to</a>
                <a href="#">Laila tov Jaza</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 26) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 4</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 8 Cuarto</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula 9 7mo</a>
            </div>
            <div class="divGrales">
                <a href="#">Generales</a>
            </div>
        `
        }
    } else if (dia == 27) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula de cierre</a>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="#">Peula de cierre</a>
            </div>
        `
        }
    }
    nombre.innerHTML = `<h2 class="subtitulo">Javaia ${cohadraja} - Día ${dia}</h2>`
    crono.innerHTML = `
    <div class="divImgCrono">
        <img class="imgCrono" src="${cronograma} " alt="">
    </div>
    `
    subtitulo.innerHTML = `Info del día Java ${cohadraja} `
    listado.innerHTML = `<div class="listados"> <a href=>Listados</a> </div>`
}

function mostrarOcultar() {
    if (seccion.style.display === "none") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

window.addEventListener('load', iniciar)
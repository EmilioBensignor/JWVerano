const sectionSeleccionar = document.getElementById('seleccionar')

const botonJavaMaasim = document.getElementById('botonJM')
const botonJavaTik = document.getElementById('botonJT')
const botonJavaKava = document.getElementById('botonJK')
const botonJavaJalo = document.getElementById('botonJJ')

const sectionDia = document.getElementById('dia')
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
    dia19.style.display = 'none'
    dia20.style.display = 'none'
    cohadraja = 'Maasim'
    cronograma = './fotitos/cronoJM.png'
}

function diasJT() {
    sectionSeleccionar.style.display = 'none'
    sectionDia.style.display = 'flex'
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
        if (dia == 19 || dia == 20) {
            cronograma = './fotitos/cronoJKcorto.png'
        } else {
            cronograma = './fotitos/cronoJKlargo.png'
        }
        
    }
    if (dia == 19) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/16-7FS8ct2OzeOc349gVvp4Ez2WGFynHwhN7tmQB-dj0/edit?usp=share_link">Peula 1 Nitsim</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1dg6zx41ZPuniaqxgU2v1PP1euiz620U6ndcQUlxn5z0/edit?usp=share_link">Peula 1 Bala</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1qBlDIPemYmdwkieDpngM6LeHSA5BCC9c01KxgdFarHE/edit?usp=share_link">Peula 2 Nitsim</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1aGJdipi6YFQx0eFPQK-RP33QsKL6o0mDwgjPMnOy948/edit?usp=share_link">Peula 2 Bala</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1HPcoPgeRaGxY2cma0QctJck2oiJ2XEZPPA50UxyuCs0/edit?usp=share_link">Peula Sala de 4</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1OV9tWvy1jdccIzUrhaeJtUScqXlK3v76FITKJu9DbRg/edit?usp=share_link">General Java</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Sala de 5</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1zGrQVsofSEw8Q2HjMgldNoNhw41Ms2E6-ji31Knioyw/edit">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 20) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1JDZPA0K9rZF5dZk3biw-QbgABRXKlO9zhhLPhoDMlx4/edit?usp=share_link">Peula de Cierre</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1ZJFeNIoTMT4fJsXf8vrfgxNkfVhZG7MJ0nu5wuMYzoI/edit?usp=share_link">Peula Sala de 3</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1F3iqn15perXDgEfLml3STeU0LPg-ql-rfdrVZHR4mz8/edit?usp=share_link">Peula Sala de 5</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1zGrQVsofSEw8Q2HjMgldNoNhw41Ms2E6-ji31Knioyw/edit">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 21) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/18X8TIY9v7Lv9W0M918xbQSyYFQTr-y8NtAEqC-JSNrU/edit?usp=share_link">Peula 1 Kofim-Barda</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Iotza</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1S-9WbErVpCMQ5XQ10qlNczyssDMobgNakHUcdMUg8QA/edit?usp=share_link">Peula 1 5to</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1caTXsTwcnf0EzWM1YV5nhZF7b8zWdj8zQn-8zR2y50Y/edit?usp=share_link">Peula 2 Jaza</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Amor</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 22) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1LePKKxknVGsVlrY1x9wsfVe4G_Y6LJe936uBYvoUK3k/edit?usp=share_link">Peula 2 Iotza-Keisa</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/176cU5hmF7pUk6DpuiTWsZVHljDjHnqmE55eBf3BcNCc/edit?usp=share_link">Peula 3 Loja-Jibu</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Barda</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1CRyxWlDs1Ub9L1mTFAybYs2d6wcfOPFHYDHVRr0xWLw/edit?usp=share_link">Peula 3 Amor</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1Vpnt1-PQvVKp9yn5i5Pe4qFtM3Hzwx-1Q0hhNdyE_MA/edit?usp=share_link">Peula 4 Ofek</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Kosmim</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 23) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <a href="https://docs.google.com/document/d/1pS7ifND3-xQkVH2gjM2_FOpzlF7h-2djvgeBLz-NZDQ/edit?usp=share_link">Peula 1</a>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1ISGweXSA4ZAdQ6W4rdnFBNgXk9vHVueXJlfnZp477vQ/edit?usp=share_link">Peula 4 Kofim-Loja</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/10Ro-dfWmsZJuwncHmmjK5JREgzV3jKWVwxKKgWUoXBU/edit?usp=share_link">Peula 5 Barda-Iotza</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Loja</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1_hFHd2acmFmC6EYF3x36G_p37HP-Tgec0r_pSZVYvKQ/edit?usp=share_link">Peula 5 Kosmim</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1KY-dKlAR4dPP3dAkeJeZfd0anVhLTkyCxRlciIIS5tE/edit?usp=share_link">Peula 6 5to</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Ofek</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 24) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/14CX8rW4bXXSpwRtuD1_LMOfiZ2fNwEV84I5wGnOtfg8/edit?usp=share_link">Peula 2</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1FQXMacPUXfCpli2sJDAIDaJe3_4fK1MeHcEWee1ntz8/edit?usp=share_link">Peula 6 Jibu-Keisa</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="#">Boker tov 5to</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/18F5De7v90SBphtP-IjnVKvuBr-qX22CyED172RQtc1w/edit?usp=share_link">Peula 7 6to</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 25) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1j7z5UEPVw8lxUl0G4N6h2zA9rxD_D8dzlTcoYv9-ZNM/edit?usp=share_link">Peula 3</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Momento Java</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1S0v0drficZZu8OQqP55pkX8MniBAmun66yC-Y1MjKnU/edit?usp=share_link">Peula 7 Tercero</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1MP9MfkvKdqClK-OQ1QOuKTYi8ZDRa3oRMp71aHeP8WE/edit?usp=share_link">Peula 8 5to</a>
                    <img class="#" src=# alt="">
                </div>
                <div>
                    <a href="#">Laila tov Jaza</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 26) {
        if (cohadraja == 'Kava') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1OIqQx5vlsnD3lbsOGwYE4xywnUgOYU-9-feNce4SQ0k/edit?usp=share_link">Peula 4</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1gXRFlmAybBTaW3ivuW_YyEKyKocoKP6KLIRlJlWwmTk/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1bsUgQlSUKyEP1Dmj47kfSWIrUwo5GyrBdlZ7Vaezsvg/edit?usp=share_link">Peula 8 Cuarto</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1BsF07qapq0tkxU5ZPYlnPYFJAhCvVodrXzHcT6C7A5c/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1WcS_JqjzKhTMzDUmXFtRmr3tVqExFmrDZNecDolf-y0/edit?usp=share_link">Peula 9 7mo</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
            <div class="divGrales">
                <div>
                    <a href="https://docs.google.com/document/d/1kN42FA-XCaIlX2yhkTd_oBgcp0AwBJL5gpN3BnF-rWU/edit?usp=sharing">Generales</a>
                </div>
            </div>
        `
        }
    } else if (dia == 27) {
        if (cohadraja == 'Tik') {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1iDjcyh3F0no5r0GToHVWYw5A2-NGf0Wuw0nQeqdCL7E/edit?usp=share_link">Peula de Cierre</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
        `
        } else {
            sectionPeula.innerHTML = `
            <div class="divPeulot">
                <div>
                    <a href="https://docs.google.com/document/d/1w1nibV9k6Pa_gXZ8WNqK70RXVPgeKmptLlMbHprOpIw/edit?usp=share_link">Peula de Cierre</a>
                    <img class="#" src=# alt="">
                </div>
            </div>
        `
        }
    }
    nombre.innerHTML = `<h2 class="subtitulo">Javaia ${cohadraja} - Día ${dia}</h2>`
    crono.innerHTML = `
    <div class="divImgCrono">
        <img class="imgCrono" src="${cronograma}" alt="">
    </div>
    `
    subtitulo.innerHTML = `Info del día Java ${cohadraja}`
    listado.innerHTML = `<div class="listados"><a href="">Listados</a></div>`
}

function mostrarOcultar() {
    if (seccion.style.display === "none") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

window.addEventListener('load', iniciar)
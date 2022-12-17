const sectionVerGolosinas = document.getElementById('ver-golosinas')
const ulCarrito = document.getElementById('carrito')
const finalizarPedido = document.getElementById('finalizar-pedido')
const aLinkWA = document.getElementById('link-WA')

let golosinas = []
let carrito = []
let codigoWA =[]

class Golosina {
    constructor(nombre, id, img, cantidad = 0) {
        this.nombre = nombre
        this.id = id
        this.img = img
        this.cantidad = cantidad
    }
}

const arcor = new Golosina("Arcor","arcor", "../fotitos/arcor.png")
const palitosDeLaSelva = new Golosina('Palitos de la Selva','palitosDeLaSelva', '../fotitos/selva.png')
const billikenYogurt = new Golosina('Billiken Yogurt','billikenYogurt', '../fotitos/billiken.png')
const sugusMax = new Golosina('Sugus Max','sugusMax', '../fotitos/max.png')
const caramelosDeMiel = new Golosina('Caramelos de Miel','caramelosDeMiel', '../fotitos/miel.png')
const chamuyo = new Golosina('Chamuyo','chamuyo', '../fotitos/max.png')

function iniciar() {
    aLinkWA.style.display ='none'
    golosinas.push(arcor, palitosDeLaSelva, billikenYogurt, sugusMax, caramelosDeMiel, chamuyo)

    golosinas.forEach((g) => {
        sectionVerGolosinas.innerHTML += `
        <button class='agregar'>
            <h4>${g.nombre}</h4>
            <img src='${g.img}' class='img-golosina'>
        </button>
    `
    })
    mostrarCarrito()
    const botonesAgregar = document.querySelectorAll('.agregar')
    botonesAgregar.forEach((boton)=>{
        boton.addEventListener('click', ()=>{
            const golosinaAgregar = boton.innerText
            golosinas.forEach((g)=>{
                if (g.nombre == golosinaAgregar) {
                    g.cantidad++
                    actualizarCarrito(g.id)
                }
            })
        })
    })
    finalizarPedido.addEventListener('click', crearEnlaceWA)
}



function mostrarCarrito() {
    golosinas.forEach((i) => {
            ulCarrito.innerHTML += `
            <li id='${i.id}-carrito'>
                ${i.nombre}: ${i.cantidad}
            </li>
            `
        if (i.cantidad <= 0) {
            const item = document.getElementById(`${i.id}-carrito`)
            item.style.display = 'none'
        }
    })
}
function actualizarCarrito(id){
    const itemActualizar = document.getElementById(`${id}-carrito`)
    itemActualizar.style.display = 'block'
    let golosinaAgregada = golosinas.find(g=>g.id == id)
    itemActualizar.innerHTML = `
    <li id='${id}-carrito'>
        ${golosinaAgregada.nombre}: ${golosinaAgregada.cantidad}
    </li>
    `
}
function crearEnlaceWA(){
    golosinas.forEach((g)=>{
        if (g.cantidad>0) {
            carrito.push(g)
        }
    })
    carrito.forEach((i)=>{
        const text = i.nombre
        const arrayText = text.split(' ')
        const arrayTextUnido = arrayText.join('%20')
        const cant = i.cantidad
        const textCant = `${arrayTextUnido}:%20${cant}`
        codigoWA.push(textCant)
        
    })
    
    const linkWA = codigoWA.join(',%20')
    aLinkWA.href = `https://wa.me/541166411355?text=${linkWA}`
    aLinkWA.style.display = 'block'
}
window.addEventListener('load', iniciar)
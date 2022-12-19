const form = document.getElementById('log-in-form')
const divParaVos = document.getElementById('para-vos')
const dropDownUser = document.getElementById('user')

let userList = []
let userObject

class User{
    constructor(nombre, pass, img = null, moti = null, voucher = null){
        this.nombre = nombre
        this.pass = pass
        this.img = img
        this.moti = moti
        this.voucher = voucher
    }
}
const lara = new User('Lara','12345')
const tommy = new User('Tommy','bernabeu')
const mags = new User('Mags','drajutop')
const perucha = new User('Perucha','perucha')
const guido = new User('Guido','quesoyhuevo')
const pepe = new User('Pepe','123456abc')
const kantor = new User('Kantor','jotate')
const solcha = new User('Solcha','amordim')
const lula = new User('Lula','2160')
const wile = new User('Wile','GULMAAAN')
const maga = new User('Maga','lojamim')
const emi = new User('Emi','emi')

userList.push(lara,tommy,mags,perucha,guido,pepe,kantor,solcha,lula,wile,maga,emi)

userList.forEach((user)=>{
    dropDownUser.innerHTML += `
        <option value="${user.nombre}">${user.nombre}</option>
    `
})

function logIn(){
    divParaVos.style.display = 'none'
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        checkPass()
    })
}


function checkPass(){
    const nombre = document.getElementById('user').value
    const pass = document.getElementById('pass').value
    const datosIngresados = {user: nombre, pass: pass}
    for (let i = 0; i < userList.length; i++) {
        if (datosIngresados.user == userList[i].nombre) {
            if (datosIngresados.pass == userList[i].pass) {
                userObject = userList[i]
                divParaVos.style.display = 'flex'
                form.style.display = 'none'
                paraVos()
            }else{
                alert('Contraseña Incorrecta');
            }
        }
        
    }
}
function paraVos(){
    divParaVos.innerHTML = `
        <div id="diVos">
            <div id='foto'>
                <img src='${userObject.img}' alt='Foto ${userObject.nombre}'>
            </div>
            <div id='moti'>
                <img src='${userObject.moti}' alt='Motivacional ${userObject.nombre}'>
            </div>
            <div id='voucher'>
                <button id='boton-mostrar-voucher'>Ver Voucher</button>
            </div>
        </div>
    `
    const botonMostrarVoucher = document.getElementById('boton-mostrar-voucher')
    botonMostrarVoucher.addEventListener('click', mostrarVoucher)
}

function mostrarVoucher(){
    const divVoucher = document.getElementById('voucher')
    divVoucher.innerHTML = `
        <img src='${userObject.voucher}' id='img-voucher' alt='Voucher ${userObject.nombre}'>
    `
}
window.addEventListener('load', logIn)
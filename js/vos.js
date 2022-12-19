const form = document.getElementById('log-in-form')
const divParaVos = document.getElementById('para-vos')
const dropDownUser = document.getElementById('user')
const intro = document.getElementById('explicacion')

let userList = []
let userObject

class User{
    constructor(nombre, pass, img){
        this.nombre = nombre
        this.pass = pass
        this.img = img
    }
}
const lara = new User('Lara','simanim2017', '../fotitos/3.png')
const tommy = new User('Tommy','bernabeu', '../fotitos/12.png')
const mags = new User('Mags','drajutop', '../fotitos/10.png')
const perucha = new User('Perucha','perucha', '../fotitos/5.png')
const guido = new User('Guido','quesoyhuevo', '../fotitos/4.png')
const pepe = new User('Pepe','123456abc', '../fotitos/7.png')
const kantor = new User('Kantor','jotate', '../fotitos/6.png')
const solcha = new User('Solcha','amordim', '../fotitos/2.png')
const lula = new User('Lula','2160', '../fotitos/8.png')
const wile = new User('Wile','GULMAAAN', '../fotitos/9.png')
const maga = new User('Maga','lojamim', '../fotitos/11.png')
const emi = new User('Emi','emi', '../fotitos/1.png')

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
                intro.style.display = 'none'
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
                <img src='${userObject.img}' alt='${userObject.nombre}'>
            </div>
        </div>
    `
}

function mostrarVoucher(){
    const divVoucher = document.getElementById('voucher')
    divVoucher.innerHTML = `
        <img src='${userObject.voucher}' id='img-voucher' alt='Voucher ${userObject.nombre}'>
    `
}
window.addEventListener('load', logIn)
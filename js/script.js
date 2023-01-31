let cuerpo = document.getElementById('cuerpojs');
let btn1 = document.getElementById('boton1').addEventListener('click', curriculum1);

function curriculum1() {
    cuerpo.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
}
let btn2 = document.getElementById('boton2').addEventListener('click', function () {

    cuerpo.style.fontFamily='Arial, Helvetica, sans-serif';
})
let btn3 = document.getElementById('boton3').addEventListener('click', function () {

    cuerpo.style.fontFamily="'Courier New', Courier, monospace";
})
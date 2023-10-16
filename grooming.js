// Funciones para desaparecer el menu
let btnInicio = document.querySelector('.a-li-menu');
let cajaChequeo = document.getElementById('caja-chequeo');

btnInicio.addEventListener('click', ()=>{
  cajaChequeo.checked = false;
  console.log('funciona');  
});

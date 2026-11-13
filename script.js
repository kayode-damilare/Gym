// const btn1 = 
// document.getElementById('btn1');
// const nav =
// document.getElementById('nav');

// btn1.addEventListener('click', function(){
//   toHide.classList.toggle('nav')
// })

const btn1 = document.getElementById('btn1');
const nav = document.getElementById('toHide');

btn1.addEventListener('click', function() {
  nav.classList.toggle('active');
});
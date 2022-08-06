
// Menu mobile

const menu = document.querySelector('.menu');

menu.addEventListener('click',function(){
    let ul = document.querySelector('header ul');
 
    if(ul.style.display === 'none'){
       ul.style.display = 'flex';
       setTimeout(function(){
         ul.style.opacity = '1';
       },300)
    }else if(ul.style.display = 'flex'){
     ul.style.opacity = '0';
     setTimeout(function(){
         ul.style.display = 'none';
     },300)
    }
 
 });
 // Abrir e fechar o modal

 const openModal = document.querySelector('.template-button');
 const closeModal = document.querySelector('.modal span');

 openModal.addEventListener('click',function(){
  let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    setTimeout(function(){
      modal.style.opacity = '1';
    },200)

 });
 closeModal.addEventListener('click',function(){
  let modal = document.querySelector('.modal');
  modal.style.opacity = '0'
  setTimeout(function(){
    modal.style.display = 'none';
  },200)

 });


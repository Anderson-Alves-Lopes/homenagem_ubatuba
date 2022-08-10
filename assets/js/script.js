
// Menu mobile

const menu = document.querySelector('.menu');

menu.addEventListener('click',function(){
    let ul = document.querySelector('header ul');
 
    if(ul.style.width === '150px'){
       ul.style.width = '0';
       
    }else {
      ul.style.width = '150px';
     
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
 //slider
 let sliderIndex = 0;
 showSlider();

 function showSlider(){
  let slider = document.querySelectorAll('.slider-box');
  for ( let i = 0; i < slider.length; i++){
    slider[i].style.display = 'none';
  }  
  sliderIndex++;
  
  if(sliderIndex > slider.length){
    sliderIndex = 1;
  }
  slider[sliderIndex -1].style.display = 'block';

  setTimeout(showSlider, 5000);
 }
 


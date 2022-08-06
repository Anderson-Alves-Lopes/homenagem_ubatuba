
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


var buttons = document.getElementById('menuButton');
var menus = document.getElementById('menu'); 
var divMenu = document.getElementById('headMenu');
buttons.addEventListener('click', function(event) {
menus.style.display = menus.style.display === 'block' ? 'none' : 'block';
    if(menus.style.display == "block" ){
        divMenu.style.height = parseInt(divMenu.offsetHeight)+300+"px";                  
    }
    else{
        divMenu.style.height = "60px";
    }                
});
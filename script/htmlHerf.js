document.addEventListener('DOMContentLoaded',function(){
    var lists = document.querySelectorAll('li');
    lists.forEach(function(li){
        li.addEventListener('click',function(event){
                event.stopPropagation();
                var aHerf = li.querySelector('a');
                if(aHerf){
                    window.parent.location.href = aHerf.href;
                }            
            });
        var btn = li.querySelector('button');
        if(btn){
            btn.addEventListener('click',function(event){
                event.stopPropagation();
                event.preventDefault();
            });
        }
    });
});

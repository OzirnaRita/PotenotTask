"use strict";

let button = document.querySelector('.button');
button.addEventListener('click', function(){
    valid();
});

function valid(){
    document.querySelectorAll('.notEmpty').forEach(elem =>
      val(elem));
}



function val(elem){
    if(elem.value.length > 0){
           elem.classList.remove("invalid")
      }else{
        elem.classList.add("invalid")
      }
    }
    
    
    //document.querySelectorAll('.notEmpty').forEach(elem =>
    //elem.addEventListener('keyup', val(elem)));
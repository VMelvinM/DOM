var contador = document.getElementById("count");
var decrementar = document.getElementById("decrement")
var resetar= document.getElementById("reset")
var incrementar = document.getElementById("increment")

var number = 0;
contador.innerText = number;

decrementar.addEventListener("click", function(){
    number--;
   color();
    
});

incrementar.addEventListener("click", function(){
    number++;
   color();
});

resetar.addEventListener("click", function(){
    number = 0;
   color();
});

function color(){
    contador.innerText = number;

    if(number > 0){
        contador.style.color = "#0f0";
              return;
    } else if(number<0){
        contador.style.color = "#F00";
                return;
    }
    contador.style.color = "#f5f5f5";
}

 
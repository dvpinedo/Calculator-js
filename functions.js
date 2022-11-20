var a;
var b;
var operation;


function init(){
    
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var addition = document.getElementById("addition");
    var subtraction = document.getElementById("subtraction");
    var multiplication = document.getElementById("multiplication")
    var division = document.getElementById("division");
    var same = document.getElementById("same");

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");

    one.onclick = function(e){
        result.textContent = result.textContent + "1";
    }

    two.onclick = function(e){
        result.textContent = result.textContent + "2";
    }

    three.onclick = function(e){
        result.textContent = result.textContent + "3";
    }

    four.onclick = function(e){
        result.textContent = result.textContent + "4";
    }

    five.onclick = function(e){
        result.textContent = result.textContent + "5";
    }

    six.onclick = function(e){
        result.textContent = result.textContent + "6";
    }    
    seven.onclick = function(e){
        result.textContent = result.textContent + "7";
    }

    eight.onclick = function(e){
        result.textContent = result.textContent + "8";
    }    
    nine.onclick = function(e){
        result.textContent = result.textContent + "9";
    }

    zero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }

        
    reset.onclick = function(e){
        resetear();
    }

    addition.onclick = function(e){
        a= result.textContent;
        operation= "+";
        clear();
    }

    subtraction.onclick = function(e){
        a= result.textContent;
        operation= "-";
        clear();
    }

    multiplication.onclick = function(e){
        a= result.textContent;
        operation= "x";
        clear();
    }

    division.onclick = function(e){
        a= result.textContent;
        operation= "/";
        clear();
    }

    same.onclick = function(e){
        b= result.textContent;
        solve();
    }
}

function clear(){
    result.textContent= "";
}

function resetear(){
    result.textContent="";
    a= 0;
    b= 0;
    operation= "";
}

function solve(){
    var res = 0;
    switch(operation){
        case "+":
            res= parseFloat(a) + parseFloat (b);
            break;
        
        case "-": 
            res=parseFloat(a)- parseFloat(b);
            break;

        case "x":
            res= parseFloat(a) * parseFloat (b);
            break;
            
        case "/": 
            res=parseFloat(a) / parseFloat(b);
            break;
    }
    resetear();
    result.textContent = res;

}
var a =parseInt(Math.floor(Math.random()*11));
var b =parseInt(Math.floor(Math.random()*11));
var c = parseInt(a+b);

 function out(c){
    if(c>21){
    document.write("you lost");
    }
    else if (c===21){
    document.write("you won");
    }
 
    else{
            var d = prompt("enter the value");
           c = c + parseInt(d);
           document.write(c);
        }
    return c;
    }
out(c);





``
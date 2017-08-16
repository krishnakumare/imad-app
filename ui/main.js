// counter code
var button = document.getElementById('counter');
var counter =0;
button.onclick = function(){
    // make a request in the counter endpoint
   
   // capture the response and store
   
   
   // sender the variable is the correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
} 
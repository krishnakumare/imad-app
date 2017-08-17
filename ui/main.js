// counter code
var button = document.getElementById('counter');
button.onclick = function(){
    // make a request in the counter endpoint
    var request = new XMLHttpRequest();
    
   // capture the response and store
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status ===200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
   
   // sender the variable is the correct span
}; 
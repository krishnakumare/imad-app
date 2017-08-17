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
   
   // make the request
   request.open('GET','http://krishnae019.imad.hasura-app.io/counter',true);
   request.send(null);
}; 
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

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    // capture a list of names and render it as a list 
    var names =['name1', 'name2','name3', 'name4'];
    var list ='';
    for (var i=0; i<names.length; i++){
        list == '<li'+ names[i] +'</li>';
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML =list;
};
console.log('Loaded!');
// change the text  by the new text

 var element= document.getElementById('main-text');
 element.innerHTML ='New Value';
 // move Image
 
var img= document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
     marginLeft = marginleft + 10;
     img.style.marginleft = marginLeft +'px';
 }
 
 img.onclick = function()
 {
    img.style.marginLeft ='100px';
     //var interval = setInterval(moveRight,100);
 };
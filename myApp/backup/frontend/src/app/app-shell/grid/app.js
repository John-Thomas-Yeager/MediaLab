





var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);


console.log($('#test'));



$('#test').on('click', function(){

  console.log("test2");

});



















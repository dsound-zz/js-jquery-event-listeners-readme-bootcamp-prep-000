//define functions here

$(document).ready(function(){

function getIt() {
  $('p').on('click', function(key) {
    if (key) {
    
    alert("Hey!")}
  });
}

function frameIt() {
  $('img').on('load', function() {
   
   $('img').append('<link rel="stylesheet" type="text/css" href="style.css" />')
})
}
});

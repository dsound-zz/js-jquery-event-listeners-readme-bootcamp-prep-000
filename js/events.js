//define functions here

$(document).ready(function(){});

function getIt() {
  $('p').on('click', function(key) {
    if (key) {
    
    alert("Hey!")}
  });
}

function frameIt() {
  $('img').on('load', function() {
   
   $('img').addClass('tasty')
})
}

function pressIt() {
  $(document).on('keypress', function(key) {
    if (key.which == 103) {
      alert('G was pressed');
    }
  })
}
function submitIt() {
  $("form").on('submit', function() {
    if ($( "input:first").val() === "correct") {
      alert("Your form is going to be submitted now.");
    }
  }
  



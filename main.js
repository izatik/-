document.getElementById('main-form').addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault();
    var elemant = document.getElementById('main-form')
var proger  = ["Anna","Rakyp","izat"]
   // var name = elemant.name.value;
   var proger = elemant.proger.value
    
   
console.log(proger);
   
}
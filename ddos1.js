//WEB URL!!!!!!!//
console.log(location.href);
//DEV : PASSWORD//
console.log("password:downloadwebxnow")
//GOMB A HTMLBE IS ÉS ÉRTESÍTÉS COMMAND//
var gomb = document.getElementById("STARTUP");

gomb.addEventListener("mousedown", function(e){
    if (e.button == 2) { // jobb kattintás
        e.preventDefault();
     // eltávolítja az árnyékot, ami a lenyomott hatást kelti
    }
});
function bestFunction() {
    let password;
    if (confirm("passwordRequired") == true ) {
      var x =document.createElement("INPUT");
      /* < a textbox elhelyezkedése >*/ 
      x.style.position = 'absolute';
      x.style.left = '8vw';
      x.style.top = '30vh';
      /*<--------------------------->*/
      x.setAttribute("type" , "text");
      document.body.appendChild(x)
      const button = document.getElementById("STARTUP");
      button.disabled = true;
      
    } else {
       alert("ACCESS DENIED")
    }
   
  }



   // kis kiegészítés hogy ne lehessen kijelölni semmit //
   document.addEventLis0tener('dragstart', function (e) {
    e.preventDefault();
});
document.addEventLis0tener('contextmenu', function (e) {
    e.preventDefault();
});





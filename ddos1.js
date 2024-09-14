//WEB URL!!!!!!!//
console.log(location.href);
//DEV : PASSWORD//
console.log("password:downloadwebxnow")
//GOMB A HTMLBE IS ÉS ÉRTESÍTÉS COMMAND//
var gomb = document.getElementById("STARTUP");
function bestFunction() {
    let password;
    if (confirm("passwordRequired") == true ) {
      var x =document.createElement("INPUT");
      /* < a textbox elhelyezkedése >*/ 
      x.style.position = 'fixed';
      x.style.left = '10vw';
      x.style.top = '30vh';
      x.style.marginLeft = ' 2vw'
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





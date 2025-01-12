//WEB URL!!!!!!!//
console.log(location.href);
//DEV : PASSWORD//
console.log("password:downloadwebxnow")
//GOMB A HTMLBE IS ÉS ÉRTESÍTÉS COMMAND//
var gomb = document.getElementById("STARTUP");
function bestFunction() {
    let password;
    if (confirm("PASSWORD REQUIRED") == true ) {
      var x =document.createElement("INPUT");
              x.setAttribute("type","text");
              const STARTUP = 
              document.getElementById("STARTUP");
              const buttonRect =
              STARTUP.getBoundingClientRect();
      /* < a textbox elhelyezkedése >*/ 
      x.style.position = 'absolute';
      x.style.left = (buttonRect.left - 30) + "px";
      x.style.top = (buttonRect.top - 50) + "px";
      x.style.width = "150px";
      x.style.height = "20px";
      x.style.padding = "px";
      x.style.fontSize = "16px";
      x.style.opacity = "50%";
      x.style.backgroundColor = "black";
      x.style.color = "green";
      x.style.border = "2px solid black"
      x.style.outline = "none";
      x.style.cursor= "url('pointer_original.png'),auto";
      /*<--------------------------->*/
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





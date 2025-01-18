//WEB URL!!!!!!!//
console.log(location.href);
//DEV : PASSWORD//
console.log("password:downloadwebxnow")
//GOMB A HTMLBE IS ÉS ÉRTESÍTÉS COMMAND//
var gomb = document.getElementById("STARTUP");
function bestFunction() {
    let password;
    if (confirm("PASSWORD REQUIRED") == true ) {
      var text_box =document.createElement("INPUT");
              text_box.setAttribute("type","text");
              text_box.setAttribute("id","passwordInput");
              const STARTUP = 
              document.getElementById("STARTUP");
              const buttonRect =
              STARTUP.getBoundingClientRect();
      /* < a textbox elhelyezkedése >*/ 
      text_box.style.position = 'absolute';
      text_box.style.left = (buttonRect.left - 30) + "px";
      text_box.style.top = (buttonRect.top - 50) + "px";
      text_box.style.width = "150px";
      text_box.style.height = "20px";
      text_box.style.padding = "px";
      text_box.style.fontSize = "16px";
      text_box.style.opacity = "50%";
      text_box.style.backgroundColor = "black";
      text_box.style.color = "green";
      text_box.style.border = "2px solid black"
      text_box.style.outline = "none";
      text_box.style.cursor= "url('pointer_original.png'),auto";
      /*<--------------------------->*/
      document.body.appendChild(text_box)
      const button = document.getElementById("STARTUP");
      button.disabled = true;

      text_box.addEventListener("keypress", function(event){
        if(event.key ==="Enter") {
             checkPassword();
          }
      });
      
    } else {
       alert("ACCESS DENIED")
    } 
}

  function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "downloadwebxnow";
    if (input === correctPassword) {
      window.location.href = "https://www.pornhub.com/";
    } else {
      alert("INCORRECT PASSWORD");
    }
  }


   // kis kiegészítés hogy ne lehessen kijelölni semmit //
   document.addEventLis0tener('dragstart', function (e) {
    e.preventDefault();
});
document.addEventLis0tener('contextmenu', function (e) {
    e.preventDefault();
});





//WEB URL!!!!!!!//
console.log(location.href);
//DEV : PASSWORD//
console.log("password:downloadwebxnow")
//GOMB A HTMLBE IS ÉS ÉRTESÍTÉS COMMAND//
function bestFunction() {
    let password;
    if (confirm("passwordRequired") == true) {
      var x =document.createElement("INPUT");
      /* < a textbox elhelyezkedése >*/ 
      x.style.position = 'absolute';
      x.style.left = '56px';
      x.style.top = '250px';
      /*<--------------------------->*/
      x.setAttribute("type" , "text");
      document.body.appendChild(x)
      const button = document.getElementById("STARTUP");
      button.disabled = true;
      
    } else {
       alert("ACCESS DENIED")
    }
   
  }

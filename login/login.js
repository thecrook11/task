 const users =
   [{

    mail: "sanky905@solutions.com",
   pass: "mindset",
   }]
 for (i = 0; i < users.length; i++)
   obj = users[i];
  console.log(obj);


 function validate() {

  let x = document.forms["myform"]["email"].value;
 let y = document.forms["myform"]["password"].value;
   let text;

   // console.log(x)
   // console.log(y)
  
 if (x == "" || x == null) {
    text = "email should not be empty!";
   document.getElementById("issues").innerHTML = text;
     document.myform.email.focus();
  return false;
  }else if (x != obj.mail && y != obj.pass) {
     text = " invalid email & password";
     document.getElementById("issues").innerHTML = text;
     return false;
   } else if (x == obj.mail  || y != obj.pass) 
  {
   text = " invalid password";
   document.getElementById("issues").innerHTML = text;
    return false;

  }else if(x == obj.mail && y==obj.pass){
    return true;

 }

  

};


// console.log(obj.mail)
// console.log(obj.pass)

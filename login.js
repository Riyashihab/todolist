let username=document.getElementById("username");

let pwd=document.getElementById("password");


function validation(callback){

    if(username.value.trim()==""&&pwd.value.trim()==""){
        alert("Fields cannot be blank")
        return false;
    }

    else{


    
    if(username.value=="admin"&&pwd.value=="12345"){
        alert("succes")
        callback();
        return true;
    }
else{
    alert("Invalid Username or password")
        return false;
}

    }


}
 
function callback(){

   // console.log("welcome");
  //  alert("welcome")
    window.location.href = "mainpage.html";

}
        
















function myfunc(){
    var fname=document.getElementById("fname").value;
var password=document.getElementById("password").value;
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";
    document.getElementById("first").innerHTML=fname;
    document.getElementById("second").innerHTML="Your Password is:"+password;

}
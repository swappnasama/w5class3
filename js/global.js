var myName;
var yourName=document.getElementById("myName");
function getName(){

  myName=document.getElementById("name").value;
  yourName.innerHTML="Your name is "+myName;

}
var toggle=document.querySelector('.toggle');
var divHideme=document.querySelector('.hideme');
toggle.addEventListener('click',function(){
  
  if (divHideme.style.display === "none") {
    divHideme.style.display = "block";
  } else {
    divHideme.style.display = "none";
  }
});
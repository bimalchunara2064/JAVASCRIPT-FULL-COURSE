function Click(){
   //alert("hi buddy , it's single click");
   document.getElementById("btn1").innerHTML = "BTN CONTENT CHANGED";

}

function Clickdbl(){
    alert("hi buddy , it's double click");
}

function Mouseover(){
    alert("hi buddy , it's Mouse Over");
}

function Mouseout(){
    // alert("hi buddy , it's Mouse Out");
  let tagRef=   document.getElementsByTagName("button")[1].style.backgroundColor="yellow";
  console.log(tagRef);
}


function OnFocus(a){
    // alert("hi buddy , it's onFocus");
   a.style.background = "red";
}

function Onblur(){
//hv to write codes
}
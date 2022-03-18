/*let body=document.querySelector("body")

let um=document.createElement("div")
um.setAttribute("id", "switch")
let imgSwitch=document.createElement("img")
imgSwitch.setAttribute("id","switch")
imgSwitch.src="./imagens/switchoff.jpg"

let dois=document.createElement("div")
dois=setAttribute("id","lampada")
let imgLamp=document.createElement("img")
imgLamp.setAttribute("id","lamp")
imgSwitch.src="./imagens/switchoff.jpg"

um=append(imgSwitch)
body.append(um)

dois.append(imgLamp)
body.append(dois)

let swi=document.querySelector("#switch")
swi.onclick=OnOff
let lamp=document.querySelector("#lamp")
lamp.value="off"

function OnOff(){

  if(lamp.value=="off"){
    lamp.src="./imagens/on.jpg"
    swi=src="./imagens/switchon.jpg"
    body.setAttribute("style", "background-color:#fff")
    lamp.value="on"
  }
  else if(lamp.value=="on"){
    lamp.src="./imagens/off.jpg"
    swi.src="./imagens/switchoff.jpg"
    body.setAttribute("style", "background-color:#000")
    lamp.value="off"

  }


}

  /*function changeImage() {
    var image = document.getElementById('off');
    if (image.src.match("bulbon")) {
        image.src = "off.jpg";
    } else {
        image.src = "on.jpg";
    }
}*/
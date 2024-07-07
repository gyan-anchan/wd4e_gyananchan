function upDate(element){
    document.getElementById("image").style.backgroundImage = `url('${element.src}')`;
    document.getElementById("image").innerHTML = element.alt;
    // document.querySelector("div p").setAttribute(background, #000000)
    }

function unDo(element){
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}


function loadTabIndex(){
    console.log("load successful")
    var node_list = document.querySelectorAll(".preview")
    for(i=0; i<=7; i++){
        node_list[i].setAttribute("tabindex", "0")
    }
}
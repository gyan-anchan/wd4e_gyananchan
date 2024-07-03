function upDate(element){
    document.getElementById("image").style.backgroundImage = `url('${element.src}')`;
    document.getElementById("image").innerHTML = element.alt;
    }

function unDo(element){
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
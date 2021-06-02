var btn = document.getElementsByClassName("btn");
var banner = document.getElementById("banner");

btn[0].onclick=function(){
    banner.src = "images/pic1.png"
    banner.classList.add("zoom")
    setTimeout(function(){
    banner.classList.remove("zoom")
    },500)
    for(b of btn){
        b.classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick=function(){
    banner.src = "images/pic2.png"
    banner.classList.add("zoom")
    setTimeout(function(){
    banner.classList.remove("zoom")
    },500)
    for(b of btn){
        b.classList.remove("active")
    }
    this.classList.add("active")
    
}
btn[2].onclick=function(){
    banner.src = "images/pic3.png"
    banner.classList.add("zoom")
    setTimeout(function(){
    banner.classList.remove("zoom")
    },500)
    for(b of btn){
        b.classList.remove("active")
    }
    this.classList.add("active")
}

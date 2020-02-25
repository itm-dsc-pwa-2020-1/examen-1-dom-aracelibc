function dark(){
    document.getElementById("body").style.backgroundColor = "gray";
    document.getElementById("contenedor").style.backgroundColor="black";
    document.getElementById("logo").style.backgroundColor="black";
    document.getElementById("slogan").style.backgroundColor="black";
    document.getElementById("contenido").style.backgroundColor="gray";
    document.getElementById("c1").style.backgroundColor="black";
    document.getElementById("c2").style.backgroundColor="black";
    document.getElementById("c3").style.backgroundColor="black";
    document.getElementById("c4").style.backgroundColor="black";
    document.getElementById("c5").style.backgroundColor="black";
    document.getElementById("nav").style.backgroundColor="white";
    //CMABIAR COLOR BOTONES
    var a=document.getElementsByClassName("botones");
        for (var i=0; i<a.length; i++) a[i].style.backgroundColor="black";
    
    var b=document.getElementsByClassName("botones");
        for (var i=0; i<b.length; i++) b[i].style.color="white";

    var c=document.getElementsByClassName("botones");
        for (var i=0; i<c.length; i++) c[i].style.borderColor="white";
}

function normal(){
  
    document.getElementById("body").style.backgroundColor = "pink";
    document.getElementById("contenedor").style.backgroundColor="blue";
    document.getElementById("logo").style.backgroundColor="pink";
    document.getElementById("slogan").style.backgroundColor="pink";
    document.getElementById("contenido").style.backgroundColor="blue";
    document.getElementById("c1").style.backgroundColor="pink";
    document.getElementById("c2").style.backgroundColor="pink";
    document.getElementById("c3").style.backgroundColor="pink";
    document.getElementById("c4").style.backgroundColor="pink";
    document.getElementById("c5").style.backgroundColor="pink";
    document.getElementById("nav").style.backgroundColor="pink";

    

    //CMABIAR COLOR BOTONES
    var a=document.getElementsByClassName("botones");
        for (var i=0; i<a.length; i++) a[i].style.backgroundColor="white";
    
    var b=document.getElementsByClassName("botones");
        for (var i=0; i<b.length; i++) b[i].style.color="black";

    var c=document.getElementsByClassName("botones");
        for (var i=0; i<c.length; i++) c[i].style.borderColor="black";
     
}
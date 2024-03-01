document.getElementById("features").addEventListener("click", function(){

    document.getElementById("down").classList.toggle("none")
    document.getElementById("up").classList.toggle("inline")
} )



document.getElementById("company").addEventListener("click", function(){

    document.getElementById("down-2").classList.toggle("none")
     document.getElementById("up-2").classList.toggle("inline")
} )


document.getElementById("features-2").addEventListener("click", function(){

    document.getElementById("down-3").classList.toggle("none")
    document.getElementById("up-3").classList.toggle("inline")
    
} )



document.getElementById("company-2").addEventListener("click", function(){

    document.getElementById("down-4").classList.toggle("none")
     document.getElementById("up-4").classList.toggle("inline")
} )


document.getElementById("hamburger").addEventListener("click", function(){

    document.getElementById("menu").style.display = "inline"
} )


document.getElementById("close").addEventListener("click", function(){

    document.getElementById("menu").style.display = "none"
} )
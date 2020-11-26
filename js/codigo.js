window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.5)";
        document.getElementById("nav").style.backdropFilter = "blur(8px)";
        //document.getElementById("nav").style.backdropFilter = "invert(1)";
        //document.getElementById("nav").style.backdropFilter = "sepia(0.9)";
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.0)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        //document.getElementById("nav").style.backdropFilter = "invert(0)";
        //document.getElementById("nav").style.backdropFilter = "sepia(0)";
    }
}
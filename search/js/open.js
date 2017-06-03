function open_70sec() {
    var a=document.getElementById("sh_d");
    a.style.display="block";
    document.body.style.overflow="hidden";
    var c=window.pageYOffset;
    a.style.marginTop=c+"px";
}
function sh_close() {
    document.getElementById("sh_d").style.display="none";
    document.body.style.overflow="visible";
}


function open_password() {
    var a=document.getElementById("se_d");
    a.style.display="block";
    document.body.style.overflow="hidden";
    var c=window.pageYOffset;
    a.style.marginTop=c+"px";
}
function se_close() {
    document.getElementById("se_d").style.display="none";
    document.body.style.overflow="visible";
}

function dl() {
    var a=document.getElementById("dl_D");
    a.style.display="block";
    document.body.style.overflow="hidden";
}
function Textxx() {
    var a= document.body.offsetHeight;
    alert(a);
    var b=document.getElementById("dl_D");
    b.style.height=a;

}
function dl_clock() {
    var a=document.getElementById("dl_D");
    a.style.display="none";
    document.body.style.overflow="visible";
}
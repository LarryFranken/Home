var jiedian=1;
function all_top_onclick(n,a) {
    all_qkz();
    var idd="all_special"
    var did=n;
    n=all_top_onclick_null(n);
    jiedian=a;
    did.id=idd;
    all_hcz();
}
//清空所有的属性
function all_top_onclick_null(n) {
    var shengcheng="all_special_"+jiedian;
    var c=document.getElementById("all_special");
    c.id=shengcheng;
     return n;
}

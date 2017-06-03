/*开始位置搜索框*/
var n=0;
function top_Dropdown_box_top() {
    var a=document.getElementById("top_content_top_sousuo");
    var b=document.getElementById('top_content_top_sousuo_i');
    if(n==0){
        a.style.height="270px";
        n=1;
        a.style.borderBottom="1px solid #666666";
        b.style.backgroundPosition="-58px -295px";
    }else {
        a.style.height="44px";
        n=0;
        a.style.borderBottom="0px";
        b.style.backgroundPosition="-614px -478px";
    }
}
function top_Dropdown_box_top_44() {
    var a=document.getElementById("top_content_top_sousuo");
    a.style.height="44px";
    a.style.borderBottom="0px";
    n=0;
}

function top_Dropdown_box_top_onclick(a) {
    var b=document.getElementById("top_content_top_sousuo_span");
    if(a==1){
        b.innerHTML="网页";
        top_Dropdown_box_top_44();
    }else if(a==2){
        b.innerHTML="音乐";
        top_Dropdown_box_top_44();
    }else if(a==3){
        b.innerHTML="视频";
        top_Dropdown_box_top_44();
    }else if(a==4){
        b.innerHTML="图片";
        top_Dropdown_box_top_44();
    }else if(a==5){
        b.innerHTML="贴吧";
        top_Dropdown_box_top_44();
    }else if(a==6){
        b.innerHTML="知道";
        top_Dropdown_box_top_44();
    }else if(a==7){
        b.innerHTML="新闻";
        top_Dropdown_box_top_44();
    }else  if(a==8){
        b.innerHTML="地图";
        top_Dropdown_box_top_44();
    }else{
        b.innerHTML="网页";
        top_Dropdown_box_top_44();
    }
}

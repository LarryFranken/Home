/*$(document).keydown(function (event) {
     var a=document.getElementById("all_7");
    if(ksj==1 &&(a.style.display=="block") && ksj==1){
   // if(event.keyCode == 37 || event.keyCode == 38 ||event.keyCode == 39 ||event.keyCode == 40){
        event.preventDefault();
    //}
}
});*/
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
       if(e && e.keyCode==27){ // 按 Esc
       //要做的事情
    }
        if(e && e.keyCode==113){ // 按 F2
        //要做的事情
    }
    if(e && e.keyCode==13){ // enter 键
        //要做的事情

        var myInput = document.getElementById("shuruk");
        if (myInput == document.activeElement) {
            //alert('获取焦点');
            baiduyixia();
        } else {
            //alert('未获取焦点');
        }

    }
    //keycode   37 = Left
    //keycode   38 = Up
    //keycode   39 = Right
    //keycode   40 = Down
    if(e && e.keyCode==37){ // Left  键
        //要做的事情
        gm2048("a");
    }
    if(e && e.keyCode==38){ // Up 键
        //要做的事情
        gm2048("w");
    }
    if(e && e.keyCode==39){ // Right 键
        //要做的事情
        gm2048("d");
    }
    if(e && e.keyCode==40){ // Down 键
        //要做的事情
        gm2048("s");
    }
}

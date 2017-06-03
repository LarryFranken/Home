//数组 其中存 所有块的实时内容
var  gm_sz=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var ksj=0;
var  zcj=0;
var zgcj=0;
function gm2048(jp){
    if(ksj==0){
        gm2048sc();
        gm2048sc();
        ksj=1;
        //清屏函数
        gm2048qc();
        //显示函数
        gm2048xs();
    }else {
        if(jp=="w"){
            //alert("上");
            gm2048shang();
        }else if(jp=="s"){
            gm2048xia();
            //alert("下 ");
        }else if(jp=="a"){
            gm2048zuo();
            // alert("左");
        }else if(jp=="d"){
            gm2048you();
            //alert("右");
        }
        //随机生成;
        gm2048sc();
        //清屏函数
        gm2048qc();
        //显示函数
        gm2048xs();
    }

}
//显示所有模块
function gm2048xs() {
    document.getElementById("gm2048_zcj").innerHTML=zcj;
    document.getElementById("gm2048_zgzj").innerHTML=zgcj;
    var name;
    var idd;
    //11
    name=document.getElementById("gm11");
    if(gm_sz[0][0]!=0){
        name.innerHTML=gm_sz[0][0];
        name.style.background="#EEE4DA";
    }

    //12
    name=document.getElementById("gm12");
    if(gm_sz[0][1]!=0){
        name.innerHTML=gm_sz[0][1];
        name.style.background="#EEE4DA";
    }
    //13
    name=document.getElementById("gm13");
    if(gm_sz[0][2]!=0){
        name.innerHTML=gm_sz[0][2];
        name.style.background="#EEE4DA";
    }
    //14
    name=document.getElementById("gm14");

    if(gm_sz[0][3]!=0){
        name.innerHTML=gm_sz[0][3];
        name.style.background="#EEE4DA";
    }

//------------------------------------------------------//
    //21
    name=document.getElementById("gm21");
    if(gm_sz[1][0]!=0){
        name.innerHTML=gm_sz[1][0];
        name.style.background="#EEE4DA";
    }
    //22
    name=document.getElementById("gm22");
    if(gm_sz[1][1]!=0){
        name.innerHTML=gm_sz[1][1];
        name.style.background="#EEE4DA";
    }
    //23
    name=document.getElementById("gm23");
    if(gm_sz[1][2]!=0){
        name.innerHTML=gm_sz[1][2];
        name.style.background="#EEE4DA";
    }
    //24
    name=document.getElementById("gm24");
    if(gm_sz[1][3]!=0){
        name.innerHTML=gm_sz[1][3];
        name.style.background="#EEE4DA";
    }
//------------------------------------------------------//
    //31
    name=document.getElementById("gm31");
    if(gm_sz[2][0]!=0){
        name.innerHTML=gm_sz[2][0];
        name.style.background="#EEE4DA";
    }
    //32
    name=document.getElementById("gm32");
    if(gm_sz[2][1]!=0){
        name.innerHTML=gm_sz[2][1];
        name.style.background="#EEE4DA";
    }
    //33
    name=document.getElementById("gm33");
    if(gm_sz[2][2]!=0){
        name.innerHTML=gm_sz[2][2];
        name.style.background="#EEE4DA";
    }
    //34
    name=document.getElementById("gm34");
    if(gm_sz[2][3]!=0){
        name.innerHTML=gm_sz[2][3];
        name.style.background="#EEE4DA";
    }

//------------------------------------------------------//
    //41
    name=document.getElementById("gm41");
    if(gm_sz[3][0]!=0){
        name.innerHTML=gm_sz[3][0];
        name.style.background="#EEE4DA";
    }
    //42
    name=document.getElementById("gm42");
    if(gm_sz[3][1]!=0){
        name.innerHTML=gm_sz[3][1];
        name.style.background="#EEE4DA";
    }

    //43
    name=document.getElementById("gm43");
    if(gm_sz[3][2]!=0){
        name.innerHTML=gm_sz[3][2];
        name.style.background="#EEE4DA";
    }

    //44
    name=document.getElementById("gm44");
    if(gm_sz[3][3]!=0){
        name.innerHTML=gm_sz[3][3];
        name.style.background="#EEE4DA";
    }
}
//清除所有模块
function gm2048qc() {
    var name;
    var idd;
    //11
    name=document.getElementById("gm11");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //12
    name=document.getElementById("gm12");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //13
    name=document.getElementById("gm13");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //14
    name=document.getElementById("gm14");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";

//------------------------------------------------------//
    //21
    name=document.getElementById("gm21");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";

    //22
    name=document.getElementById("gm22");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //23
    name=document.getElementById("gm23");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //24
    name=document.getElementById("gm24");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
//------------------------------------------------------//
    //31
    name=document.getElementById("gm31");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //32
    name=document.getElementById("gm32");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //33
    name=document.getElementById("gm33");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //34
    name=document.getElementById("gm34");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";

//------------------------------------------------------//
    //41
    name=document.getElementById("gm41");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
    //42
    name=document.getElementById("gm42");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";

    //43
    name=document.getElementById("gm43");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";

    //44
    name=document.getElementById("gm44");
    name.innerHTML=" ";
    name.style.background="#cdc1b4";
}
//随机生成方法
function gm2048sc() {
    var a;
    var b;
    var c;
    for(;;){
        a=parseInt(Math.random()*4);
        b=parseInt(Math.random()*4);
        c=parseInt(Math.random()*10);
        if(c==9){
            c=4;
        }else {
            c=2;
        }
        if(gm_sz[a][b]==0){
            gm_sz[a][b]=c;
            break;
        }
    }
}
//重新开始
function gm2048cxks() {
    for(var a=0;a<4;a++){
        for(var b=0;b<4;b++){
            gm_sz[a][b]=0;
        }
    }
    ksj=0;
    zcj=0;
    //清屏
    document.getElementById("gm2048_zcj").innerHTML=zcj;
    gm2048qc();
    gm2048xs();
}
//移动函数组
function gm2048shang() {
    //alert("上");
    for(;;){
        if((gm2048shang_1())==0){
            break;
        }
    }
    gm2048qc();
    gm2048xs();

}
function gm2048shang_1() {
    var pd=0;
    var z,p;
    for(var a=3;a>0;a--){
        for(var b=0;b<4;b++){
            z=gm_sz[a][b];
            p=gm_sz[a-1][b];
            if(z!=0){
                if(z!=0 && p==0){
                    gm_sz[a-1][b]=gm_sz[a][b];
                    gm_sz[a][b]=0;
                    pd=1;
                }
                else if(z==p){
                    gm_sz[a-1][b]=gm_sz[a][b]+gm_sz[a-1][b];
                    gm_sz[a][b]=0;
                    pd=1;
                    game_2048_zj(z,2); //==========
                }
            }
        }
    }
    return pd;
}
function gm2048xia() {
 //   alert("下 ");
    for(;;){
        if((gm2048xia_1())==0){
            break;
        }
    }
    gm2048qc();
    gm2048xs();
}
function gm2048xia_1() {
    var pd=0;
    var z,p;
    for(var a=0;a<3;a++){
        for(var b=0;b<4;b++){
            z=gm_sz[a][b];
            p=gm_sz[a+1][b];
            if(z!=0){
                if(z!=0 && p==0){
                    gm_sz[a+1][b]=gm_sz[a][b];
                    gm_sz[a][b]=0;
                    pd=1;
                }
                else if(z==p){
                    gm_sz[a+1][b]=gm_sz[a][b]+gm_sz[a+1][b];
                    gm_sz[a][b]=0;
                    game_2048_zj(z,2); //==========
                    pd=1;
                }
            }
        }
    }
    return pd;
}
function gm2048zuo() {
    //alert("左");
    for(;;){
        if((gm2048zuo_1())==0){
            break;
        }
    }
    gm2048qc();
    gm2048xs();
}
function gm2048zuo_1() {
    var pd=0;
    var z,p;
        for(var b=3;b>0;b--){
            for(var a=0;a<4;a++){
                z=gm_sz[a][b];
                p=gm_sz[a][b-1];
               // alert(z+"|"+p);
                if(z!=0){
                    if(z!=0 && p==0){
                        gm_sz[a][b-1]=gm_sz[a][b];
                        gm_sz[a][b]=0;
                        pd=1;
                    }
                    else if(z==p){
                        gm_sz[a][b-1]+=gm_sz[a][b];
                        gm_sz[a][b]=0;
                        game_2048_zj(z,2); //==========
                        pd=1;
                    }
                }
            }
        }
    return pd;
}
function gm2048you() {
    //alert("右");
    for(;;){
        if((gm2048you_1())==0){
            break;
        }
    }
    gm2048qc();
    gm2048xs();
}
function gm2048you_1() {
    var pd=0;
    var z,p;
    for(var b=0;b<3;b++){
        for(var a=0;a<4;a++){
            z=gm_sz[a][b];
            p=gm_sz[a][b+1];
            var c=b+1;
           // alert(a+","+b+"=>"+a+","+c);
            if(z!=0){
                if(z!=0 && p==0){
                    gm_sz[a][b+1]=gm_sz[a][b];
                    gm_sz[a][b]=0;
                    pd=1;
                }
                else if(z==p){
                    gm_sz[a][b+1]+=gm_sz[a][b];
                    gm_sz[a][b]=0;
                    game_2048_zj(z,2); //==========
                    pd=1;
                }
            }
        }
    }
    return pd;
}
function game_2048_zj(a,b) {
    zcj+=(a*2);
    if(zcj>zgcj){
        zgcj=zcj;
    }
}

function gm_2048_kaishi() {
    var a=document.getElementById("all7_g");
    a.style.display="block";
    document.body.style.overflow="hidden";
    var c=window.pageYOffset;
    var hh=document.getElementById("all7_g");
    hh.style.marginTop=c+"px";
 //   alert(c);
}
function gm_guanbi() {
    var a=document.getElementById("all7_g");
    a.style.display="none";
    document.body.style.overflow="visible";
}
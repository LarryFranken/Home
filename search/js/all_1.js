var all_01_2_left_2_ul_aaa=0;
//切换单双层
function all_01_2_left_2_ul() {
    if (all_01_2_left_2_ul_aaa==0){
        var a=document.getElementById("all_01_2_left_2_id").style.height="45px";
        all_01_2_left_2_ul_aaa++;
    }else {
        var a=document.getElementById("all_01_2_left_2_id").style.height="25px";
        all_01_2_left_2_ul_aaa=0;
    }
}
//导航栏小模块
var all_01_2_left_3_on=1;
var all_01_2_left_3_on_content="推荐";
var all_01_2_left_3_on_other_content="体育";
var all_01_2_left_3_other_other_7=0;
var all_01_2_left_3_other_other_6=0;
function all_01_2_left_3(a) {
    var b=document.getElementById("all_01_2_left_3_top_5");
    var dcd,c,x;
    if(a==6){
        all_01_2_left_3_content_clock(0);//关掉作废的主内容
        all_01_2_left_3_clear();//清除所有属性 和删除a标签
//交换内容
        if(all_01_2_left_3_other_other_6==1){
            document.getElementById("all_01_2_left_3_content_d5").id=document.getElementById("all_01_2_left_3_content_d6").id;
            document.getElementById("all_01_2_left_3_content_d6").id="all_01_2_left_3_content_d5";
            all_01_2_left_3_other_other_6=0;
        }else {
            dcd=document.getElementById("all_01_2_left_3_content_d6");
            dcd.id="all_01_2_left_3_content_d5";
            dcd=document.getElementById("all_01_2_left_3_content_d5");
            dcd.id="all_01_2_left_3_content_d6";
            all_01_2_left_3_other_other_6=1;
        }


        all_01_2_left_3_top_other();//关闭其他窗口
        //交换p内容
        x=document.getElementById("all_01_2_left_3_top_6").innerHTML;
        document.getElementById("all_01_2_left_3_top_6").innerHTML=all_01_2_left_3_rturn(5);
        document.getElementById("all_01_2_left_3_top_5").innerHTML=all_01_2_left_3_rturn(6);
        all_01_2_left_3_on_other_content=x;
        all_01_2_left_3_on_content=x;
        all_01_2_left_3_on=5;
        all_01_2_left_3_cy();//修改现有id class值  修改现有id为超链接
        all_01_2_left_3_content_clock(1);//打开启动的主内容
    }
    else
    if(a==7){
        all_01_2_left_3_content_clock(0);//关掉作废的主内容
        all_01_2_left_3_clear();//清除所有属性 和删除a标签
//交换内容
        if(all_01_2_left_3_other_other_7==1){
            document.getElementById("all_01_2_left_3_content_d5").id=document.getElementById("all_01_2_left_3_content_d7").id;
            document.getElementById("all_01_2_left_3_content_d7").id="all_01_2_left_3_content_d5";
            all_01_2_left_3_other_other_7=0;
        }else {
            dcd=document.getElementById("all_01_2_left_3_content_d7");
                                  dcd.id="all_01_2_left_3_content_d5";
            dcd=document.getElementById("all_01_2_left_3_content_d5");
                                  dcd.id="all_01_2_left_3_content_d7";
            all_01_2_left_3_other_other_7=1;
        }


        all_01_2_left_3_top_other();//关闭其他窗口
        //交换p内容
        x=document.getElementById("all_01_2_left_3_top_7").innerHTML;
        document.getElementById("all_01_2_left_3_top_7").innerHTML=all_01_2_left_3_rturn(5);
        document.getElementById("all_01_2_left_3_top_5").innerHTML=all_01_2_left_3_rturn(7);
        all_01_2_left_3_on_other_content=x;
        all_01_2_left_3_on_content=x;
        all_01_2_left_3_on=5;
        all_01_2_left_3_cy();//修改现有id class值  修改现有id为超链接
        all_01_2_left_3_content_clock(1);//打开启动的主内容
    }
    else{
        all_01_2_left_3_content_clock(0);//关掉作废的主内容
        all_01_2_left_3_clear();//清除所有属性 和删除a标签
        all_01_2_left_3_on=a;   //修改为现有的id
        all_01_2_left_3_con();  //备份现有id的内容
        all_01_2_left_3_cy();//修改现有id class值  修改现有id为超链接
        all_01_2_left_3_content_clock(1);//打开启动的主内容
    }


}
function all_01_2_left_3_clear() {
    var b;
    if(all_01_2_left_3_on==1){
        b=document.getElementById("all_01_2_left_3_top_1");
        b.className="null";
    }else if(all_01_2_left_3_on==2){
        b=document.getElementById("all_01_2_left_3_top_2");
        b.className="null";
    }else if(all_01_2_left_3_on==3){
        b=document.getElementById("all_01_2_left_3_top_3");
        b.className="null";
    }else if(all_01_2_left_3_on==4){
        b=document.getElementById("all_01_2_left_3_top_4");
        b.className="null";
    }else if(all_01_2_left_3_on==5){
        b=document.getElementById("all_01_2_left_3_top_5");
        b.className="null";
    }
    b.innerHTML=all_01_2_left_3_on_content;
}
function all_01_2_left_3_con() {
    if(all_01_2_left_3_on==1){
        all_01_2_left_3_on_content="推荐";
    }else if(all_01_2_left_3_on==2){
        all_01_2_left_3_on_content="社会";
    }else if(all_01_2_left_3_on==3){
        all_01_2_left_3_on_content="娱乐";
    }else if(all_01_2_left_3_on==4){
        all_01_2_left_3_on_content="军事";
    }else if(all_01_2_left_3_on==5){
        all_01_2_left_3_on_content=all_01_2_left_3_on_other_content;
    }else{
        all_01_2_left_3_on_content="推荐";
    }
}
function all_01_2_left_3_cy() {
    var b;
    if(all_01_2_left_3_on==1){
        b=document.getElementById("all_01_2_left_3_top_1");
        b.className="all_01_2_left_3_top_on";
    }else if(all_01_2_left_3_on==2){
        b=document.getElementById("all_01_2_left_3_top_2");
        b.className="all_01_2_left_3_top_on";
    }else if(all_01_2_left_3_on==3){
        b=document.getElementById("all_01_2_left_3_top_3");
        b.className="all_01_2_left_3_top_on";
    }else if(all_01_2_left_3_on==4){
        b=document.getElementById("all_01_2_left_3_top_4");
        b.className="all_01_2_left_3_top_on";
    }else if(all_01_2_left_3_on==5){
        b=document.getElementById("all_01_2_left_3_top_5");
        b.className="all_01_2_left_3_top_on";
        // b.value=all_01_2_left_3_on_content;
    }
    b.innerHTML="<a href='' target='_blank'>"+all_01_2_left_3_on_content+"</a>";
}
function all_01_2_left_3_content_clock(a) {
    var b;
    if(all_01_2_left_3_on==1){
        b=document.getElementById("all_01_2_left_3_content_d1");
    }else if(all_01_2_left_3_on==2){
        b=document.getElementById("all_01_2_left_3_content_d2");
    }else if(all_01_2_left_3_on==3){
        b=document.getElementById("all_01_2_left_3_content_d3");
    }else if(all_01_2_left_3_on==4){
        b=document.getElementById("all_01_2_left_3_content_d4");
    }else if(all_01_2_left_3_on==5){
        b=document.getElementById("all_01_2_left_3_content_d5");
    }else if(all_01_2_left_3_on==6){
        b=document.getElementById("all_01_2_left_3_content_d6");
    }else if(all_01_2_left_3_on==7){
        b=document.getElementById("all_01_2_left_3_content_d7");
    }else if(all_01_2_left_3_on==8){
        b=document.getElementById("all_01_2_left_3_content_d8");
    }
    if(a==0){
        b.style.display="none";
    }else {
        b.style.display="block";
    }

}
function all_01_2_left_3_rturn(a) {
    var b="推荐";
    if(a==1){
        b="推荐";
    }else if(a==2){
        b="社会";
    }else if(a==3){
        b="娱乐";
    }else if(a==4){
        b="军事";
    }else if(a==5){
        b=all_01_2_left_3_on_other_content;
    }else if(a==6){
        b="财经";
    }else if(a==7){
        b="汽车";
    }else if(a==8){
        b="体育";
    }
    return b;
}
//导航栏其他部分
var  all_01_2_left_3_top_other_on=0;    //当为0时是关闭否则开启
function all_01_2_left_3_top_other() {
    var b=document.getElementById("all_01_2_left_3_top_dother");
    if(all_01_2_left_3_top_other_on==0){
        b.style.display="block";
        all_01_2_left_3_top_other_on=1;
    }
    else {
        b.style.display="none";
        all_01_2_left_3_top_other_on=0;
    }
}
//点击换图
function all_01_2_left_3_content_c1_img_a(b,a,th) {
    var ss=document.getElementById("all_01_2_left_3_content_c1_img_a");
    var zuo=document.getElementById("all_01_2_left_3_content_c1_img_zuo");
    var you=document.getElementById("all_01_2_left_3_content_c1_img_you");
    if(a==0){
        //左
      //  alert(ss.innerHTML);
        if(b==1){
            //3
            ss.innerHTML="王某和某位女明星...";
            ss.className="all_01_2_left_3_content_c1_img_a3";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(3,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(3,1,this);
            }

        }else if(b==3){
            //2
            ss.innerHTML="网吧惊现巨蛇，德玛西亚与女娲之间爆发了..";
            ss.className="all_01_2_left_3_content_c1_img_a2";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(2,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(2,1,this);
            }
        }else if(b==2){
            //1
            ss.innerHTML="有人吧多肉做成了菜，网友目瞪口呆";
            ss.className="all_01_2_left_3_content_c1_img_a1";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(1,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(1,1,this);
            }
        }


     //   alert(ss.style.background);
    }else {
        //右
        //alert("右");
        //  alert(ss.innerHTML);
        if(b==1){
                //2
            ss.innerHTML="网吧惊现巨蛇，德玛西亚与女娲之间爆发了..";
            ss.className="all_01_2_left_3_content_c1_img_a2";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(2,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(2,1,this);
            }
        }else if(b==2){
            //3
            ss.innerHTML="王某和某位女明星...";
            ss.className="all_01_2_left_3_content_c1_img_a3";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(3,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(3,1,this);
            }

        }else if(b==3){
            //1
            ss.innerHTML="有人吧多肉做成了菜，网友目瞪口呆";
            ss.className="all_01_2_left_3_content_c1_img_a1";
            zuo.onclick=function () {
                all_01_2_left_3_content_c1_img_a(1,0,this);
            }
            you.onclick=function () {
                all_01_2_left_3_content_c1_img_a(1,1,this);
            }
        }
    }
}


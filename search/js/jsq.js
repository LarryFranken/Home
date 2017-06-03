var arr =[100];
var str=" ";
var str_number=0;

//归零函数
function return_to_zero(){
    str=" ";
    document.getElementById("Display").innerHTML="0";
    str_number=0;
}

//退格
function T_backspace(){
    var a=str;
    str=a.slice(0,str.length-1);
    if(str[str.length]==" "){
        str=a.slice(0,str.length-1);
    }
    document.getElementById("Display").innerHTML=str;
}

//前后两次输入不能都为算数运算符
function judge_repeat(a) {
    if(a=="+" || a=="-" || a=="*" || a=="/" || a=="%"){
        if(str==" "){
            alert("科学计算式的第一位不能为运算符");
            str=a.slice(0,str.length-1);
        }
        if(str[str.length]=="+" || str[str.length]=="-" || str[str.length]=="%"  || str[str.length]=="*" || str[str.length]=="/"){
            alert("!");

        }
        else{
            if(str_number==1){
                T_count();
                str_number=1;
                str=str.concat(" "+a+" ");
            }
            else {
                str=str.concat(" "+a+" ");
                str_number++;
            }
        }
    }
    else {
        str=str.concat(a);
    }
    document.getElementById("Display").innerHTML=str;
}
//计算
function T_count()  {
    arr=str.split(" ");
    if(arr[2]=="+"){
        str = + parseFloat(arr[1]) + parseFloat(arr[3]);
        str=" "+str;
    }else if(arr[2]=="-"){
        str = parseFloat(arr[1]) - parseFloat(arr[3]);
        str=" "+str;
    }else if(arr[2]=="*"){
        str = parseFloat(arr[1]) * parseFloat(arr[3]);
        str=" "+str;
    }else if(arr[2]=="/"){
        str = parseFloat(arr[1]) / parseFloat(arr[3]);
        str=" "+str;
    }else{
        str = parseFloat(arr[1]) % parseFloat(arr[3]);
        str=" "+str;
    }
}
function T_build(){
    if(str[str.length]=="+" || str[str.length]=="-" || str[str.length]=="%"  || str[str.length]=="*" || str[str.length]=="/"){
        alert("科学计算式的最后一位不能为运算符");
        /*str=a.slice(0,str.length-1);*/
    }
    else{
        T_count();
        str_number=0;
        document.getElementById("Display").innerHTML=str;
    }
}
//按钮单击事件
function bo_a(a){
    if(a=="归零")
        return_to_zero();
    else if(a=="退格")
        T_backspace();
    else if(a=="保存")
        alert("正在生成");
    else if(a=="="){
        T_build();

    }else {
        judge_repeat(a);
    }
}

var date=new Date();
var day_a=date.getDay();
day_a="周"+convertToChinese(day_a);
var c=date.getMonth()+1;
var a=c+"月"+date.getDate()+"日 "+day_a;
document.getElementById("top_time1").innerHTML=a;

//把1、2、3转换为一、二、三
function convertToChinese(num){
    var N = [
        "日", "一", "二", "三", "四", "五", "六", "七", "八", "九"
    ];
    var str = num.toString();
    var len = num.toString().length;
    var C_Num = [];
    for(var i = 0; i < len; i++){
        C_Num.push(N[str.charAt(i)]);
    }
    return C_Num.join('');
}

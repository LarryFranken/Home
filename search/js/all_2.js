var all_2_htt=1;
function all_2_ht(a) {
    var ass=document.getElementById("all_2_left_1_left_all");

    if(a==1){
      //  alert("you");
        var aa=365*all_2_htt;
        ass.style.marginLeft="-"+aa+"px";
        all_2_htt++;
        if(all_2_htt==5){
            all_2_htt=1;
        }
    }else {
     //   alert("zuo");

        all_2_htt--;
        if(all_2_htt==0){
            all_2_htt=3;
        }
        var aa=365*all_2_htt;
       // alert(all_2_htt);
        ass.style.marginLeft="-"+aa+"px";
    }

}
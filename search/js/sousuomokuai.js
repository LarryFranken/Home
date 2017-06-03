function baiduyixia() {
    var a=document.getElementById("shuruk");
    var xll=document.getElementById("top_content_top_sousuo_span");
    if(xll.innerHTML=="网页"){
        window.open(" https://www.baidu.com/s?w=" +a.value);
    }else if(xll.innerHTML=="音乐"){
        window.open("http://music.hao123.com/search?key=" +a.value+"+");
    }else if(xll.innerHTML=="视频"){
        window.open("http://v.baidu.com/v?word=" +a.value+"&fr=video&ie=utf-8");
    }else if(xll.innerHTML=="图片"){
        window.open(" http://image.baidu.com/search/index?word=" +a.value+"&tn=baiduimage&ct=201326592&cl=2&lm=-1&ie=utf-8&fm=hao123");
    }else if(xll.innerHTML=="贴吧"){
        window.open("http://tieba.baidu.com/f?kw=" +a.value+"&ie=utf-8&sc=hao123");
    }else if(xll.innerHTML=="知道"){
        window.open("https://zhidao.baidu.com/search?word=" +a.value+"&tn=ikaslist&ct=17&ie=utf-8&sc=hao123&rn=20");
    }else if(xll.innerHTML=="新闻"){
        window.open("http://news.baidu.com/ns?cl=2&rn=20&tn=news&word=" +a.value);
    }else if(xll.innerHTML=="地图"){
        window.open("http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D" +a.value+"%26c%3D1");
    }else {
        window.open(" https://www.baidu.com/s?w=" +a.value);
    }
   // alert(a.value);
}

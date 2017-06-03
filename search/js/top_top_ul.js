var int=self.setInterval("clock()",5000);
var top_top_ul=1;
function clock() {
    var a = document.getElementById("top_content_top_tuiguang");
    if (top_top_ul == 1) {
        a.style.animation = "lnn3_1 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 2) {
        a.style.animation = "lnn3_2 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 3) {
        a.style.animation = "lnn3_3 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 4) {
        a.style.animation = "lnn3_4 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 5) {
        a.style.animation = "lnn3_5 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul = 1;
    }else {
        a.style.animation = "lnn3_4 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    }
}

function top_content_top_tuiguang_qiehuan() {
    var a = document.getElementById("top_content_top_tuiguang");
    if (top_top_ul == 1) {
        a.style.animation = "lnn3_1 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 2) {
        a.style.animation = "lnn3_2 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 3) {
        a.style.animation = "lnn3_3 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 4) {
        a.style.animation = "lnn3_4 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    } else if (top_top_ul == 5) {
        a.style.animation = "lnn3_5 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul = 1;
    }else {
        a.style.animation = "lnn3_4 200ms linear 0s 1 normal";
        a.style.animationFillMode = "both";
        top_top_ul++;
    }
}


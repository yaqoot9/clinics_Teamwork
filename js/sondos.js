/*sondos */
var items= document.getElementsByClassName("item");
var slideItem = document.getElementById("slide-item");
var next = document.getElementById("next");
var prev= document.getElementById("prev");
var slide= document.getElementById("slide");
var close = document.getElementById("close");
var imgs = items.length;

var index =0;
close.addEventListener('click', function(){
    slide.classList.remove('active');
})
prev.addEventListener('click', function(){
    change(index - 1)
})
next.addEventListener('click', function(){
    change(index + 1)
})


for(var i=0; i<imgs;i++){
items[i].addEventListener('click', function(e){
    var ele= e.target.parentNode;
    console.log(ele)
    var curIndex = Array.from(items).indexOf(ele);
    var img=e.target.src;
    slideItem.childNodes[3].setAttribute('src',img);
    slideItem.childNodes[1].innerHTML=`${curIndex+1} /${imgs}`;
    slide.classList.add('active');
    index =curIndex;
})
}

function change(i){
    if(i>=imgs){
    index=0;
}
    else if(i<0){
         index=imgs-1;
    }
    else{
        index=i;
    }
   console.log(index)
    let img =items[i].childNodes[1].getAttribute('src');
    slideItem.childNodes[3].setAttribute('src',img);
    slideItem.childNodes[1].innerHTML=`${index+1} /${imgs}`;
}
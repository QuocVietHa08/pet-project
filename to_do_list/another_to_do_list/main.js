//tao button xoa va them no vao trong the li
var myNodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++){
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
//khi button xoa duoc click thi an phan tu li chua the
var close=document.getElementsByTagName("close");
var i;
for(i=0;i<close.length;i++)
{
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
//them class checked vao the li nao duoc click
var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName ==="LI"){
        ev.target.classList.toggle('checked');
    }
}.false);

//them cong viev moi khi click vao button"them"
function newElement(){
    //tao node li
    var li=document.createElement("li");
    //lay gia tri nguoi dung nhap
    var inputValue=document.getElementById("myInput").nodeValue;
    //tao doi tuong text node
    var t=document.createTextNode(inputValue);
    //gan text node cho the li vua tao
    li.appendChild(t);
    //kiem tra neu text node rong thi canh bao,neu khong thi them vao
    if(inputValue ===''){
        alert("you must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    //xoa gia tri the input
    Document.getElementById("myInput").value="";
    //them button xoa vao the li moi tao
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    //gan lai su kien cho cac button xoa
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}
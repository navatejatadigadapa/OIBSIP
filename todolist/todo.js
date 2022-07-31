var text="";
var tasklist = [];
var btn = document.getElementById("addbtn");
btn.addEventListener("click", add);
var buttons=document.querySelectorAll("btns");

function add() {
    var inp=document.getElementById("input");
    if(inp.value ===""){
        alert("ENTER YOUR TASK");
    }
    else{
        tasklist.push(inp.value);
        inp.value="";
        display();
    }
}
function display(){
    text="";
    for( var i=0;i<tasklist.length;i++)
    {
        var id= "id="+"'"+i+"'";
        text+="<li "+id+"><button class='btns' "+id+" onClick=\"fun(this.id)\">✖</button>&emsp;"+tasklist[i]+"</li>";
        
    }   
    document.getElementById("mylist").innerHTML=text;
}
function fun(clicked_id){
    temp=clicked_id;
    tasklist.splice(temp,1);
    display();
}
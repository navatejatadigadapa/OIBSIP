var string="";
var buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((but)=>{
    but.addEventListener("click",(e)=>{
        var temp=e.target.innerHTML;
        if(temp=="ANS"){
            string=eval(string);
            string=string.toString()
        }
        else if(temp=="🡠"){
            string=string.slice(0,-1);
        }
        else if(temp=="C"){
            string=""
        }
        else{
            string=string+temp;
        }
        document.querySelector("input").value=string;
    })
})
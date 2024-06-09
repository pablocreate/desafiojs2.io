let img = document.querySelector("img")
let existeBorder=false;
img.addEventListener('click',()=>{
    if (existeBorder==false){
    document.querySelector("img").style.border="solid 4px red";
    existeBorder=true   
    }else{
        document.querySelector("img").style.border="";
        existeBorder=false   
    }
    
})
    
    
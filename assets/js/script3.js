let ingresar = document.querySelector('#ingresa')

ingresar.addEventListener('click',()=>{
    let select1= document.querySelector ("#n1").value
    let select2= document.querySelector ("#n2").value
    let select3= document.querySelector ("#n3").value

    let passwork= select1+select2+select3
    if(passwork == "911"){
        document.querySelector("h2").innerHTML=" PASSWORD 1 ESTA CORRECTO"
    }else if(passwork=="714"){
        document.querySelector("h2").innerHTML=" PASSWORD 2 ESTA CORRECTO"
    }else{
        document.querySelector("h2").innerHTML=" PASSWORD INCORRECTO"
    }
  
})

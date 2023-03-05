/*  yaqoot */

$(document).ready(function(){
$('.loader').css('display','none')
$('.spinner').css('display','none')
})


var patients;
var btn=document.getElementById("click");
var Name=document.getElementById("name");
var date=document.getElementById("date");
var time=document.getElementById("time");
var mes=document.getElementById("mes");
var clink=document.getElementById("clinck");
var email=document.getElementById("email");
var phone=document.getElementById("phone")

  patients=[];

btn.onclick=function()  {
 
    var patient={
        Name:Name.value,
        date:date.value,
        time:time.value,
        mes:mes.value,
        email:email.value,
        clink:clink.value,
        phone:phone.value
        };
        
    patients.push(patient);
        localStorage.setItem("patient",JSON.stringify(patient));

       

    Swal.fire({
        position: 'bottom-left',
        icon: 'success',
        title:'تمت العملية بنجاح',
        showConfirmButton: false,
        timer: 2500
      })

    }


  
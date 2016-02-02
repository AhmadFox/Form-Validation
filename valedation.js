function valedation(){
    var a1,a2,a3,b,c,d,e,f,g,m1,m2,m3,m4,m5,m6;
    a1=document.getElementById("f_name").value;
    a2=document.getElementById("m_name").value;
    a3=document.getElementById("l_name").value;
    b=document.getElementById("email").value;
    c=document.getElementById("gender1").checked;
    d=document.getElementById("gender2").checked;
    e=document.getElementById("pass").value;
    f=document.getElementById("c_pass").value;
    g=document.getElementById("agree").checked;
    if (isNaN (a1) && isNaN (a2) && isNaN (a3)){
        m1="";
    }
    else{
        m1="Full Name Is Requard, Pleas Filling Your Fairs,midel and last name.";
    }
    if (isNaN (b)){
        m2="";
    }
    else{
        m2="Your Email Address Are Wrong ! Pleas Chick it.";
    }
    if( c== true || d==true){
        m3="";
    }
    else{
        m3="Gender Is Requareds, Pleas Select Your Gender.";
    }
    if(isNaN (e)){
        m4="";
    }
    else{
        m4="Password Filled Is Requared, Pleas chick Your Password Again";
    }
    if(isNaN (f)){
        m5="";
    }
    else{
        m5="Conferm Password Filled Is Requaierd !";
    }
    if( e != f ){
        alert("Password Is Not Maching!, Pleas Chick Your Password Again");
    }
    if(g==false){
        m6="Pleas checked your agrremant for this acount.";
    }
    else{
        m6="";
    }
    
    document.getElementById("messg1").innerHTML=m1;
    document.getElementById("messg2").innerHTML=m2;
    document.getElementById("messg3").innerHTML=m3;
    document.getElementById("messg4").innerHTML=m4;
    document.getElementById("messg5").innerHTML=m5;
    document.getElementById("messg6").innerHTML=m6;
    
}
/* 
    var gender1=document.getElementById('BMI-male').checked;
    var gender2=document.getElementById('BMI-female').checked;
    var age=document.getElementById('BMI-age').value;
	var height,unitH1,unitH2,weight,unitW1,unitW2;
*/

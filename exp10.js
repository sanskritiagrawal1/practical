let sname, mob, mail;
//name
const checkName=(n)=>{
    if(n=="" || n==null){
        return false;
    }
for(let i=0; i<n.length; i++){
    if(n[i]==""){
        return true;
    }
    
}
return false;
};

//mobile number
const checkMob=(num)=>{
    if(num.length!=10){
        return false;
    }
    return true;
};

//Mail
const checkEmail=(m)=>{
if(m=="" || m==null){
    return false;
}
return m.length>5 && m.indexOf("@")>0;
};

//sumbit
const sumbit=()=>{
sname=document.getElementById("name").value;
mob=document.getElementById("no").value;
mail=document.getElementById("mail").value;

var validateName = checkName(sname);
var validateMob= checkMob(mob);
var validateMail= checkEmail(mail);

if(validateName && validateMob && validateMail){
    alert("Information submitted Successfully!");
}
else{
    alert("Entered Information is not valid, try again");
}
};
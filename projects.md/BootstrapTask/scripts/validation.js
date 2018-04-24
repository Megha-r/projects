
function validateForm() 
{
    console.log('validate form function called');
    var userid = document.getElementById("usr").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var stUserid = trim(userid);
    var stEmail = trim(email);
    var stPhone = trim(phone);

    var atpos = stEmail.indexOf("@");
    var dotpos = stEmail.lastIndexOf(".");
    var phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(stUserid=== " " || stEmail===" " || stPhone===" ") 
    {
        alert("All fields are required");
    
        console.log('some thing blank');
        
    }
    if (stUserid !== '' && stEmail !== '' && stPhone !== '')
     {
       
           if (atpos<1 || dotpos<atpos+2 || dotpos+2>=stEmail.length) 
           {
            alert("Not a valid e-mail address");
           }
        
            if (stPhone.length == 10 && stPhone.match(phoneReg))
            {
                alert("form submitted")
            }
          
            else {
                alert("The Contact No. must be at least 10 digit long and having no characters");
                 }

        }
        
    
   alert("All fields are required");
   
 return false;
}   
    function trim(value) {
        return value.replace(/^\s+|\s+$/g,"");
    }

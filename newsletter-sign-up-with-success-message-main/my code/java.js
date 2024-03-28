$(document).ready(function () {
    
    $("input").focus(function(){
        this.style = "border-color: hsl(0, 0%, 0%);";

    })
    $("input").blur(function(){
        this.style = "border-color: hsl(231, 7%, 60%);";

    })
    function ValidateEmail() {
        let mail = document.getElementById("inp").value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
})

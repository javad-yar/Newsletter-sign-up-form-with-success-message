$(document).ready(function () {
    
    $("input").focus(function(){
        this.style = "border-color: hsl(0, 0%, 0%);";

    })
    $("input").blur(function(){
        this.style = "border-color: hsl(231, 7%, 60%);";

    })

    $("#mybtn").click(function() {
        var email = $("#inp").val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)){
            $("#error-message").text("valid email address!");

        }
        else{
            $("#error-message").text("email address not valid!");
            alert("not valid")
            $("#inp").style = "background-color: red"
            $("#inp").style = "border-color: rgb(190, 34, 34);"

        };
    
    });

    
})

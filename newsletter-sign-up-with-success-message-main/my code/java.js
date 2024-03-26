$(document).ready(function () {
    
    $("input").focus(function(){
        this.style = "border-color: hsl(0, 0%, 0%);";

    })
    $("input").blur(function(){
        this.style = "border-color: hsl(231, 7%, 60%);";

    })
})

$(document).ready(function() {

    onload = function() {
        alert("Note: Dark Mode is available in the settings in the top right of the page.");
    }

    $("#ddlModeChangeItem").click(function() {
        $("#darkModeSwitch").click();
    })

    $("#darkModeSwitch").change(function(e) {
        $(".bg-light, .bg-dark").toggleClass("bg-dark bg-light");
        $(".btn-light, .btn-secondary").toggleClass("btn-secondary btn-light");
        if ($("#signUpBtn") || $("#viewAllTopComms")) {
            $("#signUpBtn, #viewAllTopComms").removeClass("btn-secondary");
            $("#signUpBtn, #viewAllTopComms").toggleClass("btn-primary btn-light");
            if ($("#signUpBtn").hasClass("btn-light") && $("#signUpBtn").hasClass("btn-primary"))
                $("#signUpBtn, #viewAllTopComms").removeClass("btn-light");
        }
        $(".awesome-light, .awesome-dark").toggleClass("awesome-dark awesome-light");
        $(".text-light, .text-dark").toggleClass("text-dark text-light");
        $(".border-light, .border-dark").toggleClass("border-light border-dark");
        if ($("#topLogo").attr("src") == "Images/TopLogoLight.PNG")
            $("#topLogo").attr("src", "Images/TopLogoDark.PNG");
        else
            $("#topLogo").attr("src", "Images/TopLogoLight.PNG");
        $(".btn-outline-primary, .btn-outline-light").toggleClass("btn-outline-primary btn-outline-light");
        $("body").toggleClass("lightBody darkBody");
    })

    $(".dropdown-item").hover(function(event) {
        $(this).css("background-color", "#007BFF");
        $(this).toggleClass("text-dark text-light");
    }, function() {
        $(this).css("background-color", "");
        $(this).toggleClass("text-dark text-light");
    })

    $(".rating").click(function() {
        if ($(this).hasClass("upArrow")) {
            $(this).parent().nextAll().eq(1).children().removeClass("clicked");
            $(this).toggleClass("clicked");
        } else {
            $(this).parent().prevAll().eq(1).children().removeClass("clicked");
            $(this).toggleClass("clicked");
        }
    })
})
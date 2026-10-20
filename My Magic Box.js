$(document).ready(function(){
    $("#bigger").click(function(){
        $(".box").animate({
            width: "+=30",
            height: "+=20"
        });
    })
    $("#smaller").click(function(){
        $(".box").animate({
            width: "-=30",
            height: "-=20"
        });
    })
    $("#color").click(function(){
        $(".box").css("backgroundColor","plum")
    })
    $("#style").click(function(){
        $(".box").toggleClass("change")
    })
    $("#text").click(function(){
        var name= $("#input").val();
        $(".box").text(name)
    })
    $("#item").click(function(){
        $("#addstar").append('<div id="star"><h4>New Star</h4></div>')
    })
    $("#delet").click(function(){
        $("#addstar").empty();
    })
})
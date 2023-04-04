// 1.
$(document).ready(function () {
    console.log("Let’s get ready to party with jQuery!");
});

// 2.
$("img").addClass("image-center");

// 3.
$("p").last().remove();

// 4.
$("h1").css("font-size", Math.floor(Math.random() * 100))

// 5.
$("ol").append($("<li>").text("Hello World!"))

//6.
$("aside").empty().append("<p> Sorry for the list </p>");

//7.
$(".form-control").on('keyup change', function () {
    let r = $(".form-control").eq(0).val();
    let b = $(".form-control").eq(1).val();
    let g = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + r + "," + g + "," + b + ")");
});

// 8.
$("img").on('click', function (e) {
    $(e.target).remove();
});
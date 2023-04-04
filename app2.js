$("form").submit(function (e) {
    e.preventDefault();
    let title = $("#title").val();
    if (title.length < 2) return;
    let rating = $("#rating").val();
    $("#movie-list").append($("<div>")
        .append(`<span>${title} </span>`)
        .append(`Rating: <span>${rating}/10 </span>`)
        .append("<input type = button value = Delete>")
    )
})

$("#movie-list").on("click", "div input", function (e) {
    $(this).parent().remove();
})

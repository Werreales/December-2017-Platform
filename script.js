$(document).ready(_ => {

    $(".progressbar span").each((index, span) => {
        const score  = $(span)[0].style.width
        const target = $(span).parent().prev()
        $(target).text(score)
    })

})
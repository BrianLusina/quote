var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
success: function (response) {
    if (inIframe()) {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote));
    }
    $(".quoteText").animate({
        opacity: 0
    }, 500, function () {
        $(this).animate({
            opacity: 1
        }, 500);
        $('#text').text(r.quote);
    });
    $(".quoteAuthor").animate({
        opacity: 0
    }, 500, function () {
        $(this).animate({
            opacity: 1
        }, 500);
        $('#author').html(r.author);
    });
    var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
        backgroundColor: colors[color]
        , color: colors[color]
    }, 1000);
    $(".button").animate({
        backgroundColor: colors[color]
    }, 1000);
}
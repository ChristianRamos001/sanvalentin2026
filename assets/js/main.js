$(document).ready(function () {

    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {

        $('.envelope').css({ 'animation': 'fall 3s linear 1' });

        $('.envelope').fadeOut(800, function () {

            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.2)' });

            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000,
                step: function (now) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });
        });
    });

});

// CONTADOR ❤️
const loveDate = new Date("2016-12-22T12:28:00");

function updateLoveCounter() {
    const now = new Date();
    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("love-counter").innerHTML =
        `${days} días ${hours}h ${minutes}m ${seconds}s ❤️`;
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

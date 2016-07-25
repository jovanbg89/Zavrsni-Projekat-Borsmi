//Podesavanje funkcije za brzinu automatske promene slike
$('.carousel').carousel({
    interval: 6000 //changes the speed
});

//Funkcija za prikaz i ponovno sakrivanje, sakrivenog diva
$(document).ready(function () {
    $("button").click(function () {
        $(".field").toggle('slow');
    });

//Funkcija za prikaz strelice dole, odnosno gore
    $("button").click(function () {
        $(".dartDown").toggle();
        $(".dartUp").toggle();
    });
});


function getId(a) {
    return document.getElementById(a);
}
var d = new Date();
setInterval(function () {
    var data = new Date();
    var deg_sec = 6 * data.getSeconds();
    var deg_minut = 6 * data.getMinutes();
    var deg_hour = 30 * (data.getHours() % 12);
    getId('arrow_sec').style.transform = 'rotate(' + deg_sec + 'deg)'
    getId('arrow_minut').style.transform = 'rotate(' + deg_minut + 'deg)'
    getId('arrow_hour').style.transform = 'rotate(' + deg_hour + 'deg)'
}, 1000)

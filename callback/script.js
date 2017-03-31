var ellips = document.getElementById("daire")
var image = document.getElementById("img");

ellips.addEventListener("click", function (event) {
    border(boyut);
})

function border(callback) {
    ellips.style.border = "2px solid";
    callback(1000, 600);
}

function boyut(x, y) {
    setTimeout(function () {
        image.style.width = x + 'px';
        image.style.height = y + 'px';
    }, 2000);
}

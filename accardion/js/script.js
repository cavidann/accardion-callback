
var accordion = document.querySelector('.accordion');
var b=document.getElementById("b");
accordion.addEventListener('click', function(event) {
    var item = event.target;
    var parent = item.parentNode.parentNode;
item.nextElementSibling.style.transition = "all 0.5s";
    if (item.nextElementSibling.style.maxHeight) {
        item.nextElementSibling.style.maxHeight =null;
    } else {
        item.nextElementSibling.style.maxHeight = 100;
        for (var i = 0; i < parent.childElementCount; i++) {
            parent.children[i].children[1].style.maxHeight = null;
        }
        item.nextElementSibling.style.maxHeight = 100;
    }
    console.log(item.nextElementSibling.style.maxHeight);
});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

            } else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/9+0.3}s`;
        });

        burger.classList.toggle('toggle');
    });


}
navSlide();

function formFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
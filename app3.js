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


var subjectObject = {
    "View By Complaint Type": {
        "Public Transport": [],
        "Public Hospitals": [],
        "Roads": [],
        "Railways": [],
        "Waste Mangement": []
    },
    "View By Place": {
        "Andhra Pradesh": [],
        "Arunachal Pradesh": [],
        "Assam": [],
        "Bihar": [],
        "Chattisgarh": [],
        "Goa": [],

        "Gujarat": [],
        "Haryana": [],
        "Himachal Pradesh": [],
        "Jammu and Kashmir": [],
        "Jharkhand": [],
        "Karnataka": [],
        "Kerala": [],
        "Madhya Pradesh": [],
        "Maharashtra": [],
        "Manipur": [],
        "Meghalaya": [],
        "Mizoram": [],
        "Nagaland": [],
        "Odisha": [],
        "Punjab": [],
        "Rajasthan": [],
        "Sikkim": [],
        "Tamil Nadu": [],
        "Telangana": [],
        "Tripura": [],
        "Uttarakhand": [],
        "Uttar Pradesh": [],
        "West Bengal": [],
    }
}
window.onload = function () {
    var subjectSel = document.getElementById("view");
    var topicSel = document.getElementById("type");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function () {
        chapterSel.length = 1;
        topicSel.length = 1;
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function () {
        chapterSel.length = 1;
        var z = subjectObject[subjectSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    }
}
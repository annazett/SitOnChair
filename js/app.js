document.addEventListener("DOMContentLoaded", function() {


    //ROZWIJANIE LISTY

    var dropDownContainer = document.querySelector(".drop-down-container");
    var dropList = document.querySelector(".drop-list");
    var topNav = document.querySelector("nav ul li a");

    topNav.addEventListener("mouseenter", function() {
        dropDownContainer.style.display = "block";
        dropList.style.display = "block";
    });
    dropDownContainer.addEventListener("mouseleave", function() {
        dropDownContainer.style.display = "none";
        dropList.style.display = "none";
    });



    //ZMIANA ZDJĘĆ - nie działa;/

    var images = document.querySelector(".images").children;

    for (var i = 1; i < images.length; i++) {
        images[i].classList.add('img').style.display = "none";
    }
    i = 0;
    document.querySelector(".right-arrow").addEventListener("click", function() {
        images[i].classList.add('img').style.display = "none";
        if ((i + 1) > (images.length - 1)) {
            i = 0;
        } else {
            i++;
        }
        images[i].classList.remove('img').style.display = "none";
    });

    document.querySelector(".left-arrow").addEventListener("click", function() {
        images[i].classList.add('img').style.display = "none";
        if (0 > (i - 1)) {
            i = images.length - 1;
        } else i--;
        images[i].classList.remove('img').style.display = "none";
    });


    //NAJEŻDŻANIE NA ZDJĘCIA

    var photosBoxes = document.querySelectorAll(".photos-box");
        for (var i = 0; i < 3; i++) {
            if (photosBoxes[i].querySelector("div") != null) {
                photosBoxes[i].addEventListener("mouseenter", function() {
                    this.querySelector("div").style.display="none";
                });

                photosBoxes[i].addEventListener("mouseleave", function() {
                    this.querySelector("div").style.display="inline-block";
                });
            }
        }
});




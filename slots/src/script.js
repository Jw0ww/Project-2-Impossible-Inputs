var month1 = document.querySelector(".slider1");
month1.addEventListener('click', event => {month1.classList.toggle("paused");
});


var month2 = document.querySelector(".slider2");
month2.addEventListener('click', event => {month2.classList.toggle("paused");
});

var month3 = document.querySelector(".slider3");
month3.addEventListener('click', event => {month3.classList.toggle("paused");
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.block1 >= 0 &&
        rect.block2 >= 0 &&
        rect.block3 <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
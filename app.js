const prev = document.querySelector('.gallery .prev');
const next = document.querySelector('.gallery .next');
const currentImg = document.querySelector('.gallery img');
const imgs = [
    {
        id: 1,
        src: "./imgs/at-home-5000289_640.jpg"
    },
    {
        id: 2,
        src: "./imgs/bread-1851249_640.jpg"
    },
    {
        id: 3,
        src: "./imgs/bread-5916804_640.jpg"
    },
    {
        id: 4,
        src: "./imgs/cafe-5972490_640.jpg"
    }, 
    {
        id: 5,
        src: "./imgs/coffee-3678109_640.jpg"
    },
    {
        id: 6,
        src: "./imgs/fresh-pasta-5154229_640.jpg"
    },
    {
        id: 7,
        src: "./imgs/hall-954558_640.jpg"
    },
    {
        id: 8,
        src: "./imgs/hotel-3728754_640.jpg"
    }, 
    {
        id: 9,
        src: "./imgs/landscape-5218666_640.png"
    },
    {
        id: 10,
        src: "./imgs/pub-2539603_640.jpg"
    },
    {
        id: 11,
        src: "./imgs/tea-3719250_640.jpg"
    }, 
    {
        id: 12,
        src: "./imgs/watercolor-5049980_640.jpg"
    }
];
let count = 0;
let currentSrc = imgs[count].src; 
currentImg.src = currentSrc;
currentImg.id = count;

function prevImg() {
    if (count <= 0) {
        count = imgs.length;
    }
    count -= 1;
    currentSrc = imgs[count].src;
    currentImg.src = currentSrc;
}

function nextImg() {
    if (count >= imgs.length - 1) {
        count = -1;
    }
    count += 1;
    currentSrc = imgs[count].src;
    currentImg.src = currentSrc;
}

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        prevImg();
    } else if (e.keyCode == 39) {
        nextImg();
    } else return;
})
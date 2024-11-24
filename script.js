const next = document.getElementById("next");
const preveas = document.querySelector(".preveas");

const img = document.querySelectorAll(".img");

let current = 0;

next.addEventListener("click", () => {
    current++;
    if (current > img.length - 1) {
        current = 0;
    }
    updateImg();
});

preveas.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = img.length - 1;
    }
    updateImg();
});

function updateImg() {
    img.forEach((image) => {
        image.style.display = "none";
    });
    img[current].style.display = "block";
}

onload = updateImg();
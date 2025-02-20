document.addEventListener("DOMContentLoaded", function () {
    const feelingBoxes = document.querySelectorAll(".feeling-box");

    feelingBoxes.forEach(box => {
        box.addEventListener("click", function () {
            this.style.transform = "rotate(10deg)"; 
            setTimeout(() => {
                this.style.transform = "rotate(0deg)"; 
            }, 300);
        });
    });
});

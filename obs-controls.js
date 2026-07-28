// OBS-like draggable + resizable wrapper
const wrapper = document.getElementById("obs-wrapper");
const handle = document.getElementById("obs-resize");

let drag = false;
let resize = false;
let offsetX = 0;
let offsetY = 0;

wrapper.addEventListener("mousedown", (e) => {
    if (e.target === handle) return;
    drag = true;
    offsetX = e.clientX - wrapper.offsetLeft;
    offsetY = e.clientY - wrapper.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (drag) {
        wrapper.style.left = (e.clientX - offsetX) + "px";
        wrapper.style.top = (e.clientY - offsetY) + "px";
    }
    if (resize) {
        wrapper.style.width = (e.clientX - wrapper.offsetLeft) + "px";
        wrapper.style.height = (e.clientY - wrapper.offsetTop) + "px";
    }
});

document.addEventListener("mouseup", () => {
    drag = false;
    resize = false;
});

handle.addEventListener("mousedown", () => {
    resize = true;
});

const wrapper = document.getElementById("obs-wrapper");

let resize = false;

let startX = 0;
let startY = 0;

let startWidth = 0;
let startHeight = 0;

let startLeft = 0;
let startTop = 0;

let direction = "";


// création des zones de redimensionnement

const sides = [
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
];


sides.forEach(side => {

    const handle = document.createElement("div");

    handle.className = "resize-" + side;

    wrapper.appendChild(handle);


    handle.addEventListener("mousedown", e => {

        e.preventDefault();

        resize = true;

        direction = side;


        startX = e.clientX;
        startY = e.clientY;


        startWidth = wrapper.offsetWidth;
        startHeight = wrapper.offsetHeight;


        startLeft = wrapper.offsetLeft;
        startTop = wrapper.offsetTop;

    });

});



// redimensionnement

document.addEventListener("mousemove", e => {

    if(!resize) return;


    let dx = e.clientX - startX;
    let dy = e.clientY - startY;



    let width = startWidth;
    let height = startHeight;

    let left = startLeft;
    let top = startTop;



    if(direction.includes("right")){

        width = startWidth + dx;

    }


    if(direction.includes("bottom")){

        height = startHeight + dy;

    }


    if(direction.includes("left")){

        width = startWidth - dx;

        left = startLeft + dx;

    }


    if(direction.includes("top")){

        height = startHeight - dy;

        top = startTop + dy;

    }



    if(width > 100){

        wrapper.style.width = width + "px";

    }


    if(height > 100){

        wrapper.style.height = height + "px";

    }


    if(direction.includes("left")){

        wrapper.style.left = left + "px";

    }


    if(direction.includes("top")){

        wrapper.style.top = top + "px";

    }


});



// arrêt

document.addEventListener("mouseup", () => {

    resize = false;

    direction = "";

});

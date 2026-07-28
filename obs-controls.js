const wrapper = document.getElementById("obs-wrapper");

let resizing = false;
let direction = "";

let startX;
let startY;

let startWidth;
let startHeight;

let startLeft;
let startTop;



function startResize(e, dir){

    resizing = true;
    direction = dir;

    startX = e.clientX;
    startY = e.clientY;

    startWidth = wrapper.offsetWidth;
    startHeight = wrapper.offsetHeight;

    startLeft = wrapper.offsetLeft;
    startTop = wrapper.offsetTop;

    e.preventDefault();

}



document.addEventListener("mousemove", (e)=>{


    if(!resizing) return;


    let dx = e.clientX - startX;
    let dy = e.clientY - startY;



    if(direction.includes("right")){

        wrapper.style.width =
        (startWidth + dx) + "px";

    }



    if(direction.includes("bottom")){

        wrapper.style.height =
        (startHeight + dy) + "px";

    }



    if(direction.includes("left")){

        wrapper.style.width =
        (startWidth - dx) + "px";

        wrapper.style.left =
        (startLeft + dx) + "px";

    }



    if(direction.includes("top")){

        wrapper.style.height =
        (startHeight - dy) + "px";

        wrapper.style.top =
        (startTop + dy) + "px";

    }


});



document.addEventListener("mouseup", ()=>{

    resizing=false;

    direction="";

});




// Création des zones de redimensionnement

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



sides.forEach(side=>{


    let handle = document.createElement("div");

    handle.className =
    "resize-handle " + side;


    handle.addEventListener("mousedown",(e)=>{

        startResize(e,side);

    });


    wrapper.appendChild(handle);


});

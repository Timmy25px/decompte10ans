const wrapper = document.getElementById("obs-wrapper");

let isDragging = false;
let isResizing = false;

let resizeDirection = null;

let startMouseX = 0;
let startMouseY = 0;

let startWidth = 0;
let startHeight = 0;

let startLeft = 0;
let startTop = 0;

let offsetX = 0;
let offsetY = 0;



// déplacement

wrapper.addEventListener("mousedown", (e)=>{


    if(e.target.classList.contains("resize-handle")){
        return;
    }


    isDragging = true;


    offsetX = e.clientX - wrapper.offsetLeft;
    offsetY = e.clientY - wrapper.offsetTop;


});




// redimensionnement

document.querySelectorAll(".resize-handle").forEach(handle=>{


    handle.addEventListener("mousedown",(e)=>{


        isResizing = true;


        resizeDirection = handle.dataset.direction;


        startMouseX = e.clientX;
        startMouseY = e.clientY;


        startWidth = wrapper.offsetWidth;
        startHeight = wrapper.offsetHeight;


        startLeft = wrapper.offsetLeft;
        startTop = wrapper.offsetTop;


        e.stopPropagation();

    });


});




// mouvement souris

document.addEventListener("mousemove",(e)=>{


    if(isDragging){


        wrapper.style.left =
        (e.clientX - offsetX)+"px";


        wrapper.style.top =
        (e.clientY - offsetY)+"px";


    }



    if(isResizing){


        let dx = e.clientX - startMouseX;
        let dy = e.clientY - startMouseY;



        if(resizeDirection==="right"){

            wrapper.style.width =
            Math.max(200,startWidth + dx)+"px";

        }


        if(resizeDirection==="left"){


            wrapper.style.width =
            Math.max(200,startWidth - dx)+"px";


            wrapper.style.left =
            (startLeft + dx)+"px";

        }


        if(resizeDirection==="bottom"){


            wrapper.style.height =
            Math.max(100,startHeight + dy)+"px";

        }


        if(resizeDirection==="top"){


            wrapper.style.height =
            Math.max(100,startHeight - dy)+"px";


            wrapper.style.top =
            (startTop + dy)+"px";

        }


    }


});




// arrêt

document.addEventListener("mouseup",()=>{

    isDragging=false;

    isResizing=false;

    resizeDirection=null;

});

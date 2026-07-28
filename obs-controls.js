const wrapper = document.getElementById("obs-wrapper");

let drag = false;
let resize = false;

let resizeSide = "";

let offsetX = 0;
let offsetY = 0;

let startX = 0;
let startY = 0;

let startWidth = 0;
let startHeight = 0;

let startLeft = 0;
let startTop = 0;


// déplacement

wrapper.addEventListener("mousedown", (e)=>{

    if(e.target.classList.contains("resize-handle")) return;

    drag = true;

    offsetX = e.clientX - wrapper.getBoundingClientRect().left;
    offsetY = e.clientY - wrapper.getBoundingClientRect().top;

});



// redimensionnement côtés

document.querySelectorAll(".resize-handle").forEach(handle=>{

    handle.addEventListener("mousedown",(e)=>{

        resize = true;

        resizeSide = handle.dataset.side;


        const rect = wrapper.getBoundingClientRect();


        startX = e.clientX;
        startY = e.clientY;


        startWidth = rect.width;
        startHeight = rect.height;


        startLeft = rect.left;
        startTop = rect.top;


        e.preventDefault();
        e.stopPropagation();

    });

});




// mouvement souris

document.addEventListener("mousemove",(e)=>{


    if(drag){

        wrapper.style.left =
        (e.clientX - offsetX) + "px";


        wrapper.style.top =
        (e.clientY - offsetY) + "px";

    }



    if(resize){


        let dx = e.clientX - startX;
        let dy = e.clientY - startY;



        if(resizeSide === "right"){

            wrapper.style.width =
            Math.max(100,startWidth + dx) + "px";

        }



        if(resizeSide === "bottom"){

            wrapper.style.height =
            Math.max(100,startHeight + dy) + "px";

        }



        if(resizeSide === "left"){


            let newWidth =
            Math.max(100,startWidth - dx);


            wrapper.style.width =
            newWidth + "px";


            wrapper.style.left =
            (startLeft + dx) + "px";

        }



        if(resizeSide === "top"){


            let newHeight =
            Math.max(100,startHeight - dy);


            wrapper.style.height =
            newHeight + "px";


            wrapper.style.top =
            (startTop + dy) + "px";

        }


    }


});





document.addEventListener("mouseup",()=>{

    drag = false;

    resize = false;

    resizeSide = "";

});

const wrapper = document.getElementById("obs-wrapper");


let drag = false;
let resize = false;

let side = "";

let startX;
let startY;

let startWidth;
let startHeight;

let startLeft;
let startTop;

let offsetX;
let offsetY;



// Déplacement souris

wrapper.addEventListener("mousedown", (e)=>{


    if(e.target.classList.contains("resize-handle")){
        return;
    }


    drag = true;


    offsetX =
    e.clientX - wrapper.offsetLeft;


    offsetY =
    e.clientY - wrapper.offsetTop;


});





// Début redimensionnement

document.querySelectorAll(".resize-handle")
.forEach(handle=>{


    handle.addEventListener("mousedown",(e)=>{


        resize = true;


        side = handle.dataset.side;


        startX = e.clientX;
        startY = e.clientY;


        startWidth = wrapper.offsetWidth;
        startHeight = wrapper.offsetHeight;


        startLeft = wrapper.offsetLeft;
        startTop = wrapper.offsetTop;


        e.stopPropagation();


    });


});






document.addEventListener("mousemove",(e)=>{


    if(drag){


        wrapper.style.left =
        (e.clientX - offsetX)+"px";


        wrapper.style.top =
        (e.clientY - offsetY)+"px";


    }





    if(resize){


        let dx = e.clientX - startX;
        let dy = e.clientY - startY;



        if(side==="right"){

            wrapper.style.width =
            startWidth + dx + "px";

        }



        if(side==="left"){

            wrapper.style.width =
            startWidth - dx + "px";


            wrapper.style.left =
            startLeft + dx + "px";

        }



        if(side==="bottom"){

            wrapper.style.height =
            startHeight + dy + "px";

        }



        if(side==="top"){

            wrapper.style.height =
            startHeight - dy + "px";


            wrapper.style.top =
            startTop + dy + "px";

        }


    }


});





document.addEventListener("mouseup",()=>{


    drag=false;

    resize=false;

    side="";


});

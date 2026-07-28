const wrapper = document.getElementById("obs-wrapper");


let dragging = false;
let resizing = false;

let resizeSide = null;


let startMouseX = 0;
let startMouseY = 0;

let startWidth = 0;
let startHeight = 0;

let startLeft = 0;
let startTop = 0;

let offsetX = 0;
let offsetY = 0;



// Position + taille de départ

window.addEventListener("load",()=>{

    wrapper.style.left = "500px";
    wrapper.style.top = "500px";

    wrapper.style.transform = "none";

    wrapper.style.width = "640px";
    wrapper.style.height = "360px";

});





// Déplacement

wrapper.addEventListener("mousedown",(e)=>{


    if(e.target.classList.contains("resize-handle")){
        return;
    }


    dragging = true;


    offsetX =
    e.clientX - wrapper.offsetLeft;


    offsetY =
    e.clientY - wrapper.offsetTop;


});







// Redimensionnement

document.querySelectorAll(".resize-handle")
.forEach(handle=>{


    handle.addEventListener("mousedown",(e)=>{


        resizing = true;


        resizeSide =
        handle.dataset.side;



        startMouseX = e.clientX;
        startMouseY = e.clientY;


        startWidth = wrapper.offsetWidth;
        startHeight = wrapper.offsetHeight;


        startLeft = wrapper.offsetLeft;
        startTop = wrapper.offsetTop;


        e.preventDefault();

        e.stopPropagation();


    });


});







document.addEventListener("mousemove",(e)=>{


    if(dragging){


        wrapper.style.left =
        (e.clientX - offsetX)+"px";


        wrapper.style.top =
        (e.clientY - offsetY)+"px";


    }




    if(resizing){


        let dx =
        e.clientX - startMouseX;


        let dy =
        e.clientY - startMouseY;




        if(resizeSide==="right"){

            wrapper.style.width =
            startWidth + dx + "px";

        }



        if(resizeSide==="left"){


            wrapper.style.width =
            startWidth - dx + "px";


            wrapper.style.left =
            startLeft + dx + "px";


        }




        if(resizeSide==="bottom"){

            wrapper.style.height =
            startHeight + dy + "px";


        }




        if(resizeSide==="top"){


            wrapper.style.height =
            startHeight - dy + "px";


            wrapper.style.top =
            startTop + dy + "px";


        }



    }



});







// arrêt complet du contrôle

document.addEventListener("mouseup",()=>{


    dragging = false;

    resizing = false;

    resizeSide = null;


});

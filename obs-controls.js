const wrapper = document.getElementById("obs-wrapper");

let drag = false;
let resize = false;

let resizeSide = null;

let offsetX = 0;
let offsetY = 0;

let startX = 0;
let startY = 0;

let startWidth = 0;
let startHeight = 0;

let startLeft = 0;
let startTop = 0;



// Position de départ
window.addEventListener("load",()=>{

    wrapper.style.left = "500px";
    wrapper.style.top = "500px";
    wrapper.style.transform = "none";

});



// Déplacement uniquement si on clique dans le contenu

wrapper.addEventListener("mousedown",(e)=>{


    // si on touche une bordure -> pas de déplacement
    if(e.target.classList.contains("resize-handle")){
        return;
    }


    drag = true;


    offsetX = e.clientX - wrapper.offsetLeft;
    offsetY = e.clientY - wrapper.offsetTop;


    e.preventDefault();


});





// Redimensionnement

document.querySelectorAll(".resize-handle")
.forEach(handle=>{


    handle.addEventListener("mousedown",(e)=>{


        resize = true;


        resizeSide = handle.dataset.side;


        startX = e.clientX;
        startY = e.clientY;


        startWidth = wrapper.offsetWidth;
        startHeight = wrapper.offsetHeight;


        startLeft = wrapper.offsetLeft;
        startTop = wrapper.offsetTop;


        e.preventDefault();
        e.stopPropagation();


    });


});





document.addEventListener("mousemove",(e)=>{


    if(drag){


        wrapper.style.left =
        (e.clientX - offsetX) + "px";


        wrapper.style.top =
        (e.clientY - offsetY) + "px";


        return;

    }




    if(resize){


        let dx = e.clientX - startX;
        let dy = e.clientY - startY;



        switch(resizeSide){


            case "right":

                wrapper.style.width =
                startWidth + dx + "px";

                break;



            case "left":

                wrapper.style.width =
                startWidth - dx + "px";

                wrapper.style.left =
                startLeft + dx + "px";

                break;



            case "bottom":

                wrapper.style.height =
                startHeight + dy + "px";

                break;



            case "top":

                wrapper.style.height =
                startHeight - dy + "px";

                wrapper.style.top =
                startTop + dy + "px";

                break;


        }


    }


});





document.addEventListener("mouseup",()=>{


    drag = false;

    resize = false;

    resizeSide = null;


});

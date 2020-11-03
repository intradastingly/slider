window.onload = main;
//window.addEventListener('load', main); 

/** Starts main program */
function main(){
    startSlideShowAnimation();
}

function startSlideShowAnimation(){
    setInterval(changeActiveImage, 2000);
    
}

function changeActiveImage(){
    const images = document.querySelectorAll('.container > img');
    console.log(images);
    for(let i = 0;i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');
            //1. take away show 

            let nextIndex = i + 1;
            if (nextIndex >= images.length){
                nextIndex = 0;
            }
            images[nextIndex].classList.add('show');
            //2. add show to next index

            break;
        }
    }
}
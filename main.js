window.onload = main;
//window.addEventListener('load', main); 

/** Starts main program */
function main(){
    startSlideShowAnimation();
}

/** starts the animation with set interval */
function startSlideShowAnimation(){
    setInterval(changeActiveImage, 2000);
    
}

/** iterates through images and applies class for opacity */
function changeActiveImage(){
    const images = document.querySelectorAll('.container > img');
    console.log(images);
    for(let i = 0;i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');

            //makes sure that we go back to zero when index passes images length. 
            let nextIndex = i + 1;
            if (nextIndex >= images.length){
                nextIndex = 0;
            }
            images[nextIndex].classList.add('show');
            break;
        }
    }
}
window.addEventListener('DOMContentLoaded', ()=>{

    window.setInterval(()=>{
        document.querySelectorAll('*').forEach(element=>{
            element.style.filter = "grayscale(100%)";
        });
    }, 1);
  
    window.setInterval(()=>{
        if ( document.querySelector('img') ) {
            document.querySelectorAll('img').forEach(image=>{
                image.remove();
            });
        };
    }, 1);

window.setInterval(()=>{
    if ( document.querySelector('audio') ) {
        document.querySelectorAll('audio').forEach(audio=>{
            audio.pause();
            audio.currentTime = 0;
            audio.remove();
        });
    };
}, 1);

    window.setInterval(()=>{
        if ( document.querySelector('video') ) {
            document.querySelectorAll('video').forEach(video=>{
                video.pause();
                video.remove();
            });
        };
    }, 1);

});

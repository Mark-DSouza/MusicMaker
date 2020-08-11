window.addEventListener('load', () => {
    // Selectors
    sounds = document.querySelectorAll('.sound');
    pads = document.querySelectorAll('.pads div');
    // colours = [
    //     '#60d394', 
    //     '#d36060', 
    //     '#c060d3', 
    //     '#d3d160', 
    //     '#6860d3', 
    //     '#60b2d3'
    // ]

    // Event Listeners
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });



    // Functions
})



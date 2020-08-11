window.addEventListener('load', () => {


    // ************Selectors************
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visuals = document.querySelector('.visuals');
    

    // ************Constants************
    const colours = [
        '#60d394', 
        '#d36060', 
        '#c060d3', 
        '#d3d160', 
        '#6860d3', 
        '#60b2d3'
    ];


    // ************Event Listeners************

    // Adding an event listener to each pad which 
    // contains an <audio> element, 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });

    });

    
    // ************Functions************

    // Function that creates the bubble and adds
    // the animation
    function createBubble(index) {
        const bubble = document.createElement('div');
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visuals.removeChild(this);
        });
    }
})



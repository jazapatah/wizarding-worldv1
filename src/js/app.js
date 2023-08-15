// button scroll to top
// control of the button is obtained by means of the id
let myButton = document.getElementById('scrollTop')

// parameters are defined for the button to appear after scrolling above a certain value
window.onscroll = function() {
    scrollFunction()
}

let scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none';
    }
}

// function for the button to go to the top of the page
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
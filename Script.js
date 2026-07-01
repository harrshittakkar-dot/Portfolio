// ================================
// Portfolio JavaScript
// ================================

// Smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});

// Hero Fade Animation

window.addEventListener('load',()=>{

    document.querySelector('.hero').style.opacity="1";

    document.querySelector('.hero').style.transform="translateY(0)";

});

// Typing Effect

const text="Data Analyst | SQL | Python | Tableau | Power BI";

let i=0;

function typing(){

    if(i<text.length){

        document.getElementById("typing").innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,70);

    }

}

typing();
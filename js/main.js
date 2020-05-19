$(document).ready(function(){
   $('#discord-container').on("mouseenter", function(){
       $('#discord-image').addClass("swing");
       document.getElementById('discord-image').addEventListener('animationend', () => {
           $('#discord-image').removeClass("swing");
       });
   });

   /* Code for info circles*/
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    setProgress(50);
});
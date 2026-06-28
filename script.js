/* ==========================================
   PREMIUM BIRTHDAY WEBSITE
   SCRIPT.JS - PART 1
========================================== */

// Elements

const starsContainer = document.getElementById("stars");
const particlesContainer = document.getElementById("particles");
const heartsContainer = document.getElementById("hearts");

const cursorGlow = document.getElementById("cursorGlow");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const message = document.getElementById("message");


// ==========================================
// 250 Animated Stars
// ==========================================

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
    (2+Math.random()*4)+"s";

    star.style.animationDelay=
    Math.random()*5+"s";

    starsContainer.appendChild(star);

}



// ==========================================
// Floating Particles
// ==========================================

for(let i=0;i<70;i++){

    const p=document.createElement("div");

    p.className="particle";

    const s=Math.random()*4+2;

    p.style.width=s+"px";
    p.style.height=s+"px";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
    (10+Math.random()*12)+"s";

    p.style.animationDelay=
    Math.random()*10+"s";

    particlesContainer.appendChild(p);

}



// ==========================================
// Mouse Glow
// ==========================================

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

});




// ==========================================
// Music Button
// ==========================================

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸ Pause";

}

else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵 Music";

}

});




// ==========================================
// Typewriter Effect
// ==========================================

const originalText=message.innerHTML;

message.innerHTML="";

let index=0;

function typing(){

if(index<originalText.length){

message.innerHTML+=originalText.charAt(index);

index++;

setTimeout(typing,22);

}

}

window.onload=()=>{

setTimeout(typing,1000);

};

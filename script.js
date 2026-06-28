/* ===================================
   PREMIUM BIRTHDAY WEBSITE
   PART 1
=================================== */

// Elements

const particles = document.getElementById("particles");
const hearts = document.getElementById("hearts");
const cursor = document.querySelector(".cursor-glow");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");

// ================================
// TYPEWRITER EFFECT
// ================================

const originalMessage = message.innerHTML;

message.innerHTML = "";

let index = 0;

function typeEffect(){

    if(index < originalMessage.length){

        message.innerHTML += originalMessage.charAt(index);

        index++;

        setTimeout(typeEffect,22);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeEffect,900);

});


// ================================
// MUSIC BUTTON
// ================================

let playing=false;

musicBtn.onclick=()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;

    }

};


// ================================
// MOUSE GLOW
// ================================

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});


// ================================
// TITLE FLOAT
// ================================

setInterval(()=>{

title.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:2500,

iterations:1

});

},2600);
/* ===================================
   PART 2
   STARS + GALAXY BACKGROUND
=================================== */

// Create 250 Stars

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.animationDuration=
    (Math.random()*4+2)+"s";

    star.style.animationDelay=
    (Math.random()*5)+"s";

    particles.appendChild(star);

}



// ===========================
// Shooting Stars
// ===========================

function shootingStar(){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="180px";

    star.style.height="2px";

    star.style.background=
    "linear-gradient(90deg,#ffffff,#00e5ff,transparent)";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    star.style.transform="rotate(-35deg)";

    star.style.pointerEvents="none";

    star.style.zIndex="0";

    star.style.opacity=".9";

    document.body.appendChild(star);

    star.animate([

        {

            transform:"translate(0,0) rotate(-35deg)",

            opacity:1

        },

        {

            transform:"translate(-800px,450px) rotate(-35deg)",

            opacity:0

        }

    ],{

        duration:1600,

        easing:"ease-out"

    });

    setTimeout(()=>{

        star.remove();

    },1700);

}

setInterval(shootingStar,5000);




// ===========================
// Background Pulse
// ===========================

setInterval(()=>{

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.08)"

},

{

filter:"brightness(1)"

}

],{

duration:4000

});

},4200);




// ===========================
// Card Floating Animation
// ===========================

const card=document.querySelector(".glass-card");

setInterval(()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:1

});

},3600);




// ===========================
// Neon Glow Pulse
// ===========================

setInterval(()=>{

card.style.boxShadow=

"0 0 40px rgba(0,229,255,.35),0 0 90px rgba(0,229,255,.18)";

setTimeout(()=>{

card.style.boxShadow=

"0 0 25px rgba(0,229,255,.18),0 0 60px rgba(0,229,255,.12)";

},900);

},2200);
/* ===================================
   PART 3
   HEARTS + PETALS + SPARKS
=================================== */

// ❤️ Floating Hearts

const heartIcons = [
"❤️","🤍","💖","💕","💘"
];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
    heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
    (18 + Math.random()*24) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,450);




// ===============================
// ✨ Spark Particles
// ===============================

function spark(){

    const s = document.createElement("div");

    s.style.position="fixed";

    s.style.width="4px";

    s.style.height="4px";

    s.style.borderRadius="50%";

    s.style.background="#00e5ff";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.boxShadow="0 0 12px #00e5ff";

    s.style.pointerEvents="none";

    s.style.zIndex="0";

    document.body.appendChild(s);

    s.animate([

        {
            opacity:0;
            transform:"scale(.4)";
        },

        {
            opacity:1;
            transform:"scale(2)";
        },

        {
            opacity:0;
            transform:"scale(.2)";
        }

    ],{

        duration:2200

    });

    setTimeout(()=>{

        s.remove();

    },2200);

}

setInterval(spark,180);




// ===============================
// 🌸 Sakura Petals
// ===============================

const petals = ["🌸","❀","✿"];

function sakura(){

    const p = document.createElement("div");

    p.innerHTML =
    petals[Math.floor(Math.random()*petals.length)];

    p.style.position="fixed";

    p.style.left=Math.random()*100+"vw";

    p.style.top="-30px";

    p.style.fontSize=
    (18+Math.random()*12)+"px";

    p.style.opacity=".85";

    p.style.pointerEvents="none";

    p.style.zIndex="1";

    document.body.appendChild(p);

    p.animate([

        {
            transform:"translate(0,0) rotate(0deg)";
        },

        {
            transform:"translate(-80px,45vh) rotate(180deg)";
        },

        {
            transform:"translate(120px,110vh) rotate(360deg)";
        }

    ],{

        duration:9000,

        easing:"linear"

    });

    setTimeout(()=>{

        p.remove();

    },9000);

}

setInterval(sakura,900);




// ===============================
// 💖 Button Burst
// ===============================

wishBtn.addEventListener("click",()=>{

    for(let i=0;i<25;i++){

        const b=document.createElement("div");

        b.innerHTML="💖";

        b.style.position="fixed";

        b.style.left=(window.innerWidth/2)+"px";

        b.style.top=(window.innerHeight/2)+"px";

        b.style.fontSize="24px";

        b.style.pointerEvents="none";

        document.body.appendChild(b);

        const x=(Math.random()-0.5)*700;

        const y=(Math.random()-0.5)*700;

        b.animate([

            {
                transform:"translate(0,0) scale(.5)";
                opacity:1;
            },

            {
                transform:`translate(${x}px,${y}px) scale(1.8)`;
                opacity:0;
            }

        ],{

            duration:1600,

            easing:"ease-out"

        });

        setTimeout(()=>{

            b.remove();

        },1700);

    }

});
/* ===================================
   PART 4
   FIREWORKS + FINAL EFFECTS
=================================== */

const wishBtn = document.getElementById("wishBtn");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let fireworks=[];


// ===================================
// FIREWORK CLASS
// ===================================

class Firework{

    constructor(){

        this.x=Math.random()*canvas.width;

        this.y=Math.random()*canvas.height/2;

        this.particles=[];

        for(let i=0;i<45;i++){

            this.particles.push({

                x:this.x,

                y:this.y,

                angle:(Math.PI*2/45)*i,

                speed:Math.random()*4+2,

                alpha:1

            });

        }

    }

    draw(){

        this.particles.forEach(p=>{

            p.x+=Math.cos(p.angle)*p.speed;

            p.y+=Math.sin(p.angle)*p.speed;

            p.alpha-=0.015;

            ctx.beginPath();

            ctx.arc(p.x,p.y,2,0,Math.PI*2);

            ctx.fillStyle=`rgba(0,229,255,${p.alpha})`;

            ctx.fill();

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    fireworks.forEach((fw,index)=>{

        fw.draw();

        if(fw.particles[0].alpha<=0){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(()=>{

    fireworks.push(new Firework());

},1800);


// ===================================
// BUTTON EFFECT
// ===================================

wishBtn.addEventListener("click",()=>{

    fireworks.push(new Firework());

    fireworks.push(new Firework());

    fireworks.push(new Firework());

    wishBtn.innerHTML="❤️ Stay Happy ❤️";

});


// ===================================
// TITLE GLOW PULSE
// ===================================

setInterval(()=>{

title.animate([

{

letterSpacing:"2px"

},

{

letterSpacing:"8px"

},

{

letterSpacing:"2px"

}

],{

duration:1800

});

},3500);



// ===================================
// RANDOM BACKGROUND FLASH
// ===================================

setInterval(()=>{

document.body.animate([

{

opacity:1

},

{

opacity:.98

},

{

opacity:1

}

],{

duration:600

});

},7000);



// ===================================
// AUTO END MESSAGE
// ===================================

setTimeout(()=>{

console.log("Happy Birthday ❤️");

},12000);

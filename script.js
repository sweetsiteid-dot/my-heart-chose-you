function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "1225DR"){

document.getElementById("passwordScreen")
.style.display="none";

document.getElementById("websiteContent")
.style.display="block";

}else{

alert("Wrong Password 🖤");

}

}

function openGift(){

const music =
document.getElementById("music");

music.currentTime = 0;

music.play();

document.getElementById("giftSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* FLOATING HEARTS */

function createHeart(){

const heart =
document.createElement("div");

const hearts = [
"🖤",
"🤍"
];

heart.innerHTML =
hearts[
Math.floor(
Math.random()*hearts.length
)
];

heart.style.position="absolute";

heart.style.left=
Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=
(Math.random()*18+15)+"px";

heart.style.opacity=
Math.random()*0.7+0.3;

heart.style.animation=
`fall ${Math.random()*4+6}s linear`;

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,450);

/* ANIMATION STYLE */

const style =
document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{
transform:
translateY(0)
rotate(0deg);
opacity:1;
}

100%{
transform:
translateY(110vh)
rotate(360deg);
opacity:0;
}

}

.fade-in{

opacity:0;

transform:
translateY(40px);

transition:
all 1s ease;
}

.fade-in.show{

opacity:1;

transform:
translateY(0);
}

`;

document.head.appendChild(style);

/* SCROLL REVEAL */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.polaroid,.reason-card,.final-section,.ending"
).forEach(el=>{

el.classList.add("fade-in");

observer.observe(el);

});

/* POLAROID EFFECT */

const polaroids =
document.querySelectorAll(".polaroid");

polaroids.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=
"translateY(-10px) scale(1.05) rotate(0deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* HERO PARALLAX */

window.addEventListener("scroll",()=>{

const hero =
document.querySelector(".hero");

const scroll =
window.pageYOffset;

hero.style.transform =
`translateY(${scroll*0.15}px)`;

});

/* CONFESSION QUOTES */

const quotes=[

"Out of everyone in this world, my heart chose you. 🖤",

"Every day, I find another reason to love you. 🤍",

"You feel like home to me. 🏠",

"I never planned to fall for you, but I did. 🖤",

"You're my favorite part of every day. 🤍",

"I want to choose you, again and again. 🖤",

"Would you let me love you? 🤍",

"Until I found you. 🎶"

];

const quoteElement =
document.createElement("div");

quoteElement.className=
"floating-quote";

quoteElement.innerText=
quotes[0];

document.body.appendChild(
quoteElement
);

let currentQuote=0;

setInterval(()=>{

currentQuote++;

if(currentQuote >= quotes.length){

currentQuote=0;

}

quoteElement.style.opacity=0;

setTimeout(()=>{

quoteElement.innerText=
quotes[currentQuote];

quoteElement.style.opacity=1;

},500);

},5000);

/* QUOTE STYLE */

const quoteStyle=
document.createElement("style");

quoteStyle.innerHTML=`

.floating-quote{

position:fixed;

bottom:25px;

left:50%;

transform:translateX(-50%);

background:
rgba(255,255,255,.05);

backdrop-filter:blur(15px);

border:
1px solid rgba(255,255,255,.08);

padding:12px 24px;

border-radius:999px;

font-size:14px;

color:white;

z-index:999;

transition:.5s;

box-shadow:
0 10px 25px rgba(0,0,0,.25);

}

@media(max-width:768px){

.floating-quote{

width:90%;

text-align:center;

font-size:13px;

}

}

`;

document.head.appendChild(
quoteStyle
);

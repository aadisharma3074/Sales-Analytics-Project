/* ============================================
   SMART SALES ANALYTICS SYSTEM
   script.js
============================================ */

// Page Loaded

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

    startCounter();

    animateCards();

});


// ==========================================
// Scroll to Top Button
// ==========================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "⬆";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#0d6efd";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.onscroll = function(){

    if(document.documentElement.scrollTop>200){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

}

scrollBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


// ==========================================
// Navbar Shadow
// ==========================================

window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>20){

        navbar.classList.add("shadow");

    }

    else{

        navbar.classList.remove("shadow");

    }

});


// ==========================================
// Counter Animation
// ==========================================

function startCounter(){

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        counter.innerText="0";

        const update=()=>{

            const target=+counter.getAttribute("data-target");

            const c=+counter.innerText;

            const increment=target/100;

            if(c<target){

                counter.innerText=Math.ceil(c+increment);

                setTimeout(update,20);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}


// ==========================================
// Card Animation
// ==========================================

function animateCards(){

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition="0.6s";

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        },index*150);

    });

}


// ==========================================
// Toast Notification
// ==========================================

function showToast(message){

    const toast=document.createElement("div");

    toast.innerHTML=message;

    toast.style.position="fixed";

    toast.style.top="20px";

    toast.style.right="20px";

    toast.style.background="#198754";

    toast.style.color="white";

    toast.style.padding="15px 20px";

    toast.style.borderRadius="10px";

    toast.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

    toast.style.zIndex="9999";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },3000);

}


// ==========================================
// Contact Form
// ==========================================

const contactForm=document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(){

showToast("Message Sent Successfully!");

});

}


// ==========================================
// File Upload
// ==========================================

const upload=document.querySelector("input[type='file']");

if(upload){

upload.addEventListener("change",function(){

showToast("Dataset Selected Successfully");

});

}


// ==========================================
// Prediction Button
// ==========================================

const predictBtn=document.querySelector(".btn-primary");

if(predictBtn){

predictBtn.addEventListener("click",function(){

console.log("Prediction Started...");

});

}


// ==========================================
// Dark Mode
// ==========================================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";

darkBtn.style.left="25px";

darkBtn.style.bottom="25px";

darkBtn.style.width="50px";

darkBtn.style.height="50px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.cursor="pointer";

darkBtn.style.background="#222";

darkBtn.style.color="white";

darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

darkBtn.onclick=function(){

document.body.classList.toggle("bg-dark");

document.body.classList.toggle("text-white");

showToast("Theme Changed");

}
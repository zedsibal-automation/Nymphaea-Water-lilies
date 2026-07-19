/* ==========================================
   NYMPHAEA WATERLILIES
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Elements
    =========================== */

    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".navbar ul");
    const navLinks = document.querySelectorAll(".navbar a");
    const faqItems = document.querySelectorAll(".faq-item");

    /* ===========================
       Mobile Menu
    =========================== */

    if(menuBtn){

        menuBtn.addEventListener("click", ()=>{

            navMenu.classList.toggle("active");

            menuBtn.innerHTML = navMenu.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

    }

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navMenu.classList.remove("active");

            if(menuBtn){

                menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

            }

        });

    });

    /* ===========================
       Sticky Navbar
    =========================== */

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            navbar.style.padding="12px 60px";
            navbar.style.background="rgba(255,255,255,.95)";
            navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

        }

        else{

            navbar.style.padding="18px 60px";
            navbar.style.background="rgba(255,255,255,.75)";
            navbar.style.boxShadow="none";

        }

    });

    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-120;

            if(pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ===========================
       FAQ Accordion
    =========================== */

    faqItems.forEach(item=>{

        const question=item.querySelector(".faq-question");

        question.addEventListener("click",()=>{

            faqItems.forEach(i=>{

                if(i!==item){

                    i.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ===========================
       Fade In Animation
    =========================== */

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(".fade-up").forEach(el=>{

        observer.observe(el);

    });

});
/* ==========================================
Scroll Progress Bar
========================================== */

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});

/* ==========================================
Back To Top
========================================== */

const topBtn=document.createElement("button");

topBtn.id="backTop";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
Parallax Hero
========================================== */

const hero=document.querySelector("#home");

window.addEventListener("scroll",()=>{

let offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.45+"px";

});

/* ==========================================
Counter Animation
========================================== */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.dataset.target;

const c=+counter.innerText;

const increment=target/120;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,15);

}else{

counter.innerText=target;

}

};

update();

});

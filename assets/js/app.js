let cartBtn = document.getElementById("cart-btn");
let menuBtn = document.getElementById("menu-btn");
let menuBox = document.getElementById("menu-box");
let cartBox = document.getElementById("cart-box");
let closeBtns = document.querySelectorAll("#close-btn");
let header = document.querySelector("header");
menuBtn.addEventListener('click',()=>{
        menuBox.classList.toggle("active-menu");
        document.body.classList.toggle("no-scroll");
        header.classList.toggle("p0")
})

cartBtn.addEventListener('click',()=>{
        cartBox.classList.toggle("active-menu");
        document.body.classList.toggle("no-scroll");
        header.classList.toggle("p0")
})

closeBtns.forEach(close=>{

    close.addEventListener('click',()=>{
        menuBox.classList.remove('active-menu');
        header.classList.remove("p0");
        cartBox.classList.remove("active-menu");
        document.body.classList.toggle("no-scroll");

    })
})


gsap.registerPlugin(ScrollTrigger);
let cursor = document.getElementById('cursor')
document.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        top:dets.y,left:dets.x
    })
})

header.addEventListener('mousemove',()=>{
    gsap.to(cursor,{
        onComplete: ()=> {
            // Toggle the 'nav-active' class on the '.header' element
            cursor.classList.toggle('scale2');
           
          },
    })
})

const cursorEvent = ()=>{
    document.querySelector(".ad-reward").addEventListener('mousemove',()=>{
        gsap.to('#cursor',{
            scale:1,duration:2
        })
    })
    document.querySelector(".ad-reward").addEventListener('mouseleave',()=>{
        gsap.to('#cursor',{
            scale:0,duration:2
        })
    })

    let box1 =document.querySelector(".box1");
    let box2 =document.querySelector(".box2");
   
    
        box1.addEventListener('mousemove',()=>{
            gsap.to('#cursor',{
                scale:4,zIndex:2,background:'linear-gradient(121deg, #50EF9A 0%, #82F6B9 31%, #D0FFE6 100%)'
            })
        })
        box1.addEventListener('mouseleave',()=>{
            gsap.to('#cursor',{
                scale:1.5,
            })
        })
        box2.addEventListener('mousemove',()=>{
            gsap.to('#cursor',{
                scale:4,zIndex:2,background:'white'
            })
        })
        box2.addEventListener('mouseleave',()=>{
            gsap.to('#cursor',{
                scale:1.5,
            })
        })
   
}

cursorEvent();

gsap.to('.card',{
    opacity:1,
    yoyo:true,
    filter:'blur(0)',
    duration:2,
    scrollTrigger:{
        trigger:'.whatwe__div',
        start:'top 90%',
        toggleActions: 'restart pause pause pause'
    }
})
gsap.to('.homcta__div',{
    opacity:1,
    yoyo:true,
    filter:'blur(0)',
    duration:1,
    scrollTrigger:{
        trigger:'.homcta',
        start:'top 90%',
        toggleActions: 'restart pause pause pause'
    }
})

// smooth scrolling


const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


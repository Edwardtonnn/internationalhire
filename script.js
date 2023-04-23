

let countryLink = document.querySelectorAll('ul a');

countryLink.forEach(link => {
    link.addEventListener('click',()=>{

        gsap.to('.container-form',{
            
            duration:0.25,
            ease:'power2.out',
            display:'block',
            opacity:1

        })
    })
});

let closeIcon = document.querySelector('span.close');

closeIcon.addEventListener('click',()=>{
    gsap.to('.container-form',{
        opacity:0,        
        duration:0.25,
        ease:'power2.out'
    })
    gsap.to('.container-form',{
        display:'none',        
        duration:0.25,
        
    })
})

gsap.fromTo("h1, p",{
    opacity:0,
    x:20
},
    {
        opacity:1,
        x:0,
    duration:.5,
    ease:'power2.inOut',
    stagger:.1
})
gsap.fromTo(countryLink,{
    opacity:0,
    x:20
},
    {
        opacity:1,
        x:0,
    duration:.5,
    ease:'power2.inOut',
    stagger:.1
})
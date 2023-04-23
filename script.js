

let countryLink = document.querySelectorAll('ul a');
let countryTitle = document.getElementsByClassName('titleText');

function resetInput(){
    setTimeout(()=>{
        document.querySelectorAll("form input, form textarea").forEach((input)=>{
            input.value = "";
        })

    }, 2000)
}



countryLink.forEach(link => {
    link.addEventListener('click',()=>{

        gsap.to('.container-form',{
            
            duration:0.25,
            ease:'power2.out',
            display:'block',
            opacity:1

        })
    })

    link.addEventListener('click',()=>{

       countryTitle[0].innerText = link.innerText;
    })
});

let closeIcon = document.querySelector('span.close');
let submitBtn = document.querySelector('button');

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    gsap.to('.container-form',{
        opacity:0,        
        duration:0.25,
        ease:'power2.out'
    })
    gsap.to('.container-form',{
        display:'none',        
        duration:0.25,
        
    })

    resetInput();
})
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

    resetInput();
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

// Changes bg 
const containerMain = document.querySelector('.container-main');
const listItemElements = document.querySelectorAll('ul li');

listItemElements.forEach(li => {
  li.addEventListener('mouseenter', () => {
    const bgImage = li.getAttribute('data-bg');

    // Fade in the new background image
    gsap.to(containerMain, {
      background: `url(${bgImage}) no-repeat center center`,
      backgroundSize: 'cover',
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: 1
    });
  });

  li.addEventListener('mouseleave', () => {
    // Reset the background when the user stops hovering
    gsap.to(containerMain, {
      background: '',
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: 1
    });
  });
});

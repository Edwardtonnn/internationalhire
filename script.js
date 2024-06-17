

let countryLink = document.querySelectorAll('ul a');
let countryTitle = document.getElementsByClassName('titleText');

function resetInput() {
  setTimeout(() => {
    document.querySelectorAll("form input, form textarea").forEach((input) => {
      input.value = "";
    })

  }, 2000)
}



countryLink.forEach(link => {
  link.addEventListener('click', () => {

    gsap.to('.container-form', {
      duration: 0.25,
      ease: 'power2.out',
      display: 'block',
      opacity: 1,
      onStart: ()=> {
        containerForm.classList.remove('d-none');
      }
    })
  })

  link.addEventListener('click', () => {

    countryTitle[0].innerText = link.innerText;
  })
});

let closeIcon = document.querySelector('span.close-button');
let submitBtn = document.querySelector('button');
let containerThankYou = document.querySelector('.container-thank-you');

let form = document.querySelector('#myForm');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Check form validity
  if (form.checkValidity()) {
    form.classList.add('was-validated');

    gsap.to(containerForm, {
      y: -100,
      duration: 0.25,
      onStart: () => {
        containerForm.classList.add('d-none');
      }
    });

    gsap.to(containerThankYou, {
      delay: 0.24,
      display: 'block',
      duration: 0.25,
      onStart: () => {
        containerThankYou.classList.remove('d-none');
      }
    });

    resetInput();
  } else {
    form.classList.add('was-validated');
  }
});

function resetInput() {
  form.reset();
  form.classList.remove('was-validated');
}


closeIcon.addEventListener('click', () => {
 containerForm.classList.add('d-none');
 containerCountryList.classList.remove('d-none');
 containerInformation.classList.remove('background-dark');
 gsap.to(containerSelect, {
  background: `none`,
  duration: 0.5,
  ease: 'power2.inOut'
});

 
})

gsap.fromTo("h1, p", {
  opacity: 0,
  x: 20
},
  {
    opacity: 1,
    x: 0,
    duration: .5,
    ease: 'power2.inOut',
    stagger: .1
  })
gsap.fromTo(countryLink, {
  opacity: 0,
  x: 20
},
  {
    opacity: 1,
    x: 0,
    duration: .5,
    ease: 'power2.inOut',
    stagger: .1
  })

// Changes bg 
const containerMain = document.querySelector('.container-main');
const containerForm = document.querySelector('.form-container');
const containerCountryList = document.querySelector('.country-list');
const containerSelect = document.querySelector('.selectedImage');
const listItemElements = document.querySelectorAll('ul li');
const containerInformation = document.querySelector('.container-information');

listItemElements.forEach(li => {
  li.addEventListener('mouseenter', () => {

    const bgImage = li.getAttribute('data-bg');

    // Fade in the new background image
    gsap.fromTo(containerMain,
      {
        opacity:0,
      },
      {
      background: `black url(${bgImage}) no-repeat center center`,
      backgroundSize: 'cover',
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: 1,
      width: "100vw",
    });
    

    li.addEventListener('click', () => {
      
      const bgImage = li.getAttribute('data-bg');

      // Fade in the new background image
      gsap.to(containerSelect, {
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: 'contain',
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1
      });

      containerForm.classList.remove('d-none');
      containerInformation.classList.add('background-dark');
      containerCountryList.classList.add('d-none');
    })



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

let thankYouCloseBtn = document.querySelector('span.thank-you-close');
let thankYouContainer = document.querySelector('.container-thank-you');

thankYouCloseBtn.addEventListener('click', ()=>{
  containerInformation.classList.remove('background-dark');
  thankYouContainer.classList.add('d-none');
  gsap.to(containerCountryList, {
    background: '',
    duration: 0.5,
    ease: 'power2.inOut',
    opacity: 1,
    onStart : ()=> {
      containerCountryList.classList.remove('d-none');
      containerSelect.style.background = '';

    }
  });

})


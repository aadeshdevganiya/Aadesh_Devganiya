new WOW().init();

let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function(){
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

cursorScale.forEach(link => {
  link.addEventListener('mousemove', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
})


$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Front end developer","Fresher", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-3", {
      strings: ["Connect with me on :)"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Front end developer","Fresher" , "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

});


let ripples = document.createElement("span");
let cleartimeout;

//if want this effect when clicked then just add click insted of mouseover event
rippleBtn.addEventListener("mouseover", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  cleartimeout = setTimeout(() => {
    ripples.remove();
  }, 1000);
});



const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_bo5gc0f';
   const templateID = 'template_bxt1t6l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});






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

var preogressbar = document.getElementById("preogressbar")
        var percent = document.getElementById("percent")

        var totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function () {
            var progress = (window.pageYOffset / totalHeight) * 100;
            preogressbar.style.height = progress + "%";
            percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
        }
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                500: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });

        //  pre loader js  
        var loader = document.getElementById("preloader");

        window.addEventListener("load", function () {
            loader.style.display = "none";
        })

const btn = document.getElementById('sendMessage');

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Disable the button while the email is being sent
  btn.querySelector("span").innerText = 'Sending...';

  // Your EmailJS service ID and template ID (Replace with actual IDs)
  const serviceID = 'service_bo5gc0f'; // Your Service ID
  const templateID = 'template_bxt1t6l'; // Your Template ID

  // Send the form data using EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.querySelector("span").innerText = 'Send Email'; // Re-enable button
      alert('Sent!'); // Show success message
    }, (err) => {
      btn.querySelector("span").innerText = 'Send Email'; // Re-enable button
      alert('Failed to send email: ' + JSON.stringify(err)); // Show error message
    });
});






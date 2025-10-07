document.addEventListener("DOMContentLoaded",()=>{
    const heroText = document.querySelector(".hero-content h1");
    heroText.style.opacity= "0";
    heroText.style.transition = "1s ease";
    
    setTimeout(() => {
        heroText.style.opacity = "1"
    }, 300);

});

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting ViruTech Academy! we'll get back to you soon.");
    this.requestFullscreen();

}
);
// Initialize EmailJS
(function() {
    emailjs.init("YLPZX2Ky5Z9gdv3Hr"); // ✅ Your Public Key
  })();
  
  // Handle contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Replace with your actual EmailJS Service ID and Template ID
    const serviceID = "service_k468vpe"; 
    const templateID = "_ejs-test-mail-service_"; 
  
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: document.getElementById('VirtuTech Academy support').value,
      from_email: document.getElementById('info@virtutechacademy.com').value,
      message: document.getElementById('message').value
    })
    .then(function() {
      alert('✅ Message sent successfully! Thank you for contacting VirtuTech Academy.');
      document.getElementById('contactForm').reset();
    }, function(error) {
      alert('❌ Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
  });

//scroll reveal animation
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    for(let i =0; 1 < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementsTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 120;
    
        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll',revealElements)
// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
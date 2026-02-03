
    // Function to toggle the sidebar on small screens
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }

    // Function to send form data via WhatsApp
    function sendWhatsAppMessage() {
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;

      const text = `Hola, me llamo ${name}. Me interesa el servicio de: ${service}. ${message}. Mi teléfono es: ${phone}`;
      const encodedText = encodeURIComponent(text);
      window.open(`https://api.whatsapp.com/send?phone=584120348988&text=${encodedText}`, '_blank');

      // Reset form
      document.getElementById('contactForm').reset();

      return false;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
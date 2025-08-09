 const text = "Hi, I'm Srilekha, Web Developer 💻";
    let index = 0;
    function type() {
      if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();


    function toggleDarkMode() {
      const body = document.body;
      const toggleBtn = document.getElementById("darkModeToggle");
      body.classList.toggle('dark');

      toggleBtn.textContent = body.classList.contains('dark') ? "🌞" : "🌙";
    }


    const scrollBtn = document.getElementById("scrollBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
   


   
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
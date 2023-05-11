
button1.addEventListener("click", () => {
    document.getElementById("text").textContent ="Button 1 is clicked";
  });

button2.addEventListener("click", () => {
document.getElementById("text").textContent ="Button 2 is clicked";
});

button3.addEventListener("click", () => {
document.getElementById("text").textContent ="Button 3 is clicked";
});

function check() {
    const regex = /^[6-9]\d{9}$/;
    const phone = document.getElementById('phone').value
    const error = document.getElementById('errorText')
    if (!regex.test(phone)) {
      error.style.display = 'block';
      return false;
    } else {
        error.style.display = 'none';
        return true;
    }
  }
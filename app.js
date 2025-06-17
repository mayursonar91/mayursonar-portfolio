// ===== Hero Role Text Animation =====
const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Java Developer",
  "Backend Developer",
  "Problem Solver"
];

let index = 0;
const roleText = document.getElementById("role-text");

function cycleRoleText() {
  roleText.classList.remove("fade-slide");
  void roleText.offsetWidth;
  index = (index + 1) % roles.length;
  roleText.textContent = roles[index];
  roleText.classList.add("fade-slide");
}

setInterval(cycleRoleText, 3000);

// ===== Sidebar Toggle =====
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

menu.addEventListener("click", () => {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// ===== Auto Image Slider for Projects =====
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  let current = 0;

  // Hide all images except first
  images.forEach((img, i) => {
    img.style.display = i === 0 ? 'block' : 'none';
  });

  // Slide every 3.5 sec
  setInterval(() => {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
  }, 3500);
});

// FORM 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            alert("✅ Message sent successfully!");
            form.reset(); // clear input fields
          } else {
            alert("❌ Failed to send message.");
          }
        })
        .catch(error => {
          alert("⚠️ Something went wrong.");
        });
    });
  }
});



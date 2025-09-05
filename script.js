// Elements
const darkToggle = document.getElementById("darkModeToggle");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Dark mode toggle
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Show Register form in modal
showRegister.addEventListener("click", () => {
  modal.style.display = "flex";
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Show Login form in modal
showLogin.addEventListener("click", () => {
  modal.style.display = "flex";
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ------------------ Form Validation ------------------ //

// Register form validation
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("regName");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPassword");

  // Reset errors
  registerForm.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (name.value.length < 3) {
    name.nextElementSibling.textContent = "Name must be at least 3 characters";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    email.nextElementSibling.textContent = "Enter a valid email";
    valid = false;
  }

  if (password.value.length < 8 || !/\d/.test(password.value)) {
    password.nextElementSibling.textContent = "Password must be 8+ chars and contain a number";
    valid = false;
  }

  if (valid) {
    alert("Registration successful ✅");
    modal.style.display = "none";
  }
});

// Login form validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  loginForm.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (email.value.trim() === "") {
    email.nextElementSibling.textContent = "Email is required";
    valid = false;
  }
  if (password.value.trim() === "") {
    password.nextElementSibling.textContent = "Password is required";
    valid = false;
  }

  if (valid) {
    alert("Login successful ✅");
    modal.style.display = "none";
  }
});

const darkToggle = document.getElementById("darkModeToggle");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

showRegister.addEventListener("click", () => {
  modal.style.display = "flex";
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

showLogin.addEventListener("click", () => {
  modal.style.display = "flex";
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("regName");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPassword");

  registerForm
    .querySelectorAll(".error")
    .forEach((el) => (el.textContent = ""));

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
    password.nextElementSibling.textContent =
      "Password must be 8+ chars and contain a number";
    valid = false;
  }

  if (valid) {
    alert("Registration successful ✅");
    modal.style.display = "none";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  loginForm.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

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

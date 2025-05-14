const passIcon = document.getElementById('pass_icon');
const passwordField = document.getElementById('user_pass');

passIcon.addEventListener('click', () => {
  const isPassword = passwordField.type === 'password';
  passwordField.type = isPassword ? 'text' : 'password';
  passIcon.classList.toggle('fa-eye-slash');
  passIcon.classList.toggle('fa-eye');
});
const templateBtn = document.getElementById('templateBtn');
const templateOptions = document.getElementById('templateOptions');
const stylesheetLink = document.querySelector('link[href*="template_"]');

templateBtn.addEventListener('click', () => {
  templateOptions.classList.toggle('d-none');
});

templateOptions.addEventListener('click', (e) => {
  if (e.target.matches('a[data-template]')) {
    e.preventDefault();
    const newTemplate = e.target.getAttribute('data-template');
    if (stylesheetLink) {

      stylesheetLink.href = `./assets/css/${newTemplate}`;
    }
    templateOptions.classList.add('d-none');
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("user_email").value.trim();
  const password = document.getElementById("user_pass").value.trim();
  let valid = true;

  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  if (!email) {
    document.getElementById("email-error").textContent = "Email is required";
    valid = false;
  }

  if (!password) {
    document.getElementById("password-error").textContent = "Password is required";
    valid = false;
  }

  if (valid) {
    alert("Login Successfull")
    addUser();
    document.getElementById("user_email").value = ""
    document.getElementById("user_pass").value = ""
  }


  const baseURL="http://localhost:3000/Users"
  async function addUser() {
    try {
      await fetch(baseURL,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password, })
        }
      )
    }
    catch (error) {
      console.log(error)
    }
  }
});

 async function deleteUser(id) {
    try {
      await fetch(`http://localhost:3000/Users/${id}`,{method: "DELETE"})
    }
    catch (error) {
      console.log(error)
    }
    finally{
      alert("User deleted successfully")
    }
  }

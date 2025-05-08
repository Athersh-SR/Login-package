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
      stylesheetLink.href = `./assets/css/${newTemplate}`;
      templateOptions.classList.add('d-none');
    }
  });


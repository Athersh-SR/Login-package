const passIcon = document.getElementById('pass_icon');
const passwordField = document.getElementById('user_pass');

passIcon.addEventListener('click', () => {
    const isPassword = passwordField.type === 'password';
    passwordField.type = isPassword ? 'text' : 'password';
    passIcon.classList.toggle('fa-eye-slash');
    passIcon.classList.toggle('fa-eye');
});

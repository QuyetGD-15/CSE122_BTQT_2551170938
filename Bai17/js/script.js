const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

function setStatus(input, msgBox, isSuccess, message) {
    if (isSuccess) {
        input.classList.remove('input-error');
        input.classList.add('input-success');
        msgBox.innerHTML = "v Hợp lệ";
        msgBox.className = "msg-success mt-1";
    } else {
        input.classList.remove('input-success');
        input.classList.add('input-error');
        msgBox.innerHTML = "x " + message;
        msgBox.className = "msg-error mt-1";
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let isValid = true;
    if (nameInput.value.trim() === ''){
        setStatus(nameInput, document.getElementById('nameMsg'), false, "Họ và tên không được để trống");
        isValid = false;
    } else {
        setStatus(nameInput, document.getElementById('nameMsg'), true, '');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setStatus(emailInput, document.getElementById('emailMsg'), false, 'Email không hợp lệ (thiếu tên miền)');
        isValid = false;
    } else {
        setStatus(emailInput, document.getElementById('emailMsg'), true, '');
    }
    if (passInput.value.length < 6) {
        setStatus(passInput, document.getElementById('passMsg'), false, 'Mật khẩu khẩu phải có ít nhất 6 kí tự');
        isValid = false;
    } else {
        setStatus(passInput, document.getElementById('passMsg'), true, '');
    }
    if (confirmInput.value === '' || confirmInput.value !== passInput.value) {
        setStatus(confirmInput, document.getElementById('confirmMsg'), false, 'Mật khẩu xác nhận không khớp');
        isValid = false;
    } else {
        setStatus(confirmInput, document.getElementById('confirmMsg'), true, '');
    }
    if (isValid) {
        alert('Đăng ký thành công!');
        // form.submit(); 
    }
});
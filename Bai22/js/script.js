const themeToggle = document.getElementById('themeToggle');
const statusText = document.getElementById('statusText');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('toi');
        statusText.innerText = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        document.body.classList.remove('toi');
        statusText.innerText = 'Đây là giao diện ở chế độ SÁNG (đang tắt).';
    }
});
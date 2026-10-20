function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    document.getElementById('h1').src = "../image/0" + Math.floor(h/10) + ".gif";
    document.getElementById('h2').src = "../image/0" + Math.floor(h%10) + ".gif";
    document.getElementById('m1').src = "../image/0" + Math.floor(m/10) + ".gif";
    document.getElementById('m2').src = "../image/0" + Math.floor(m%10) + ".gif";
    document.getElementById('s1').src = "../image/0" + Math.floor(s/10) + ".gif";
    document.getElementById('s2').src = "../image/0" + Math.floor(s%10) + ".gif";
    let greeting = "Chào buổi sáng!";
    if (h>=12 && h<18) {
        greeting = "Chào buổi chiều!";
    } else if (h>=18) {
        greeting = "Chào buổi tối!";
    }
    document.getElementById('greetingText').innerText = greeting;
}
setInterval(updateClock, 1000);
updateClock();
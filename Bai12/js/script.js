document.getElementById('btnPrint').addEventListener('click', function(){
    let d = parseInt(document.getElementById('inDay').value);
    let m = parseInt(document.getElementById('inMonth').value);
    let y = parseInt(document.getElementById('inYear').value);
    let dateObj = new Date(y, m-1, d);
    let dayIndex = dateObj.getDay();
    let weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    document.getElementById('outYear').innerText = y;
    document.getElementById('outMonth').innerText = "Tháng " + m;
    document.getElementById('outDay').innerText = d;
    document.getElementById('outWeekday').innerText = weekdays[dayIndex];

    let currentHour = new Date().getHours();
    let greeting = "Chào buổi sáng!";
    if (currentHour >=12 && currentHour <18){
        greeting = "Chào buổi chiều!";
    }
    else if( currentHour>=18) {
        greeting = "Chào buổi tối!"
    }
    document.getElementById('outGreeting').innerText = greeting;
});